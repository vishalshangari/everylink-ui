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
import {
  BuilderProps,
  Element,
  ControlPanelActions,
  ElementType,
} from "./models";
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
import _ from "lodash";
import { ContainerList } from "../Shared/ContainerList";
import { getElementPathById } from "./utils";

const device = {
  width: 375,
  height: 812,
};

const Builder: React.FC<BuilderProps> = (props) => {
  const { displaySize, handleThemeChange, currentTheme } = props;

  const containerIdIncrement = useRef(0);
  const elementIdIncrement = useRef(0);
  const [panelRight, setPanelRight] = useState(true);
  const [mobileDashboardOpen, setMobileDashboardOpen] = useState(false);
  const [containers, setContainers] = useState<
    Element<ElementType.CONTAINER>[]
  >([]);

  const createDefaultContainer = useCallback(() => {
    const id = `container-${containerIdIncrement.current}`;
    containerIdIncrement.current++;
    const newContainer: Element<ElementType.CONTAINER> = {
      id,
      type: ElementType.CONTAINER,
      position: {
        top: 0,
        left: 0,
        width: device.width,
        height: device.height / 10,
      },
      style: {
        backgroundColor: "blue",
      },
      elements: [],
    };
    return newContainer;
  }, []);

  const createDefaultElement = useCallback((type: ElementType) => {
    let id = `${type}-${elementIdIncrement.current}`;
    elementIdIncrement.current++;
    let newElement: Element<ElementType>;
    switch (type) {
      case ElementType.BUTTON:
        newElement = {
          id,
          type: ElementType.BUTTON,
          position: {
            top: 0,
            left: 0,
            width: 50,
            height: 20,
          },
          style: { label: "fs", link: "sfsa" },
        };
        break;
      case ElementType.IMAGE:
        newElement = {
          id,
          type: ElementType.IMAGE,
          position: {
            top: 0,
            left: 0,
            width: 50,
            height: 50,
          },
          style: { src: "fs" },
        };
        break;
      case ElementType.TEXTBOX:
        newElement = {
          id,
          type: ElementType.TEXTBOX,
          position: {
            top: 0,
            left: 0,
            width: 50,
            height: 20,
          },
          style: { content: "fs" },
        };
        break;
      case ElementType.CONTAINER:
        id = `container2-${containerIdIncrement.current}`;
        containerIdIncrement.current++;
        newElement = {
          id,
          type: ElementType.CONTAINER,
          position: {
            top: 0,
            left: 0,
            width: device.width,
            height: 50,
          },
          style: {
            backgroundColor: "darkblue",
          },
          elements: [],
        };
        break;
      default:
        throw new Error("what");
        break;
    }

    return newElement;
  }, []);

  const addContainer = useCallback(() => {
    const newContainer = createDefaultContainer();
    setContainers((prevContainers) => {
      return [...prevContainers, newContainer];
    });
  }, [createDefaultContainer]);

  const addElement = useCallback(
    (id: string, type: ElementType) => {
      const elementPath = getElementPathById(id, containers);
      const foundContainer = _.get(containers, elementPath);
      const newContainer = createDefaultElement(type);
      setContainers((prevContainers) => {
        const newContainers = [...prevContainers];
        _.set(newContainers, elementPath, {
          ...foundContainer,
          elements: [...foundContainer.elements, newContainer],
        });
        return [...newContainers];
      });
    },
    [containers, createDefaultElement]
  );

  const handleFindElement = useCallback(
    (id: string) => {
      const elementPath = getElementPathById(id, containers);
      const foundElement = _.get(containers, elementPath);
      const parentPath = elementPath.substring(0, elementPath.length - 2);
      const parentContainer = _.get(containers, parentPath, containers);
      const foundElementIndex = _.findIndex(parentContainer, foundElement);
      return {
        parentPath,
        parentContainer,
        elementPath,
        element: foundElement,
        index: foundElementIndex,
      };
    },
    [containers]
  );

  const handleMoveElement = useCallback(
    (
      id: string,
      { index, top, left }: { index?: number; top?: number; left?: number }
    ) => {
      const elementPath = getElementPathById(id, containers);
      console.log(elementPath);
      setContainers((prevContainers) => {
        let newContainers = [...prevContainers];
        const foundElement = _.get(newContainers, elementPath);
        const parentPath = elementPath.substring(0, elementPath.length - 2);
        console.log(parentPath);
        const parentContainer = _.get(newContainers, parentPath, newContainers);
        console.log(parentContainer);
        const foundElementIndex = _.findIndex(parentContainer, foundElement);
        if (_.isNumber(index)) {
          parentContainer.splice(foundElementIndex, 1);
          parentContainer.splice(index, 0, foundElement);
          newContainers = _.set(newContainers, parentPath, parentContainer);
        } else {
          parentContainer[foundElementIndex] = {
            ...parentContainer[foundElementIndex],
            position: {
              ...parentContainer[foundElementIndex].position,
              top,
              left,
            },
          };
        }
        console.log(newContainers);
        return [...newContainers];
      });
    },
    [containers]
  );

  const handleResizeElement = useCallback(
    (id: string, width: number, height: number) => {
      const elementPath = getElementPathById(id, containers);
      console.log(elementPath);
      setContainers((prevContainers) => {
        let newContainers = [...prevContainers];
        const foundElement = _.get(newContainers, elementPath);
        newContainers = _.set(newContainers, elementPath, {
          ...foundElement,
          position: {
            ...foundElement.position,
            width,
            height,
          },
        });
        return [...newContainers];
      });
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
          <ContainerList
            addElement={addElement}
            handleMoveElement={handleMoveElement}
            handleResizeElement={handleResizeElement}
            handleFindElement={handleFindElement}
            containers={containers}
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
