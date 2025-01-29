import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export type Appointment = {
  id: number;
  start: string;
  duration: number;
};

const Appointments = () => {
  const location = useLocation();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const { service } = location.state || {};

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(`/appointments/${service.id}`);
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAppointments();
  }, [service.id]);

  return (
    <div>
      <h2>{`${service.name} - Available Appointments`}</h2>
      <Link to="/services">Back to Services</Link>
      <ul>
        {appointments.map((appointment) => (
          <li key={service.id}>
            <Link
              to={`/services/${service.id}/book-appointment`}
              state={{ service, appointment }}
              key={appointment.id}
            >
              {`${appointment.start} - ${appointment.duration / 60} minutes`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
