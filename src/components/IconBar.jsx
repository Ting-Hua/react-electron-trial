import { BsFileText, BsBookmarks, BsInfoCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import "./IconBar.css";
import { useState, useEffect } from "react";

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
  const [icons, setIcons] = useState([]);
  const [iconStates, setIconStates] = useState(["active", "", ""]);

  //init
  // eslint-disable-next-line
  useEffect(() => {
    const handleIconClicked = (clickedIconId) => {
      let states = iconStates;
      states.fill("");
      states[clickedIconId] = "active";
      setIconStates(states);
    };

    const fileIcon = (
      <Icon
        key={0}
        id={0}
        src={<BsFileText />}
        state={iconStates[0]}
        onClick={handleIconClicked}
      />
    );

    const bookmarkIcon = (
      <Icon
        key={1}
        id={1}
        src={<BsBookmarks />}
        state={iconStates[1]}
        onClick={handleIconClicked}
      />
    );

    const infoIcon = (
      <Icon
        key={2}
        id={2}
        src={<BsInfoCircle />}
        state={iconStates[2]}
        onClick={handleIconClicked}
      />
    );
    setIcons([fileIcon, bookmarkIcon, infoIcon]);
  });

  return <div className="icon-bar">{icons}</div>;
}

export default IconBar;
