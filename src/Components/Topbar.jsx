import React from "react";
import SentimentSatisfiedSharpIcon from "@mui/icons-material/SentimentSatisfiedSharp";
import AttachFileSharpIcon from "@mui/icons-material/AttachFileSharp";
import KeyboardVoiceSharpIcon from "@mui/icons-material/KeyboardVoiceSharp";
import MessageArea from "./MessageArea";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Topbar = () => {
  let username = localStorage.getItem("name");
  let letter = username.substring(0, 2);

  return (
    <div className="sidebar__right">
      <div className="sidebar__right-top">
        <div className="top_left">
          <span className="name_image">{letter}</span>
          <p>{username}</p>
        </div>
        <div className="top_right">
          <div className="top_right-i">
            <SearchIcon />
          </div>
          <div className="top_right-i">
            <LocalPhoneIcon />
          </div>
          <div className="top_right-i">
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <MessageArea />
      <div className="sidebar__right-bottom">
        <SentimentSatisfiedSharpIcon className="faceicon" />
        <input type="text" placeholder="Message" className="messagebar" />
        <AttachFileSharpIcon className="aticon" />
        <KeyboardVoiceSharpIcon className="speaker" />
      </div>
    </div>
  );
};

export default Topbar;
