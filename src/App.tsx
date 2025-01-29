import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "components/Services";
import Landing from "components/Landing";
import Appointments from "components/Appointments";
import BookAppointment from "components/BookAppointment";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<Appointments />} />
          <Route
            path="/services/:id/book-appointment"
            element={<BookAppointment />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
