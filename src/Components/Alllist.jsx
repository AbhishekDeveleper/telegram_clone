import React from "react";

const Alllist = ({ userName, isselected, selected }) => {
  return (
    <div className={`sidebar__contactList}`}>
      {userName ? (
        userName.map((items, index) =>
          items?.creator?.name ? (
            <div
              key={items?.creator?.id}
              className={`${
                isselected == items?.creator?.id ? "selected" : "contact_list"
              }`}
              onClick={() => {
                selected(items?.creator?.id, items?.id, items?.creator?.name);
              }}
            >
              <button className="user_image">{items?.creator?.name[0]}</button>
              <p onClick={selected}>{items?.creator?.name}</p>
            </div>
          ) : (
            <div
              key={items?.creator?.id}
              className={`${
                isselected == items?.creator?.id ? "selected" : "contact_list"
              }`}
              onClick={() => {
                selected(items?.creator?.id, items?.id, items?.creator?.name);
              }}
            >
              <button className="user_image">Un</button>
              <p>Unknown</p>
            </div>
          )
        )
      ) : (
        <li>Loading...</li>
      )}
    </div>
  );
};

export default Alllist;
