import React from "react";

const Foldername = ({
  fileactive,
  isActive,
  linkactive,
  chatsactive,
  channelactive,
}) => {
  return (
    <div className="sidebar__folderName">
      <div
        className={`${
          chatsactive == "active" ? "active" : "noactive"
        } ch folder`}
        onClick={isActive}
      >
        Chats
      </div>
      <div
        className={`${
          channelactive == "active" ? "active" : "noactive"
        } chan folder`}
        onClick={isActive}
      >
        Channel
      </div>
      <div
        className={`${
          linkactive == "active" ? "active" : "noactive"
        } li folder`}
        onClick={isActive}
      >
        Links
      </div>
      <div
        className={`${
          fileactive == "active" ? "active" : "noactive"
        } fi folder`}
        onClick={isActive}
      >
        Files
      </div>
    </div>
  );
};

export default Foldername;
