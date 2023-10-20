import { Fragment } from "react";
import background from "./assets/background/glasses.jpg";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import './App.css';

function App() {
  return (
    <Fragment>
      <img className="background" alt="glasses" src={background} />
      <NavigationBar />
    </Fragment>
  );
}

export default App;
