import React from "react";
import styled from "styled-components";
import { Dialog } from "@material-ui/core";
import { MdClose } from "react-icons/md";
import { CustomDialogProps } from "./models";

export const CustomDialog: React.FC<CustomDialogProps> = ({
  title,
  children,
  handleElementDialogClose,
  ...props
}) => {
  return (
    <StyledDialog {...props}>
      <DialogInnerWrap>
        <DialogHeader>
          {title && (
            <DialogTitle>
              <h2>{title}</h2>
            </DialogTitle>
          )}
          <DialogCloseBtn onClick={handleElementDialogClose}>
            <MdClose />
          </DialogCloseBtn>
        </DialogHeader>
        <DialogContent>{children}</DialogContent>
      </DialogInnerWrap>
    </StyledDialog>
  );
};

const StyledDialog = styled(Dialog)`
  & .MuiPaper-root {
    background-color: transparent;
  }
`;

const DialogInnerWrap = styled.div`
  background: ${(props) => props.theme.colors.elementDialogBg};
  padding: ${(props) => props.theme.padding.doubleBase};
  width: ${(props) => props.theme.scales.builderDialog};
  color: white;
  height: 100%;
`;

const DialogHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const DialogCloseBtn = styled.button`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2rem;
  background: none;
  border: none;
  outline: none;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  ${(props) => props.theme.flex.column};
`;

const DialogTitle = styled.div``;

const DialogContent = styled.div``;
