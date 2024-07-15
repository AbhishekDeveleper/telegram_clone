import React from "react";

const InitialFolder = ({ isActive, allActive, activeisactive }) => {
  return (
    <div className="sidebar__folderName">
      <div
        className={`${
          allActive == "active" ? "active" : "noactive"
        } al folder allactives`}
        onClick={isActive}
      >
        All
      </div>

      <div
        className={`${
          activeisactive == "active" ? "active" : "noactive"
        } ac folder`}
        onClick={isActive}
      >
        Active
      </div>
    </div>
  );
};

export default InitialFolder;
