import React from "react";
import { DashboardViewWrap } from "../../index";
import "draft-js/dist/Draft.css";

import { TextAreaInput } from "../../Form";

const Textbox = () => {
  return (
    <DashboardViewWrap>
      <TextAreaInput />
    </DashboardViewWrap>
  );
};

export default Textbox;
