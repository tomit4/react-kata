import { BookingDetailsType } from "../../types";

import { convertISODate } from "../../utils/utilities";

import "./BookingDetails.css";

type BookingDetailsProps = {
  bookingDetails: BookingDetailsType;
};

const BookingDetails = ({ bookingDetails }: BookingDetailsProps) => {
  return (
    <div className="booking-details">
      <h4>Booking Details</h4>
      <p>
        <strong>Customer Name: </strong>
        {bookingDetails.customerName}
      </p>
      <p>
        <strong>Email: </strong>
        {bookingDetails.email}
      </p>
      <p>
        <strong>Make: </strong>
        {bookingDetails.make}
      </p>
      <p>
        <strong>Model: </strong>
        {bookingDetails.model}
      </p>
      <p>
        <strong>Model Year: </strong>
        {bookingDetails.modelYear}
      </p>
      <p>
        <strong>Service Name: </strong>
        {bookingDetails.serviceName}
      </p>
      <p>
        <strong>Start Time: </strong>
        {convertISODate(bookingDetails.start)}
      </p>
      <p>
        <strong>Duration: </strong>
        {bookingDetails.duration} minutes
      </p>
      <p>
        <strong>Status: </strong>
        {bookingDetails.booked ? "Booked" : "Available"}
      </p>
    </div>
  );
};

export default BookingDetails;
