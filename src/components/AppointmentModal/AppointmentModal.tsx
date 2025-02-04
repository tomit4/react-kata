import { useState } from "react";
import { bookAppointmentById } from "../../utils/services";

import type { FormEvent, ChangeEvent } from "react";
import type {
  AppointmentType,
  FormDataType,
  BookingDetailsType,
} from "../../types";

import { convertISODate } from "../../utils/utilities";
import "./AppointmentModal.css";

import Button from "../library/Button";

type AppointmentModalProps = {
  isOpen: boolean;
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
        <form className="modal-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Make:
            <input
              type="text"
              name="make"
              value={formData.make}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Model:
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Model Year:
            <input
              type="text"
              name="modelYear"
              value={formData.modelYear}
              onChange={handleFormChange}
              required
            />
          </label>
          {bookingDetails ? <p>{bookingDetails.customerName}</p> : <div></div>}
          <Button className="submit-button" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
