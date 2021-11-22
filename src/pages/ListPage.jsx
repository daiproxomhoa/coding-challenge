import { Box } from "@mui/system";
import React from "react";
import VideoCard from "../components/VideoCard";
import { useAppState } from "../provider/RootProvider";

function ListPage() {
  const { listVideo = [] } = useAppState();
  return (
    <Box>
      {listVideo?.map((item) => {
        return <VideoCard key={item.url} info={item} />;
      })}
    </Box>
  );
}

export default ListPage;
