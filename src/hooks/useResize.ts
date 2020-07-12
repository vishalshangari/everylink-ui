import { useRef, useState, useEffect } from "react";
import { UseResizeSpec } from "./models";

export const useResize = (spec: UseResizeSpec) => {
  const specRef = useRef(spec);
  specRef.current = spec;
  specRef.current.mouseDown = false;

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      document.addEventListener("mousemove", handleMouseMove, false);
      document.addEventListener("mouseup", handleMouseUp, false);
      specRef.current.mouseDown = true;
      e.stopImmediatePropagation();
    };

    const handleMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      document.removeEventListener("mousemove", handleMouseMove, false);
      document.removeEventListener("mouseup", handleMouseUp, false);

      e.stopPropagation();
      e.stopImmediatePropagation();
      // const { item, handleSizeChange } = specRef.current;
      // const { id } = item;
      // const element = document.getElementById(id);
      // let width;
      // let height;

      // if (element && element.parentElement) {
      //   const styles = document.defaultView?.getComputedStyle(element);
      //   if (styles) {
      //     width = parseInt(styles.width);
      //     height = parseInt(styles.height);
      //   }
      //   const parentStyles = document.defaultView?.getComputedStyle(
      //     element.parentElement
      //   );
      //   if (width && height && parentStyles) {
      //     const parentWidth = parseInt(parentStyles.width);
      //     const parentHeight = parseInt(parentStyles.height);
      //     const newWidth =
      //       Math.floor(width / (parentWidth / 25)) * (parentWidth / 25);
      //     const newHeight =
      //       Math.floor(height / (parentHeight / 25)) * (parentHeight / 25);
      //     if (!handleSizeChange) {
      //       element.style.height = `${newHeight}px`;
      //     } else {
      //       handleSizeChange(id, newWidth, newHeight);
      //     }
      //   }
      // }

      const { item, handleSizeChange } = specRef.current;
      const { id } = item;

      handleSizeChange(
        id,
        specRef.current.item.width,
        specRef.current.item.height
      );
      specRef.current.mouseDown = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const { item, handleSizeChange } = specRef.current;
      const { id } = item;
      const element = document.getElementById(id);
      let { width, height } = item;
      if (element && specRef.current.mouseDown) {
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
            if (newWidth >= parentWidth) {
              newWidth = width;
            }
            if (newHeight >= parentHeight) {
              newHeight = height;
            }
          }
        }
        element.style.width = `${newWidth}px`;
        element.style.height = `${newHeight}px`;
        specRef.current.item.width = Math.round(newWidth / 10) * 10;

        specRef.current.item.height = Math.round(newHeight / 10) * 10;
      }
    };
    specRef.current.node?.addEventListener("mousedown", handleMouseDown);
  });

  const resize = (refNode: HTMLDivElement) => {
    if (refNode && refNode !== specRef.current.node) {
      specRef.current.node = refNode;
    }
  };

  return [resize];
};
