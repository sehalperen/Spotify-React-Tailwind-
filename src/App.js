import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
import Bottombar from "components/Bottombar";
import Content from "components/Content";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Bottombar />
    </Router>
  );
}

export default App;
