import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
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

const Sidebar = () => {
  const [userName, setUserName] = useState(null);
  const [allActive, setAllActive] = useState("active");
  const [activeisactive, setActiveActive] = useState("noActive");
  const [isselected, setIsselected] = useState(null);
  const [inputClicked, setinputClick] = useState(false);
  const [chatsactive, setchatsactive] = useState("noActive");
  const [linkactive, setlinkactive] = useState("noActive");
  const [fileactive, setfileactive] = useState("noActive");
  const [channelactive, setchannelsactive] = useState("noActive");
  const [showmenu, setshowMenu] = useState(false);
  const sidebar_menu = [
    "saved Messages",
    "Contacts",
    "My Stories",
    "Settings",
    "Night Mode",
    "Install App",
    "Telegram Features",
  ];

  useEffect(() => {
    const fetchChats = async (page = 1) => {
      try {
        const response = await axios.get(
          `https://devapi.beyondchats.com/api/get_all_chats?page=${page}`
        );
        setUserName(response.data.data.data); // assuming response.data is the data you need
        console.log(response.data); // for debugging
      } catch (err) {
        console.error(err);
      }
    };

    fetchChats();
  }, []);

  const isActive = (e) => {
    const classnames = e.target.className.split(" ");
    if (classnames[0] == "noactive" && classnames[1] == "ac") {
      setActiveActive("active");
      setAllActive("noactive");
      setfileactive("noactive");
      setchannelsactive("noactive");
      setchatsactive("noactive");
      setlinkactive("noactive");
    } else if (classnames[0] == "noactive" && classnames[1] == "al") {
      setActiveActive("noactive");
      setAllActive("active");
    } else if (classnames[0] == "noactive" && classnames[1] == "ch") {
      setAllActive("noactive");
      setchatsactive("active");
      setlinkactive("noactive");
      setchannelsactive("noactive");
      setfileactive("noactive");
    } else if (classnames[0] == "noactive" && classnames[1] == "chan") {
      setchatsactive("noactive");
      setlinkactive("noactive");
      setchannelsactive("active");
      setfileactive("noactive");
    } else if (classnames[0] == "noactive" && classnames[1] == "fi") {
      setchatsactive("noactive");
      setlinkactive("noactive");
      setchannelsactive("noactive");
      setfileactive("active");
    } else if (classnames[0] == "noactive" && classnames[1] == "li") {
      setchatsactive("noactive");
      setlinkactive("active");
      setchannelsactive("noactive");
      setfileactive("noactive");
    }
  };

  const selected = (Id, chatId, userName) => {
    setIsselected(Id);
    localStorage.setItem("id", Id);
    localStorage.setItem("chatId", chatId);
    localStorage.setItem("name", userName);
  };

  const inputClick = (e) => {
    setinputClick(true);
    setshowMenu(false);
    console.log(inputClicked);
  };

  const menuIconFunc = () => {
    setshowMenu(!showmenu);
  };

  const backFunc = () => {
    setinputClick(false);
    setAllActive("active");
    setfileactive("noactive");
    setchannelsactive("noactive");
    setchatsactive("noactive");
    setlinkactive("noactive");
  };
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
