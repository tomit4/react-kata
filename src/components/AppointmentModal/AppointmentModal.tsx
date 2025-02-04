import { useState } from "react";
import { bookAppointmentById } from "../../utils/services";
import { convertISODate } from "../../utils/utilities";

import type { FormEvent, ChangeEvent } from "react";
import type {
  AppointmentType,
  FormDataType,
  BookingDetailsType,
} from "../../types";

import BookingForm from "../BookingForm";
import BookingDetails from "../BookingDetails";
import "./AppointmentModal.css";

import Button from "../library/Button";

type AppointmentModalProps = {
  isOpen: Boolean;
  onClose: () => void;
  selectedAppointment: AppointmentType;
};

const AppointmentModal = ({
  isOpen,
  onClose,
  selectedAppointment,
}: AppointmentModalProps) => {
  const [formData, setFormData] = useState<FormDataType>({
    customerName: "",
    email: "",
    make: "",
    model: "",
    modelYear: "",
  });
  const [bookingDetails, setBookingDetails] =
    useState<BookingDetailsType | null>(null);

  if (!isOpen) return null;

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const bookingDetails = await bookAppointmentById(
      selectedAppointment.id,
      formData,
    );
    if (bookingDetails) {
      setBookingDetails(bookingDetails);
    } else {
      // setErrMsg("")
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Book Appointment For</h2>
        <h3>{convertISODate(selectedAppointment.start)}</h3>
        {!bookingDetails ? (
          <BookingForm
            formData={formData}
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
          />
        ) : (
          <BookingDetails />
        )}
        <Button className="close-button" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default AppointmentModal;
