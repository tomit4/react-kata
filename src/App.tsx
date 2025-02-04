import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "components/Landing";
import Scheduler from "components/Scheduler";

const App = () => {
  return (
    <main>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/scheduler" element={<Scheduler />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
