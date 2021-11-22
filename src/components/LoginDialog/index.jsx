import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Container,
  Dialog,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "../../provider/RootProvider";
import { LIST_ACCOUNT, USER_INFO } from "../constants";

function LoginDialog(props) {
  const { open, onClose } = props;
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = React.useCallback(
    async (values) => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 250));
      const listAccount = JSON.parse(localStorage.getItem(LIST_ACCOUNT)) || [];
      const userInfo = listAccount.find(
        (v) => v.username === values.username && v.password === values.password
      );
      setLoading(false);
      if (userInfo) {
        localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
        dispatch({
          openSnackbar: true,
          message: "Đăng nhập thành công",
          auth: true,
          userInfo: userInfo,
        });
        onClose();
      } else {
        dispatch({
          openSnackbar: true,
          message: "Đăng nhập thất bại",
          type: "error",
        });
      }
    },
    [dispatch, onClose]
  );

  useEffect(() => {
    reset();
  }, [open, reset]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      keepMounted={false}
      PaperProps={{
        style: { minWidth: 340, padding: 24 },
      }}
      hideBackdrop
    >
      <Typography variant="h6">{"Đăng nhập"}</Typography>
      <Box marginTop={4}>
        <form
          style={{
            alignSelf: "stretch",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="username"
            control={control}
            rules={{
              required: "Trường bắt buộc",
            }}
            render={({ field: { onChange, value, ref } }) => (
              <TextField
                value={value}
                onChange={onChange}
                inputRef={ref}
                label={"Tài khoản"}
                placeholder={"Nhập tài khoản"}
                type="tel"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
          <FormHelperText error>
            {errors?.username?.message || " "}
          </FormHelperText>
          <Controller
            name="password"
            control={control}
            rules={{ required: "Trường bắt buộc" }}
            render={({ field: { onChange, value, ref } }) => (
              <TextField
                inputRef={ref}
                value={value}
                onChange={onChange}
                label={"Mật khẩu"}
                placeholder={"Nhập mật khẩu"}
                type={show ? "text" : "password"}
                style={{ marginTop: 8 }}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShow((old) => !old)}
                      >
                        {show ? (
                          <Visibility fontSize="small" />
                        ) : (
                          <VisibilityOff fontSize="small" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <FormHelperText error>
            {errors?.password?.message || " "}
          </FormHelperText>
          <Box display="flex">
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              size="large"
              onClick={onClose}
            >
              {"Hủy"}
            </Button>
            <LoadingButton
              style={{ marginLeft: 16 }}
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              type="submit"
              loading={loading}
              data-testid="login-btn"
            >
              {"Đăng nhập"}
            </LoadingButton>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
}

export default LoginDialog;
