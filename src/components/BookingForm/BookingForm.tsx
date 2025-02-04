import type { ChangeEvent, FormEvent } from "react";
import type { FormDataType } from "../../types";

import Button from "../library/Button";

type BookingFormProps = {
  formData: FormDataType;
  handleFormChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => void;
};

const BookingForm = ({
  formData,
  handleFormChange,
  handleSubmit,
}: BookingFormProps) => {
  return (
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
      <Button className="submit-button" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default BookingForm;
