import React, {
  useState,
  createContext,
  ReactNode,
  ElementType,
  useCallback,
} from "react";
import DeviceSimulator from "../Shared/DeviceSimulator";
import Dashboard from "../Shared/Dashboard";
import Drawer from "@material-ui/core/Drawer";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import {
  StyledActionPanel,
  BuilderContainer,
  ViewContainer,
} from "./components";
import { BuilderProps, Element, ElementList } from "./models";
import {
  MdAddCircle,
  MdWbSunny,
  MdSwapHoriz,
  MdSettings,
} from "react-icons/md";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { DroppapleGrid } from "../Shared/DroppableGrid";
import { devices } from "../Shared/DeviceSimulator/constants";
import { Position } from "./models";
import { DragElement } from "../Shared/DraggableElement";

interface ActionPanelProps {
  panelRight: boolean;
  children?: ReactNode;
}

const ActionPanel = ({ children, panelRight }: ActionPanelProps) => {
  return (
    <StyledActionPanel panelRight={panelRight}>{children}</StyledActionPanel>
  );
};

const Builder: React.FC<BuilderProps> = (props) => {
  const [panelRight, setPanelRight] = useState(true);
  const { displaySize, handleThemeChange, currentTheme } = props;
  const [mobileDashboardOpen, setMobileDashboardOpen] = useState(false);
  const [device, setDevice] = useState(devices[0]);
  const [elements, setElements] = useState<ElementList>({});

  const addBlock = () => {
    const id = `${Math.floor(Math.random() * 10000)}`;
    const newElement: Element<"container"> = {
      type: "container",
      position: {
        top: 0,
        left: 0,
        width: device.width,
        height: 100,
      },
      style: {
        height: 100,
      },
    };
    setElements({
      ...elements,
      [id]: newElement,
    });
  };

  const dragElements = useCallback(
    () =>
      Object.keys(elements).reduce((positions, currentKey) => {
        positions[currentKey] = {
          id: currentKey,
          ...elements[currentKey].position,
          type: "container",
          title: "fuckk" + currentKey,
        };
        return positions;
      }, {} as { [key: string]: DragElement }),
    [elements]
  );

  const setDragElements = (newElement: DragElement) => {
    setElements((prevElements) => ({
      ...prevElements,
      [newElement.id]: {
        ...elements[newElement.id],
        position: {
          ...elements[newElement.id].position,
          left: newElement.left,
          top: newElement.top,
          width: newElement.width,
          height: newElement.height,
        },
      },
    }));
  };

  // Render Panel side per user preference

  return (
    <BuilderContainer>
      <ViewContainer>
        <DeviceSimulator onDeviceChange={setDevice}>
          <DroppapleGrid
            parentHeight={device.height}
            parentWidth={device.width}
            isMobile={displaySize !== "xl" && displaySize !== "lg"}
            elements={dragElements()}
            setElements={setDragElements}
          />
        </DeviceSimulator>
        <ActionPanel panelRight={panelRight}>
          <Tooltip overlay={<span>Add new container</span>}>
            <button onClick={addBlock}>
              <MdAddCircle />
            </button>
          </Tooltip>
          <Tooltip
            overlay={
              <span>
                Switch to {currentTheme === "dark" ? "default" : "dark"} theme
              </span>
            }
          >
            <button
              onClick={() =>
                handleThemeChange(currentTheme === "dark" ? "" : "dark")
              }
            >
              {currentTheme === "dark" ? (
                <MdWbSunny />
              ) : (
                <WiMoonAltWaningCrescent4 />
              )}
            </button>
          </Tooltip>
          <Tooltip overlay={<span>Switch editor layout</span>}>
            <button onClick={() => setPanelRight(!panelRight)}>
              <MdSwapHoriz />
            </button>
          </Tooltip>

          {displaySize !== "xl" && displaySize !== "lg" && (
            <Tooltip overlay={<span>Open dashboard</span>}>
              <button
                onClick={() =>
                  setMobileDashboardOpen(
                    (prevMobileDashboardOpen) => !prevMobileDashboardOpen
                  )
                }
              >
                <MdSettings />
              </button>
            </Tooltip>
          )}
        </ActionPanel>
      </ViewContainer>
      {/* Mobile Temporary Drawer Dashboard */}
      {displaySize !== "xl" && displaySize !== "lg" ? (
        <Drawer
          open={mobileDashboardOpen}
          anchor={panelRight ? "right" : "left"}
          variant={"temporary"}
          onClose={() =>
            setMobileDashboardOpen(
              (prevMobileDashboardOpen) => !prevMobileDashboardOpen
            )
          }
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Dashboard
            isDesktop={false}
            addBlock={addBlock}
            panelRight={panelRight}
          />
        </Drawer>
      ) : (
        <Dashboard isDesktop addBlock={addBlock} panelRight={panelRight} />
      )}
    </BuilderContainer>
  );
};

export default Builder;
