import { LoadingButton } from "@mui/lab";
import { Dialog, FormHelperText, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import YouTube from "react-youtube";
import { useAppState, useDispatch } from "../../provider/RootProvider";
import { LIST_VIDEO } from "../constants";
import { youtube_parser } from "../VideoCard";

function ShareLinkDialog(props) {
  const { open, onClose } = props;
  const dispatch = useDispatch();
  const { listVideo, userInfo } = useAppState();
  const [loading, setLoading] = React.useState(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });
  const videoUrl = watch("link");
  const onSubmit = React.useCallback(
    async (values) => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 250));
      const tmp = [
        { url: values.link, author: userInfo?.username },
        ...(listVideo || []),
      ].reduce((value, current) => {
        const isContain = value.find((v) => v.url === current.url);
        return isContain ? value : [...value, current];
      }, []);

      dispatch({
        listVideo: tmp,
      });
      localStorage.setItem(LIST_VIDEO, JSON.stringify(tmp));
      dispatch({ openSnackbar: true, message: "Share video thành công" });
      onClose();
      setLoading(false);
    },
    [dispatch, listVideo, onClose, userInfo?.username]
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
        style: { minWidth: 500, padding: 24 },
      }}
      hideBackdrop
    >
      <Typography variant="h6">{"Chia sẻ link Youtube"}</Typography>
      <Box marginTop={4}>
        <form
          style={{
            alignSelf: "stretch",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="link"
            control={control}
            rules={{
              required: "Trường bắt buộc",
            }}
            render={({ field: { onChange, value, ref } }) => (
              <TextField
                value={value}
                onChange={onChange}
                inputRef={ref}
                label={"Youtube URL"}
                placeholder={"Nhập link muốn share"}
                type="tel"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
          <FormHelperText error>{errors?.link?.message || " "}</FormHelperText>
          {videoUrl && (
            <YouTube
              videoId={youtube_parser(videoUrl)}
              opts={{
                height: 320,
                width: "100%",
              }}
            />
          )}
          <LoadingButton
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            type="submit"
            loading={loading}
          >
            {"Share"}
          </LoadingButton>
        </form>
      </Box>
    </Dialog>
  );
}

export default ShareLinkDialog;
