import "./NavigationBar.css";
import logo from "../../assets/logo/logo.svg";

function NavigationBar() {
  return (
    <div className="top-bar">
      <img className="glasses-icon" alt="logo" src={logo} />
      <div className="menu">
        <a href="#"className="links">About</a>
        <a href="#" className="links">How it works</a>
        <a href="#" className="links">Contact</a>
      </div>
    </div>
  );
}
export default NavigationBar;