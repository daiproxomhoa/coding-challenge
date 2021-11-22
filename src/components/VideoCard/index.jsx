import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import YouTube from "react-youtube";
export function youtube_parser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
}

export const stringifyUrl = function (obj) {
  var str = [];
  for (const p in obj)
    if (obj.hasOwnProperty(p)) {
      const value = obj[p];
      str.push(
        encodeURIComponent(p) +
          "=" +
          encodeURIComponent(
            typeof value === "object"
              ? JSON.stringify(value)
              : typeof value === "string" || typeof value === "number"
              ? value
              : ""
          )
      );
    }
  return str.join("&");
};

function VideoCard(props) {
  const { info } = props;
  const { url, author } = info;
  const [data, setData] = React.useState({});
  const getData = React.useCallback(async () => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?${stringifyUrl({
        id: youtube_parser(url),
        part: "snippet,statistics",
        key: "AIzaSyDLDdAdo9WKfmcFr230OzkaZXX9pmbwSn8",
      })}`,
      {
        method: "get",
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
        },
      }
    );
    const json = await res.json();
    setData(json?.items?.[0]);
  }, [url]);

  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Box marginTop={2} display="flex">
      <YouTube
        videoId={data?.id}
        opts={{
          height: 180,
          width: 320,
        }}
      />
      <Box marginLeft={4}>
        <Typography variant="h6" color="error" data-testid="title-video">
          {data?.snippet?.title}
        </Typography>
        <Typography variant="subtitle1">
          {"Shared by"}:&nbsp;{author}
        </Typography>
        <Box display="flex" alignItems="center">
          {data?.statistics?.likeCount} &nbsp;
          <IconButton size="small" style={{ padding: 4 }}>
            <ThumbUpAltOutlinedIcon />
          </IconButton>{" "}
          &emsp;
          {data?.statistics?.dislikeCount} &nbsp;{" "}
          <IconButton size="small" style={{ padding: 4 }}>
            <ThumbDownAltOutlinedIcon />{" "}
          </IconButton>{" "}
        </Box>
        <Typography variant="subtitle1">{"Description"}</Typography>
        <Typography
          variant="body2"
          sx={{
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
            overflow: "hidden",
          }}
        >
          {data.snippet?.description}
        </Typography>
      </Box>
    </Box>
  );
}

export default VideoCard;
