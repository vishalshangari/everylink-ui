import React, { useState } from "react";
import { DashboardViewWrap, DashSubSingleSelectSetting } from "../../index";
import { Tab, TabPanel } from "react-tabs";
import {
  DashSubTab,
  DashSubTabs,
  DashSubTabList,
  DashSubTabsWrap,
} from "../../index";

interface StateDashSubTab extends Tab {
  isActive: boolean;
}

const StateDashSubTab = ({ isActive, ...props }: StateDashSubTab) => {
  return <DashSubTab isActive={isActive} {...props} />;
};

const Textbox = () => {
  const [activeTab, setActiveTab] = useState(0);
  return <DashboardViewWrap></DashboardViewWrap>;
};

export default Textbox;
