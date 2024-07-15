import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChatWindow from "./ChatWindow";
import InitialFolder from "./InitialFolder";
import Foldername from "./Foldername";
import Chats from "./Chats";
import Alllist from "./Alllist";
import Common from "./Common";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useAllFunc from "../hooks/useAllFunc";
const Sidebar = () => {
  const {
    userName,
    isActive,
    isselected,
    channelactive,
    chatsactive,
    linkactive,
    allActive,
    activeisactive,
    backFunc,
    menuIconFunc,
    inputClick,
    inputClicked,
    selected,
    fileactive,
    sidebar_menu,
    showmenu,
  } = useAllFunc();
  return (
    <div className="sidebar">
      <div className="sidebar__left">
        <div className="sidebar__searchArea">
          {!inputClicked ? (
            <IconButton onClick={menuIconFunc}>
              <MenuIcon className="menuicon" />
            </IconButton>
          ) : (
            <IconButton onClick={backFunc}>
              <ArrowBackIcon className="menuicon" />
            </IconButton>
          )}
          <div className="inputicons">
            <SearchIcon className="icon" />
            <input
              className="searchbar"
              type="search"
              placeholder="Search"
              onClick={inputClick}
            />
          </div>
        </div>
        {!inputClicked ? (
          <InitialFolder
            isActive={isActive}
            allActive={allActive}
            activeisactive={activeisactive}
          />
        ) : (
          <Foldername
            isActive={isActive}
            channelactive={channelactive}
            chatsactive={chatsactive}
            linkactive={linkactive}
            fileactive={fileactive}
          />
        )}
        {allActive == "active" ? (
          <Alllist
            userName={userName}
            isselected={isselected}
            selected={selected}
          />
        ) : chatsactive == "active" ? (
          <Chats userName={userName} />
        ) : (
          <Common Data={"Data"} />
        )}
      </div>
      <ChatWindow />
      <div
        className={`${showmenu ? "shidebar__menu show_menu" : "sidebar__menu"}`}
      >
        {sidebar_menu.map((menuItem, index) => {
          return (
            <div key={index}>
              <p className="overmenu">{menuItem}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
