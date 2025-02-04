import { useState } from "react";

import "./ServiceCard.css";

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
  const iconSrc = serviceIcons[id];

  return (
    <>
      <img src={iconSrc} className="service-icon" alt={`${name} Icon`} />
      <h1>{name}</h1>
    </>
  )
};

export default ServiceCard;
