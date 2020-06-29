import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";

interface GridLayout {
  width: number;
  height: number;
  padding: [number, number];
}
const ReactGridLayout = WidthProvider(RGL);

const GridLayout: React.FC<GridLayout> = ({ width, padding, children }) => {
  return (
    <ReactGridLayout
      cols={12}
      rowHeight={1}
      width={width}
      compactType={null}
      autoSize={false}
      containerPadding={padding}
    >
      {children}
    </ReactGridLayout>
  );
};

export default GridLayout;
