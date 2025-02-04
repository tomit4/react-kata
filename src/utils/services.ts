import type {
  ServiceType,
  AppointmentType,
  FormDataType,
  BookingDetailsType,
} from "../types";

const getServices = async (): Promise<ServiceType[]> => {
  try {
    const response = await fetch("http://localhost:2000/services");
    const services = await response.json();
    return services;
  } catch (err) {
    console.error("ERROR :=>", err);
    return [];
  }
};

const getAppointmentsByServiceId = async (
  serviceId: number,
): Promise<AppointmentType[]> => {
  try {
    const response = await fetch(
      `http://localhost:2000/appointments/${serviceId}`,
    );
    const appointments = await response.json();
    return appointments;
  } catch (err) {
    console.error("ERROR :=>", err);
    return [];
  }
};

const bookAppointmentById = async (
  serviceId: string,
  formData: FormDataType,
): Promise<BookingDetailsType | null> => {
  try {
    const response = await fetch(
      `http://localhost:2000/appointments/book/${serviceId}`,
      {
        method: "PATCH",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      },
    );
    const jsonRes = await response.json();
    return jsonRes;
  } catch (err) {
    console.error("ERROR :=>", err);
    return null;
  }
};

export { getServices, getAppointmentsByServiceId, bookAppointmentById };
