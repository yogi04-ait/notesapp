import { useState } from "react";
import "./App.css";
import Creategroup from "./Components/Creategroup";
import Groupsection from "./Components/Groupsection";
import NotesCard from "./Components/NotesCard";
import Screen from "./Components/Screen";

function App() {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className="flex h-screen w-screen">
      <div className="w-[30%]">
        <Groupsection setModal={setModal} setUser={setUser} />
      </div>
      <div className="w-[70%]">
        {user === null ? <Screen /> : <NotesCard user={user} />}
      </div>
      {modal && <Creategroup setModal={setModal} />}
    </div>
  );
}

export default App;
