import type { ServiceType, AppointmentType } from "../types";

const getServices = async (): Promise<ServiceType[]> => {
  try {
    const response = await fetch("http://localhost:2000/services");
    const services = await response.json();
    return services;
  } catch (err) {
    console.error('ERROR :=>', err);
    return [];
  }
};

const getAppointmentsByServiceId = async (serviceId: number): Promise<AppointmentType[]> => {
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

export { getServices, getAppointmentsByServiceId };
