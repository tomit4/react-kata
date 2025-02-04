import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "components/Landing";

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
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
