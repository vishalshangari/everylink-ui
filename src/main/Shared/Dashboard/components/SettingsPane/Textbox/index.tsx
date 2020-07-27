import React from "react";
import { DashboardViewWrap } from "../../index";
import { Tab } from "react-tabs";
import { DashSubTab } from "../../index";

interface StateDashSubTab extends Tab {
  isActive: boolean;
}

const StateDashSubTab = ({ isActive, ...props }: StateDashSubTab) => {
  return <DashSubTab isActive={isActive} {...props} />;
};

const Textbox = () => {
  return <DashboardViewWrap></DashboardViewWrap>;
};

export default Textbox;
