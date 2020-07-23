import { DialogProps } from "@material-ui/core";
export interface CustomDialogProps extends DialogProps {
  handleElementDialogClose: () => void;
  title?: string;
}
