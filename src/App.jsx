import "./App.css";
import Groupsection from "./Components/Groupsection";
import NotesCard from "./Components/NotesCard";
import Screen from "./Components/Screen";

function App() {
  return (
    <div className="flex h-screen w-screen">
      <Groupsection />
      {/* <Screen /> */}
      <NotesCard />
    </div>
  );
}

export default App;
