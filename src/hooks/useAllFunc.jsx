import { useEffect, useState } from "react";
import axios from "axios";

const useAllFunc = () => {
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
        setUserName(response.data.data.data);
        console.log(response.data);
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
    setActiveActive("noactive");
  };
  return {
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
  };
};

export default useAllFunc;
