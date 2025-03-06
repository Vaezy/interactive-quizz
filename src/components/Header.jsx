import { Navbar } from "react-bootstrap";
import logo from "../assets/images/logo.webp";
import "../assets/styles/header.scss";

export const Header = () => {
  return (
    <header>
      <Navbar bg="dark">
        <Navbar.Brand href="/" className="mx-auto">
          <img alt="Logo App" src={logo} />
        </Navbar.Brand>
      </Navbar>
    </header>
  );
};
