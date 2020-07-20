import styled from "styled-components";
import Close from "@material-ui/icons/Close";

import {
  Typography,
  Dialog as MuiDialog,
  Button as MuiButton,
  DialogContent as MuiDialogContent,
} from "@material-ui/core";

const imageSizes = {
  sm: "10rem",
  md: "15rem",
  lg: "20rem",
};

export const Dialog = styled(MuiDialog)`
  min-width: 700px;
`;

export const DialogContent = styled(MuiDialogContent)`
  /* max-width: 30vw; */
  /* min-width: 30vw; */
  min-width: 600px;
`;

export const CloseAction = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseIcon = styled(Close)`
  width: 1rem;
  height: 1rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: black;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: ${({ size }) => imageSizes[size]};
  height: ${({ size }) => imageSizes[size]};
  margin-bottom: 1.75rem;
`;

export const TextContent = styled.div`
  text-align: center;
`;

export const Title = styled(Typography).attrs({
  variant: "h5",
  align: "center",
})`
  margin-bottom: 1rem;
`;

export const Text = styled(Typography).attrs({
  color: "textSecondary",
  variant: "body1",
  align: "center",
  gutterBottom: true,
})``;

export const Actions = styled.div`
  margin-top: 1.5rem;
`;

export const SingleAction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export const CancelButton = styled(MuiButton).attrs({
  variant: "outlined",
  color: "secondary",
})``;

export const HotButton = styled(MuiButton).attrs({
  variant: "contained",
  color: "secondary",
})``;

export const NeutralButton = styled(MuiButton).attrs({
  fullWidth: true,
  color: "secondary",
})`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`;
