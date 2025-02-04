import { useState } from "react";
import { getAppointmentsByServiceId } from "../../utils/services";
import type { AppointmentType } from "../../types"

import AppointmentList from "../AppointmentList";
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
};

type ServiceCardProps = {
  id: number;
  name: string;
}

const ServiceCard = ({ id, name }: ServiceCardProps) => {
  const [caretIsReversed, setIsReversed] = useState<Boolean>(false);
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
  }

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
        {caretIsReversed && appointmentList.length > 0 && (
          <AppointmentList appointmentList={appointmentList} />
        )}
        {caretIsReversed && appointmentList.length <= 0 && (
            <p>No Appointments Available For This Service</p>
        )}
      </div>
    </>
  )
};

export default ServiceCard;
