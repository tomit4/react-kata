import { useState } from "react";
import type { AppointmentType } from "../../types";
import { convertISODate } from "../../utils/utilities";

import "./AppointmentList.css";
import Button from "../library/Button";

type AppointmentListProps = {
  appointmentList: AppointmentType[];
};

const AppointmentList = ({ appointmentList }: AppointmentListProps) => {
  const [selectedAppointment, setSelectedAppointment] = useState<AppointmentType>();

  const handleAppointmentSelect = (appointment: AppointmentType) => {
    setSelectedAppointment(appointment);
  };

  return (
    <div className="appointment-list">
      <div className="appointment-checklist">
        <h2>Available Appointments</h2>
      </div>
        <form>
          {appointmentList.map((appointment) => (
            <div key={appointment.id} className="appointment-item">
              <input
                type="radio"
                id={appointment.id}
                name="appointment"
                value={appointment.id}
                checked={selectedAppointment?.id === appointment.id}
                onChange={() => handleAppointmentSelect(appointment)}
              />
              <label htmlFor={appointment.id}>
                {convertISODate(appointment.start)}
              </label>
            </div>
          ))}
        </form>
        <Button className="booking-button" onClick={() => {console.log("book appointment")}}>
          Book Now
        </Button>
    </div>
  )
};

export default AppointmentList;
