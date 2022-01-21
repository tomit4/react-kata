import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/Landing";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
