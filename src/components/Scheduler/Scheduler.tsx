import { useState, useEffect } from "react";
import { getServices } from "../../utils/services";

import type { ServiceType } from "../../types";
import ServiceCard from "../ServiceCard";

import "./Scheduler.css";

const Scheduler = () => {
  const [serviceList, setServiceList] = useState<ServiceType[]>([]);

  useEffect(() => {
    const grabServiceList = async () => {
      const services = await getServices();
      if (services) {
        setServiceList(services);
      }
    };
    grabServiceList();
  }, [setServiceList]);

  return (
    <div className="scheduler">
      <h1>Select a Service</h1>
      {serviceList.length > 0 ? (
        <ul className="services-list">
          {serviceList.map((service) => (
            <li key={service.id}>
              <ServiceCard id={service.id} name={service.name} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="404-message">
          <h2>Uh Oh! Something Went Wrong! :(</h2>
          <h3>Please Contact Our Support Team:</h3>
          <p>Email:</p>
          <a
            aria-label="email"
            role="navigation"
            href="mailto: supportbutton@driveway.com"
          >
            supportbutton@driveway.com
          </a>
          <p>Phone:</p>
          <a aria-label="5 5 5.  8 7 2. 3 2 8 9." href="tel:5558723289">
            555-872-3289
          </a>
        </div>
      )}
    </div>
  );
};

export default Scheduler;
