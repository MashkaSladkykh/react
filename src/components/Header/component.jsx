import Image from "../shared/Image";
import Link from "../shared/Link";
import logo from "../../logo.svg";
import "./styles.css";

const Header = () => (
  <header className="App-header">
    <Image
      src={logo} 
      alt='logo'
    />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <Link
      className="App-link"
      href="https://reactjs.org"
      text="Learn React"
    />
  </header>
)

export default Header;