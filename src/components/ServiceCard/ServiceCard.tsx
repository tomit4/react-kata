import { useState } from "react";

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

  const toggleCaretClick = async () => {
    setIsReversed((prevState) => !prevState);
  }

  const iconSrc = serviceIcons[id];

  return (
    <>
      <div className="service-card">
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
    </>
  )
};

export default ServiceCard;
