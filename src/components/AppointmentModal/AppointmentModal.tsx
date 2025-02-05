import { useCallback, useReducer, useState, useEffect } from "react";
import { bookAppointmentById } from "../../utils/services";
import { convertISODate } from "../../utils/utilities";
import { validateEmailInput } from "../../utils/schema-validators";

import type { FormEvent, ChangeEvent } from "react";
import type {
  AppointmentType,
  FormDataType,
  BookingDetailsType,
} from "../../types";

import BookingForm from "../BookingForm";
import BookingDetails from "../BookingDetails";

import Button from "../library/Button";

import "./AppointmentModal.css";
import CloseIcon from "../../assets/close-icon.svg";

type AppointmentModalProps = {
  isOpen: Boolean;
  onClose: () => void;
  selectedAppointment: AppointmentType;
};

const initialFormData: FormDataType = {
  customerName: "",
  email: "",
  make: "",
  model: "",
  modelYear: "",
};

const formReducer = (
  state: FormDataType,
  action: { type: string; payload?: { name: string; value: string } },
) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return action.payload
        ? { ...state, [action.payload.name]: action.payload.value }
        : { ...state };
    case "RESET":
      return initialFormData;
    default:
      return state;
  }
};

const AppointmentModal = ({
  isOpen,
  onClose,
  selectedAppointment,
}: AppointmentModalProps) => {
  const [formData, dispatch] = useReducer(formReducer, initialFormData);
  const [bookingDetails, setBookingDetails] =
    useState<BookingDetailsType | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");

  const handleFormChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: { name: e.target.name, value: e.target.value },
    });
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        validateEmailInput(formData.email);
        setErrMsg("");
        setIsLoading(true);
        const bookingDetails = await bookAppointmentById(
          selectedAppointment.id,
          formData,
        );
        if (bookingDetails) {
          setBookingDetails(bookingDetails);
          dispatch({ type: "RESET" });
        } else {
          throw new TypeError("Network error: Please check your connection");
        }
      } catch (error) {
        const e = error as Error;
        setErrMsg(e.message);
      } finally {
        setIsLoading(false);
      }
    },
    [formData, selectedAppointment.id],
  );

  useEffect(() => {
    if (!selectedAppointment.id) return;

    const fetchBookingDetails = async () => {
      try {
        setIsLoading(true);
        setErrMsg("");
        const bookingDetails = await bookAppointmentById(
          selectedAppointment.id,
          formData,
        );
        if (!bookingDetails)
          throw new TypeError("Network error: Please check your connection");
        setBookingDetails(bookingDetails);
      } catch (err) {
        const error = err as Error;
        setErrMsg(error.message);
      } finally {
        setIsLoading(false);
      }
    };
  }, [selectedAppointment.id, formData]);

  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Book Appointment For</h2>
        <h3>{convertISODate(selectedAppointment.start)}</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : !bookingDetails ? (
          <BookingForm
            formData={formData}
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
          />
        ) : (
          <BookingDetails bookingDetails={bookingDetails} />
        )}
        <Button className="close-button" onClick={onClose}>
          <img
            className={"close-icon"}
            src={CloseIcon}
            alt="Close Modal Button"
          />
        </Button>
        {errMsg.length > 0 && <p className="error-message">{errMsg}</p>}
      </div>
    </div>
  );
};

export default AppointmentModal;
