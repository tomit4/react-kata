import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "./library/Button";
import { useState } from "react";

const BookAppointment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service, appointment } = location.state;

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    make: "",
    model: "",
    modelYear: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/appointments/${appointment.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Navigate back to the service's appointments page after successful booking
        navigate(`/services/${service.id}`);
      } else {
        console.error("Failed to book appointment");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  return (
    <div>
      <h1>Book Appointment</h1>
      <p>{appointment.start}</p>
      <Link to={`/services/${service.id}`}>Back to Available Appointments</Link>
      <form onSubmit={handleSubmit}>
        <input
          name="customerName"
          placeholder="Full Name"
          value={formData.customerName}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="make"
          placeholder="Vehicle Make"
          value={formData.make}
          onChange={handleChange}
        />
        <input
          name="model"
          placeholder="Vehicle Model"
          value={formData.model}
          onChange={handleChange}
        />
        <input
          name="modelYear"
          placeholder="Vehicle Year"
          value={formData.modelYear}
          onChange={handleChange}
        />
        <Button type="submit">Book Appointment</Button>
      </form>
    </div>
  );
};

export default BookAppointment;
