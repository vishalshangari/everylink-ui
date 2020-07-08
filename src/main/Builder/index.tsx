import React, { useState, useCallback, useRef } from "react";
import DeviceSimulator from "../Shared/DeviceSimulator";
import Dashboard from "../Shared/Dashboard";
import Drawer from "@material-ui/core/Drawer";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import {
  BuilderContainer,
  ViewContainer,
  ControlCenter,
  ControlCenterButton,
  ControlCenterMainActions,
  ControlCenterSettings,
  MobileControlCenter,
} from "./components";
import { BuilderProps, Element, ControlPanelActions } from "./models";
import {
  MdAddCircle,
  MdWbSunny,
  MdSwapHoriz,
  MdSave,
  MdUndo,
  MdRedo,
  MdClose,
} from "react-icons/md";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { DroppapleGrid } from "../Shared/DroppableGrid";
import { DragElement } from "../Shared/DraggableElement";
import _ from "lodash";

const device = {
  width: 375,
  height: 812,
};

const Builder: React.FC<BuilderProps> = (props) => {
  const { displaySize, handleThemeChange, currentTheme } = props;

  const idIncrement = useRef(0);
  const [panelRight, setPanelRight] = useState(true);
  const [mobileDashboardOpen, setMobileDashboardOpen] = useState(false);
  const [containers, setContainers] = useState<Element<"container">[]>([]);

  const addContainer = useCallback(() => {
    const id = `container-${idIncrement.current}`;
    idIncrement.current++;
    const newContainer: Element<"container"> = {
      id,
      type: "container",
      position: {
        top: 0,
        left: 0,
        width: device.width,
        height: device.height / 2,
      },
      style: {
        backgroundColor: "blue",
      },
    };
    setContainers((prevContainers) => {
      return [...prevContainers, newContainer];
    });
  }, [idIncrement]);

  const dragContainers = useCallback(
    () =>
      containers.map((container) => ({
        ...container.position,
        type: "container",
        id: container.id,
      })),
    [containers]
  );

  const setDragContainers = useCallback(
    (updateElement: DragElement) => {
      const currentContainerIndex = _.findIndex(containers, {
        id: updateElement.id,
      });
      if (currentContainerIndex >= 0) {
        setContainers((prevContainers) => {
          return prevContainers.map((prevContainer) => {
            if (prevContainer.id === updateElement.id) {
              return {
                ...prevContainers[currentContainerIndex],
                position: {
                  ...prevContainers[currentContainerIndex].position,
                  left: updateElement.left,
                  top: updateElement.top,
                  width: updateElement.width,
                  height: updateElement.height,
                },
              };
            }
            return prevContainer;
          });
        });
      }
    },
    [containers]
  );

  const log = console.log;

  const controlPanelActions: ControlPanelActions[] = [
    {
      type: "Add",
      description: "Add a new container",
      icon: <MdAddCircle />,
      action: () => addContainer(),
    },
    {
      type: "Publish",
      description: "Publish site",
      icon: <MdSave />,
      action: () => log("publish"),
    },
    {
      type: "Undo",
      description: "Undo last change",
      icon: <MdUndo />,
      action: () => log("undo"),
    },
    {
      type: "Redo",
      description: "Redo last change",
      icon: <MdRedo />,
      action: () => log("redo"),
    },
    {
      type: "Exit",
      description: "Exit builder",
      icon: <MdClose />,
      action: () => log("exit"),
    },
  ];

  const controlPanelSettingsOptions: ControlPanelActions[] = [
    {
      type: "Color mode",
      description: `Switch to ${
        currentTheme === "dark" ? "default" : "dark"
      } theme`,
      icon:
        currentTheme === "dark" ? <MdWbSunny /> : <WiMoonAltWaningCrescent4 />,
      action: () => handleThemeChange(currentTheme === "dark" ? "" : "dark"),
    },
    {
      type: "Editor layout",
      description: "Switch editor layout",
      icon: <MdSwapHoriz />,
      action: () => setPanelRight(!panelRight),
    },
  ];

  const ResponsiveControlCenterType: React.FC<{
    children: React.ReactNode;
  }> = ({ children }) => {
    return displaySize == "xl" || displaySize == "lg" ? (
      <ControlCenter>{children}</ControlCenter>
    ) : (
      <MobileControlCenter>{children}</MobileControlCenter>
    );
  };

  const createControlPanelTooltipProps = () => {
    return {
      mouseEnterDelay: 0.75,
      mouseLeaveDelay: 0,
      placement: "bottom",
      ...(displaySize !== "xl" && displaySize !== "lg"
        ? { visible: false }
        : {}),
    };
  };

  return (
    <BuilderContainer>
      <ViewContainer>
        <ResponsiveControlCenterType>
          <ControlCenterMainActions>
            {controlPanelActions.map((option, index) => {
              return (
                <Tooltip
                  {...createControlPanelTooltipProps()}
                  key={index}
                  overlay={option.description}
                >
                  <ControlCenterButton onClick={option.action}>
                    {option.icon}
                  </ControlCenterButton>
                </Tooltip>
              );
            })}
          </ControlCenterMainActions>
          <ControlCenterSettings>
            {controlPanelSettingsOptions.map((option, index) => {
              return (
                <Tooltip
                  {...createControlPanelTooltipProps()}
                  key={index}
                  overlay={option.description}
                >
                  <ControlCenterButton onClick={option.action}>
                    {option.icon}
                  </ControlCenterButton>
                </Tooltip>
              );
            })}
          </ControlCenterSettings>
        </ResponsiveControlCenterType>
        {displaySize !== "xl" && displaySize !== "lg" ? (
          <MobileControlCenter>
            <Drawer anchor={"top"}>
              <div>hello, world</div>
            </Drawer>
          </MobileControlCenter>
        ) : null}

        <DeviceSimulator>
          <DroppapleGrid
            parentHeight={device.height}
            parentWidth={device.width}
            isMobile={displaySize !== "xl" && displaySize !== "lg"}
            elements={dragContainers()}
            setElements={setDragContainers}
          />
        </DeviceSimulator>
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
            addContainer={addContainer}
            panelRight={panelRight}
          />
        </Drawer>
      ) : (
        <Dashboard
          isDesktop
          addContainer={addContainer}
          panelRight={panelRight}
        />
      )}
    </BuilderContainer>
  );
};

export default Builder;
