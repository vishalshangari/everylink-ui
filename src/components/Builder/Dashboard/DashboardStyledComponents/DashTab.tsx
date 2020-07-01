import styled from "styled-components";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

export const StyledTabPanel = styled(TabPanel)``;

export const StyledTabs = styled(Tabs)`
  -webkit-tap-highlight-color: transparent;
  flex-grow: 1;
`;

export const DashTab = styled(Tab)<{ isActive: boolean }>`
  justify-content: center;
  list-style: none;
  position: relative;
  padding: ${(props) => props.theme.padding.base};
  ${(props) => props.theme.flex.row}
  cursor: pointer;
  flex: 1;
  color: ${(props) => props.theme.color.offwhiteBright};
  > * {
    opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  }

  &:hover {
    > * {
      opacity: 1;
    }
  }
  &:focus {
    outline: none;
  }

  /* Border magic */

  border-bottom: ${(props) =>
    `1px solid ` +
    (!props.isActive ? `${props.theme.color.borderGrey}` : `transparent`)};

  &:first-child {
    border-right: ${(props) =>
      `1px solid ` +
      (props.isActive ? `${props.theme.color.borderGrey}` : `transparent`)};
  }

  &:nth-child(2) {
    border-right: ${(props) =>
      `1px solid ` +
      (props.isActive ? `${props.theme.color.borderGrey}` : `transparent`)};
    border-left: ${(props) =>
      `1px solid ` +
      (props.isActive ? `${props.theme.color.borderGrey}` : `transparent`)};
  }

  &:last-child {
    border-left: ${(props) =>
      `1px solid ` +
      (props.isActive ? `${props.theme.color.borderGrey}` : `black`)};
  }

  background: ${(props) =>
    props.isActive ? `inherit` : props.theme.color.darkBackground};
`;

export const TabIcon = styled.div`
  padding-right: ${(props) => props.theme.padding.halfBase};
  display: inline-block;
  line-height: 1.375rem;
`;

export const TabTitle = styled.div`
  display: inline-block;
`;

export const DashTabList = styled(TabList)`
  padding: 0;
  margin: 0;
  ${(props) => props.theme.flex.row}
`;
