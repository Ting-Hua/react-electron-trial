import { BsFileText, BsBookmarks, BsInfoCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import "./IconBar.css";
import { useState } from "react";

function Icon(props) {
  return (
    <div className="icon">
      {/* eslint-disable-next-line */}
      <a
        className={props.state}
        href="#"
        onClick={() => {
          console.log("clicked: " + props.id);
          props.onClick(props.id);
        }}
      >
        <IconContext.Provider
          value={{
            className: "react-icons",
          }}
        >
          {props.src}
        </IconContext.Provider>
      </a>
    </div>
  );
}

function IconBar() {
  const [icons, setIcons] = useState([
    { id: 0, src: <BsFileText />, state: "active" },
    { id: 1, src: <BsBookmarks />, state: "" },
    { id: 2, src: <BsInfoCircle />, state: "" },
  ]);

  let handleIconClicked = (clickedIconId) => {
    setIcons((temp_icons) => {
      temp_icons
        .filter((icon) => icon.state === "active")
        .map((icon) => (icon.state = ""));
      temp_icons
        .filter((icon) => icon.id === clickedIconId)
        .map((icon) => (icon.state = "active"));
      return [...temp_icons]; // return new array to apply the changes
    });
    console.log("new icons:" + icons.map((icon) => icon.state));
  };

  return (
    <div className="icon-bar">
      {icons.map((icon) => (
        <Icon
          key={icon.id}
          id={icon.id}
          src={icon.src}
          state={icon.state}
          onClick={handleIconClicked}
        />
      ))}
    </div>
  );
}

export default IconBar;
