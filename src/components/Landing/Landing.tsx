import logo from "assets/logo.png";
import { heading } from "copy/landing";
import "./Landing.css";
import Button from "../library/Button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/services");
  };
  return (
    <div className="splash">
      <h1>{heading}</h1>
      <img src={logo} alt="Lithia Logo" />
      <Button onClick={handleClick}>Get Started</Button>
    </div>
  );
};

export default Landing;
