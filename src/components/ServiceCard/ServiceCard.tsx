import { useState, lazy, Suspense } from "react";
import { getAppointmentsByServiceId } from "../../utils/services";
import type { AppointmentType } from "../../types";

const AppointmentList = lazy(() => import("../AppointmentList"));
import CaretButton from "../library/CaretButton";

import "./ServiceCard.css";

import CaretIcon from "../../assets/caret-icon.svg";
import DetailIcon from "../../assets/detail-icon.svg";
import OilChangeIcon from "../../assets/oil-change-icon.svg";
import TiresIcon from "../../assets/tires-icon.svg";
import BrakeInspectionIcon from "../../assets/brake-inspection-icon.svg";

const serviceIcons: Record<number, string> = {
  1: OilChangeIcon,
  2: BrakeInspectionIcon,
  3: TiresIcon,
  4: DetailIcon,
} as const;

type ServiceCardProps = {
  id: number;
  name: string;
};

const ServiceCard = ({ id, name }: ServiceCardProps) => {
  const [caretIsReversed, setIsReversed] = useState<boolean>(false);
  const [appointmentList, setAppointmentList] = useState<AppointmentType[]>([]);

  const handleGrabAppointmentsById = async () => {
    const appointments = await getAppointmentsByServiceId(id);
    return appointments;
  };

  const toggleCaretClick = async () => {
    setIsReversed((prevState) => !prevState);
    if (!caretIsReversed) {
      const appointments = await handleGrabAppointmentsById();
      if (appointments) {
        setAppointmentList(appointments);
      }
    }
  };

  const iconSrc = serviceIcons[id];

  return (
    <>
      <div
        className={`service-card ${caretIsReversed ? "service-card-closed" : "service-card-opened"}`}
      >
        <img src={iconSrc} className="service-icon" alt={`${name} Icon`} />
        <h1>{name}</h1>
        <CaretButton onClick={toggleCaretClick}>
          <img
            className={`caret-icon ${caretIsReversed ? "caret-icon-reversed" : ""}`}
            src={CaretIcon}
            alt="A Standard Caret Icon"
          />
        </CaretButton>
      </div>
      <div>
        {caretIsReversed && (
          <Suspense fallback={<p>Loading...</p>}>
            {appointmentList.length > 0 ? (
              <AppointmentList appointmentList={appointmentList} />
            ) : (
              <p>No Appointments Available For This Service</p>
            )}
          </Suspense>
        )}
      </div>
    </>
  );
};

export default ServiceCard;
