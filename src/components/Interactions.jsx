import { Stack, IconButton, Typography } from "@mui/material";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import { useState } from "react";
import { format } from "d3-format";

const thousandFormat = format(",.2s");
const numberFormat = format(",~s");

export const Interactions = ({ up, down }) => {
  const [action, setAction] = useState(0); //temporary to test interaction
  return (
    <Stack width={"100%"} direction={"row"} spacing={{xs: 4, sm: 5, md: 6, lg: 10}} justifyContent={"space-around"} alignItems={"center"}>
      <Stack direction={"row"} spacing={0} alignItems={"center"}>
        <IconButton
          onClick={() => {
            setAction(action !== 1 ? 1 : 0);
            console.log(`like ${action}`);
          }}
          color="primary"
        >
          {action === 1 ? (
            <ThumbUpAltRoundedIcon />
          ) : (
            <ThumbUpAltOutlinedIcon />
          )}
        </IconButton>
        <Typography variant="body2" color={"primary"}>
          {up > 999 ? thousandFormat(up) : numberFormat(up)}
        </Typography>
      </Stack>
      <Stack direction={"row"} spacing={0} alignItems={"center"}>
        <IconButton
          onClick={() => {
            setAction(action !== 2 ? 2 : 0);
            console.log(`dislike ${action}`);
          }}
          color="primary"
        >
          {action === 2 ? (
            <ThumbDownAltRoundedIcon />
          ) : (
            <ThumbDownAltOutlinedIcon />
          )}
        </IconButton>
        <Typography variant="body2" color={"primary"}>
          {down > 999 ? thousandFormat(down) : numberFormat(down)}
        </Typography>
      </Stack>
      <IconButton color="primary">
        <ChatRoundedIcon />
      </IconButton>
      <IconButton color="primary">
        <ShareRoundedIcon />
      </IconButton>
      <IconButton color="primary">
        <BookmarkBorderOutlinedIcon />
      </IconButton>
    </Stack>
  );
};