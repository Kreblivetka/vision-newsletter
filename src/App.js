import { Fragment } from "react";
import background from "./assets/background/glasses.jpg";
import SubscribeText from "./components/Text/SubscribeText";
import './App.css';

function App() {
  return (
    <Fragment>
      <img className="background" alt="glasses" src={background} />
      <SubscribeText/>
    </Fragment>
  );
}

export default App;
