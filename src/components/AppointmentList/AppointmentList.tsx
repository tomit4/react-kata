import { useState } from "react";
import type { AppointmentType } from "../../types";
import { convertISODate } from "../../utils/utilities";

import "./AppointmentList.css";
import Button from "../library/Button";
import AppointmentModal from "../AppointmentModal";

type AppointmentListProps = {
  appointmentList: AppointmentType[];
};

const AppointmentList = ({ appointmentList }: AppointmentListProps) => {
  const [selectedAppointment, setSelectedAppointment] =
    useState<AppointmentType>();
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);

  const handleAppointmentSelect = (appointment: AppointmentType) => {
    setSelectedAppointment(appointment);
  };
  const handleOpenModal = () => {
    if (selectedAppointment) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
      <Button className="booking-button" onClick={handleOpenModal}>
        Book Now
      </Button>
      {selectedAppointment ? (
        <AppointmentModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          selectedAppointment={selectedAppointment}
        />
      ) : (
        <div>
          {/* TODO: Set up error message: "Please select an appointment to book!" */}
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
