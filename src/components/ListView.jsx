import "./ListView.css";
import { useState } from "react";

function ListItem(props) {
  return (
    <div className={`list-item ${props.dbglevel}`}>
      <div className="list-item-timestamp">{props.time}</div>
      <div className="list-item-content">{props.content}</div>
    </div>
  );
}

function ListView() {
  //eslint-disable-next-line
  const [entries, setEntries] = useState([
    {
      id: 1,
      time: "2020-11-29 11:00:00",
      content: "this is a test.",
      debuglevel: "info",
    },
    {
      id: 2,
      time: "2020-11-29 11:00:01",
      content: "this is a test2.",
      debuglevel: "warning",
    },
    {
      id: 3,
      time: "2020-11-29 11:00:02",
      content: "this is a test3.",
      debuglevel: "error",
    },
  ]);

  return (
    <div className="list-view">
      {entries.map((entry) => (
        <ListItem
          key={entry.id}
          time={entry.time}
          content={entry.content}
          dbglevel={entry.debuglevel}
        />
      ))}
    </div>
  );
}

export default ListView;
