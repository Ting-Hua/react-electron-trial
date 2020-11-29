import ListView from "./ListView";
import { useEffect, useState } from "react";
const { ipcRenderer } = window.require("electron");

function MainView() {
  console.log(__dirname);
  //eslint-disable-next-line
  const [file, setFile] = useState(
    "/Users/TingHua/Desktop/sourceTree/LogViewer/data/Test_20201128.log"
  );

  useEffect(() => {
    ipcRenderer.send("file-openning", file);
    //eslint-disable-next-line
  }, []);

  const [body, setBody] = useState(<div></div>);

  ipcRenderer.once("file-read", (e, entries) => {
    console.log("file-read received");
    console.log(entries);
    if (entries.length > 0) {
      console.log("setbody to listview");
      setBody(<ListView entries={entries} />);
    }
  });

  return <div>{body}</div>;
}

export default MainView;
