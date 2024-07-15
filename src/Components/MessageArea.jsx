import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { format, parseISO } from "date-fns";

import moment from "moment-timezone";
const MessageArea = () => {
  const [creatorid, setCreatorid] = useState(null);
  const [chatData, setChatData] = useState(null);
  const [timezone, settimezone] = useState("Asia/Kolkata");

  let id = localStorage.getItem("id");
  let chatId = localStorage.getItem("chatId");
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const container = messagesContainerRef.current;
    container.scrollTop = container.scrollHeight;
  }, [chatData]);

  useEffect(() => {
    setCreatorid(id);
    // console.log(creatorid);
  }, [id]);

  useEffect(() => {
    const responseFunc = async (Id) => {
      const response = await axios.get(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${Id}`
      );
      console.log(response.data.data);
      setChatData(response.data.data);
    };
    responseFunc(chatId);
  }, [creatorid]);

  return (
    <div className="sidebar__right-messageArea">
      <div className="messages-container" ref={messagesContainerRef}>
        {chatData
          ? [...chatData].reverse().map((item, index) => {
              const formattedTime = moment(item.created_at)
                .tz(timezone)
                .format("hh:mm A");

              const date = format(parseISO(item.created_at), "d");
              const month = format(parseISO(item.created_at), "MMM");
              return item.sender_id == creatorid ? (
                <div className="outerdiv">
                  <p className="monthDate">
                    {month} &nbsp;
                    {date}
                  </p>
                  <div className="senderMessage" key={index}>
                    <p className="messageSend">{item.message}</p>
                    <span className="time">{formattedTime}</span>
                  </div>
                </div>
              ) : (
                <div className="messagereceive">
                  <p className="messageReceived">{item.message}</p>
                  <span className="time">{formattedTime}</span>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default MessageArea;
