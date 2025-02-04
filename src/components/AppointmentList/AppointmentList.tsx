import type { AppointmentType } from "../../types";

import "./AppointmentList.css";

type AppointmentListProps = {
  appointmentList: AppointmentType[];
};

const AppointmentList = ({ appointmentList }: AppointmentListProps) => {
  return (
    <>
      <ul>
        {appointmentList.map((appointment) => (
          <li>{appointment.id}</li>
        ))}
      </ul>
    </>
  )
};

export default AppointmentList;
