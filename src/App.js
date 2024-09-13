import "./App.css";
import ThemeSwitch from "./components/ThemeSwitch";
import Webinar from "./pages/Webinar";

function App() {
  return (
    <div className="App dark:bg-[#151A22]">
      <Webinar />
      <ThemeSwitch />
    </div>
  );
}

export default App;
