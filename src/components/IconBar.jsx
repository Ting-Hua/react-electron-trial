import { BsFileText, BsBookmarks, BsInfoCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import "./IconBar.css";

function Icon(props) {
  return (
    <div className="icon">
      {/* eslint-disable-next-line */}
      <a className={props.status} href="#">
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
  return (
    <div className="icon-bar">
      <Icon src={<BsFileText />} status="active" />
      <Icon src={<BsBookmarks />} />
      <Icon src={<BsInfoCircle />} />
    </div>
  );
}

export default IconBar;
