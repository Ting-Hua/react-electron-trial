import "./ListView.css";

function ListItem(props) {
  return (
    <div className={`list-item ${props.dbglevel}`}>
      <div className="list-item-timestamp">{props.time}</div>
      <div className="list-item-content">{props.content}</div>
    </div>
  );
}

function ListView(props) {
  return (
    <div className="list-view">
      {props.entries.map((entry) => (
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
