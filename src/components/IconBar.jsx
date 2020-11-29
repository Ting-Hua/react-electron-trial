import { BsFileText, BsBookmarks, BsInfoCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import "./IconBar.css";

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

function IconBar(props) {
  const getSrc = (iconName) => {
    if (iconName === "File") {
      return <BsFileText />;
    } else if (iconName === "Bookmarks") {
      return <BsBookmarks />;
    } else {
      return <BsInfoCircle />;
    }
  };

  return (
    <div className="icon-bar">
      {props.items.map((item) => (
        <Icon
          key={item.id}
          id={item.id}
          src={getSrc(item.icon)}
          state={item.state}
          onClick={props.onClick}
        />
      ))}
    </div>
  );
}

export default IconBar;
