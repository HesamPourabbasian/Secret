import "./App.css";
import Navbar from "./navbar";
import Title from "./title";
import Video from "./video";

function App() {
  return (
    <>
    <div className="bg-bgColor max-w-[1920px] mx-auto">
     <Navbar/>
     <Title />
     <Video/>
     </div>
    </>
  );
}

export default App;
