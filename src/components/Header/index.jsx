import { AppBar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useAppState, useDispatch } from "../../provider/RootProvider";
import LoginDialog from "../LoginDialog";
import RegisterDialog from "../RegisterDialog";
import ShareLinkDialog from "../ShareLinkDialog";
import { USER_INFO } from "../constants";

function Header() {
  const { auth, userInfo } = useAppState();
  const dispatch = useDispatch();
  const [openRegister, setOpenRegister] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openShare, setOpenShare] = React.useState(false);

  console.log("auth", auth);

  return (
    <AppBar
      position="sticky"
      variant="elevation"
      color="transparent"
      style={{
        padding: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "white",
      }}
    >
      <Typography variant="h4">Funny Movies</Typography>
      {auth ? (
        <Box display="flex" alignItems="center">
          <Typography variant="h6" style={{ marginRight: 16 }}>
            {userInfo?.username}
          </Typography>

          <Button
            variant="contained"
            onClick={() => {
              setOpenShare(true);
            }}
            style={{ marginRight: 16 }}
          >
            {"Share Video"}
          </Button>

          <Button
            variant="contained"
            onClick={() => {
              localStorage.removeItem(USER_INFO);
              dispatch({ auth: false });
            }}
          >
            {"Đăng xuất"}
          </Button>
        </Box>
      ) : (
        <Box>
          <Button
            variant="contained"
            onClick={() => {
              setOpenLogin(true);
            }}
            style={{ marginRight: 16 }}
          >
            {"Đăng nhập"}
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setOpenRegister(true);
            }}
          >
            {"Đăng ký"}
          </Button>
        </Box>
      )}
      <RegisterDialog
        open={openRegister}
        onClose={() => {
          setOpenRegister(false);
        }}
      />
      <LoginDialog
        open={openLogin}
        onClose={() => {
          setOpenLogin(false);
        }}
      />
      <ShareLinkDialog
        open={openShare}
        onClose={() => {
          setOpenShare(false);
        }}
      />
    </AppBar>
  );
}

export default Header;
