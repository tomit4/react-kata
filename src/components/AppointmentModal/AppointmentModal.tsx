import type { AppointmentType } from "../../types"

import { convertISODate } from "../../utils/utilities";

type AppointmentModalProps = {
  isOpen: Boolean;
  onClose: () => void;
  selectedAppointment: AppointmentType;
};

const AppointmentModal = ({ isOpen, onClose, selectedAppointment }: AppointmentModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Book Appointment For</h2>
        <h3>{convertISODate(selectedAppointment.start)}</h3>
      </div>
    </div>
  )
};

export default AppointmentModal;

