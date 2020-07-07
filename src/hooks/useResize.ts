import { useRef, useState, useEffect } from "react";
import { UseResizeSpec } from "./models";

export const useResize = (spec: UseResizeSpec) => {
  const specRef = useRef(spec);
  specRef.current = spec;
  const [node, setNode] = useState<HTMLDivElement>();
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      setMouseDown(true);
    };

    const handleMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      setMouseDown(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const { item, handleSizeChange } = specRef.current;
      const { id } = item;
      const element = document.getElementById(id);
      let { width, height } = item;
      if (element && mouseDown) {
        const styles = document.defaultView?.getComputedStyle(element);
        if (styles && handleSizeChange) {
          width = parseInt(styles.width);
          height = parseInt(styles.height);
        }
        let newWidth = width + e.movementX;
        let newHeight = height + e.movementY;
        if (newWidth < 20) newWidth = 20;
        if (newHeight < 20) newHeight = 20;
        if (element.parentElement) {
          const parentStyles = document.defaultView?.getComputedStyle(
            element.parentElement
          );
          if (parentStyles) {
            const parentWidth = parseInt(parentStyles.width);
            const parentHeight = parseInt(parentStyles.height);
            if (newWidth + item.left >= parentWidth) {
              newWidth = width;
            }
            if (newHeight + item.top >= parentHeight) {
              newHeight = height;
            }
          }
        }
        if (!handleSizeChange) {
          element.style.width = `${newWidth}px`;
          element.style.height = `${newHeight}px`;
        } else {
          handleSizeChange(id, newWidth, newHeight);
        }
      }
    };
    if (mouseDown) {
      document.addEventListener("mousemove", handleMouseMove, false);
      document.addEventListener("mouseup", handleMouseUp, false);
    }
    node?.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove, false);
      document.removeEventListener("mouseup", handleMouseUp, false);
    };
  }, [node, mouseDown]);

  const resize = (refNode: HTMLDivElement) => {
    if (refNode) {
      setNode(refNode);
    }
  };

  return [resize];
};
