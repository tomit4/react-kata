import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "components/Landing";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
