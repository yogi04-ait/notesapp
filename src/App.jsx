import { useState, useRef } from "react";
import "./App.css";
import Creategroup from "./Components/Creategroup";
import Groupsection from "./Components/Groupsection";
import NotesCard from "./Components/NotesCard";
import Screen from "./Components/Screen";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="flex h-screen w-screen">
      <div className="w-[30%]">
        <Groupsection setModal={setModal} />
      </div>
      <div className="w-[70%]">
        <NotesCard />
      </div>
      {modal && <Creategroup />}
    </div>
  );
}

export default App;
