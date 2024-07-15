import React from "react";

const Chats = ({ userName }) => {
  console.log(userName);
  return (
    <div className="chatsbox">
      {userName ? (
        userName.map((items) => {
          let first_name;
          let name_image;
          if (items?.creator?.name != null) {
            first_name = items?.creator?.name.split(" ")[0];
            name_image = first_name.substring(0, 2);
          } else {
            first_name = "Unknown";
            name_image = "Un";
          }

          return (
            <div className="chatsContainer">
              <span className="name_image">{name_image}</span>
              <p>{first_name}</p>
            </div>
          );
        })
      ) : (
        <li> No items </li>
      )}
    </div>
  );
};

export default Chats;
