export type AppointmentType = {
  id: string;
  serviceName: string;
  serviceId: number;
  start: string;
  duration: number;
  booked: boolean;
  email?: string;
  customerName?: string;
  modelYear?: number;
  make?: string;
  model?: string;
};
