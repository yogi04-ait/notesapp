import { useState } from "react";
import "./App.css";
import Creategroup from "./Components/Creategroup";
import Groupsection from "./Components/Groupsection";
import NotesCard from "./Components/NotesCard";
import Screen from "./Components/Screen";

function App() {
  const [modal, setModal] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    <div className="flex h-screen w-screen">
      <div className={`${userId ? "hidden" : "w-full"} sm:w-[30%] sm:block`}>
        <Groupsection setModal={setModal} setUserId={setUserId} />
      </div>
      <div className={`${userId ? "w-full" : "hidden"} sm:w-[70%] sm:block  `}>
        {userId === null ? (
          <Screen />
        ) : (
          <NotesCard userId={userId} setUserId={setUserId} />
        )}
      </div>
      {modal && <Creategroup setModal={setModal} />}
    </div>
  );
}

export default App;
