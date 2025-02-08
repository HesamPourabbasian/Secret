import "./App.css";
import Discover from "./discover";
import Footer from "./footer";
import Navbar from "./navbar";
import Table from "./table";
import Title from "./title";
import Tracker from "./tracker";
import Video from "./video";
import Welcome from "./welcome";

function App() {
  return (
    <>
      <div className="bg-bgColor max-w-[1920px] mx-auto">
        <Navbar />
        <Title />
        <Video />
        <Tracker />
        <Welcome />
        <Table />
        <Discover />
        <Footer />
      </div>
    </>
  );
}

export default App;
