import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { Alert } from "@mui/material";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import React from "react";
import { useAppState, useDispatch } from "../provider/RootProvider";

function TransitionBox(props) {
  return <Slide {...props} direction="left" />;
}

const SnackbarCustom = (props) => {
  const dispatch = useDispatch();
  const { openSnackbar, type, message } = useAppState();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ openSnackbar: false, type: "" });
  };

  // Type info | success | warning | error
  const severity =
    typeof type === "number"
      ? type === 200
        ? "success"
        : "error"
      : type || "success";

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={handleClose}
        TransitionComponent={TransitionBox}
      >
        <Alert
          variant="filled"
          severity={severity}
          iconMapping={{
            error: <ErrorRoundedIcon />,
            success: <CheckCircleOutlineRoundedIcon />,
            warning: <WarningRoundedIcon />,
            info: <InfoRoundedIcon />,
          }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default SnackbarCustom;
