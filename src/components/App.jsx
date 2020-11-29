import { useState } from "react";
import "./App.css";
import IconBar from "./IconBar";
import ListView from "./ListView";
import Bookmarks from "./Bookmarks";
import About from "./About";

function App() {
  const [items, setItems] = useState([
    { id: 0, icon: "File", state: "active" },
    { id: 1, icon: "Bookmarks", state: "" },
    { id: 2, icon: "Info", state: "" },
  ]);

  const listView = <ListView />;
  const bookmarkView = <Bookmarks />;
  const aboutView = <About />;
  const [body, setBody] = useState(listView);

  const handleStateChanged = (btnId) => {
    setItems((temp_items) => {
      temp_items
        .filter((item) => item.state === "active")
        .map((item) => (item.state = ""));
      temp_items
        .filter((item) => item.id === btnId)
        .map((item) => (item.state = "active"));
      return [...temp_items]; // return new array to apply the changes
    });
    console.log("new states:" + items.map((item) => item.state));

    if (btnId === 0) {
      setBody(listView);
    } else if (btnId === 1) {
      setBody(bookmarkView);
    } else {
      setBody(aboutView);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <IconBar items={items} onClick={handleStateChanged} />
      </header>
      {body}
    </div>
  );
}

export default App;
