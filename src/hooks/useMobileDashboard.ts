import { useState } from "react";
import BooleanHook from "./BooleanHook";

const useMobileDashboard: BooleanHook = (defaultValue) => {
  const [mobileDashboardOpen, setMobileDashboardOpen] = useState(defaultValue);

  const handleMobileDashboardToggle = () => {
    setMobileDashboardOpen(!mobileDashboardOpen);
  };

  return [mobileDashboardOpen, handleMobileDashboardToggle];
};

export default useMobileDashboard;
