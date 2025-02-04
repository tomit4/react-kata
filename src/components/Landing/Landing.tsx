import { heading } from "../../copy/landing";
import { intro } from "../../copy/landing";
import Logo from "../../assets/logo.png";
import Button from "../library/Button";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="splash">
      <h1>{heading}</h1>
      <img src={Logo} alt="Lithia & Driveway's Logo" />
      <p className="splash-intro">{intro}</p>
      <Button className="get-started-button" href="/scheduler">
        Get Started
      </Button>
      <footer className="splash-footer">
        <h2>Need More Info?</h2>
        <p>Email:</p>
        <a
          aria-label="email"
          role="navigation"
          href="mailto: supportbutton@driveway.com"
        >
          supportbutton@drivway.com
        </a>
        <p>Phone Number:</p>
        <a aria-label="5 5 5. 8 7 2. 3 2 8 9." href="tel:5558723289">
          555-872-3289
        </a>
      </footer>
    </div>
  );
};

export default Landing;
