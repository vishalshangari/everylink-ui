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
  ElementList,
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
import { getElementPathById, createDefaultElement } from "./utils";

const device = {
  width: 375,
  height: 812,
};

const Builder: React.FC<BuilderProps> = (props) => {
  const { displaySize, handleThemeChange, currentTheme } = props;

  const elementIdIncrement = useRef(0);
  const [panelRight, setPanelRight] = useState(true);
  const [mobileDashboardOpen, setMobileDashboardOpen] = useState(false);
  const [elements, setElements] = useState<Element<ElementType>[]>([]);
  const [selectedElement, setSelectedElement] = useState<
    Element<ElementType>
  >();

  const addElement = useCallback(
    (id: string, type: ElementType) => {
      let containerIndex;
      if (type === ElementType.CONTAINER) {
        if (id === "root") {
          containerIndex = elements.length;
        } else {
          const elementPath = getElementPathById(id, elements);
          const foundContainer = _.get(elements, elementPath);
          containerIndex = foundContainer.length;
        }
      }
      const newContainer = createDefaultElement(
        type,
        elementIdIncrement.current,
        type === ElementType.CONTAINER ? device.width : undefined,
        id === "root" ? 100 : 50,
        containerIndex
      );
      elementIdIncrement.current++;
      if (id === "root") {
        setElements((prevElements) => {
          const newElements = [...prevElements];
          return [...newElements, newContainer];
        });
      } else {
        const elementPath = getElementPathById(id, elements);
        const foundContainer = _.get(elements, elementPath);
        elementIdIncrement.current++;
        setElements((prevElements) => {
          const newElements = [...prevElements];
          _.set(newElements, elementPath, {
            ...foundContainer,
            elements: [...foundContainer.elements, newContainer],
          });
          return [...newElements];
        });
      }
    },
    [elements]
  );

  const handleFindElement = useCallback(
    (id: string) => {
      const elementPath = getElementPathById(id, elements);
      const foundElement = _.get(elements, elementPath);
      const parentPath = elementPath.substring(0, elementPath.length - 2);
      const parentContainer = _.get(elements, parentPath, elements);
      const foundElementIndex = _.findIndex(parentContainer, foundElement);
      return {
        parentPath,
        parentContainer,
        elementPath,
        element: foundElement,
        index: foundElementIndex,
      };
    },
    [elements]
  );

  const updateElement = (updateElement: Element<ElementType>) => {
    const { element: foundElement, elementPath } = handleFindElement(
      updateElement.id
    );
    setElements((prevElements) => {
      const newElements = [...prevElements];
      _.set(newElements, elementPath, {
        ...foundElement,
        ...updateElement,
      });
      return [...newElements];
    });
  };

  const handleMoveElement = useCallback(
    (
      id: string,
      { index, top, left }: { index?: number; top?: number; left?: number }
    ) => {
      setElements((prevElements) => {
        let newElements = [...prevElements];
        const {
          element: foundElement,
          parentPath,
          parentContainer,
          index: foundElementIndex,
        } = handleFindElement(id);
        if (_.isNumber(index)) {
          parentContainer.splice(foundElementIndex, 1);
          parentContainer.splice(index, 0, foundElement);
          newElements = _.set(newElements, parentPath, parentContainer);
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
        return [...newElements];
      });
    },
    [handleFindElement]
  );

  const handleResizeElement = useCallback(
    (id: string, width: number, height: number) => {
      const elementPath = getElementPathById(id, elements);
      setElements((prevElements) => {
        let newElements = [...prevElements];
        const foundElement = _.get(newElements, elementPath);
        newElements = _.set(newElements, elementPath, {
          ...foundElement,
          position: {
            ...foundElement.position,
            width,
            height,
          },
        });
        return [...newElements];
      });
    },
    [elements]
  );

  const updateSelectedElement = useCallback(
    (id: string) => {
      const { element } = handleFindElement(id);
      setMobileDashboardOpen(true);
      setSelectedElement(element);
    },
    [handleFindElement]
  );

  const log = console.log;

  const controlPanelActions: ControlPanelActions[] = [
    {
      type: "Add",
      description: "Add a new container",
      icon: <MdAddCircle />,
      action: () => addElement("root", ElementType.CONTAINER),
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
            containers={elements as Element<ElementType.CONTAINER>[]}
            selectedElement={selectedElement}
            updateSelectedElement={updateSelectedElement}
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
            panelRight={panelRight}
            selectedElement={selectedElement}
            updateElement={updateElement}
          />
        </Drawer>
      ) : (
        <Dashboard
          isDesktop
          panelRight={panelRight}
          selectedElement={selectedElement}
          updateElement={updateElement}
        />
      )}
    </BuilderContainer>
  );
};

export default Builder;
