import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type Service = {
  name: string;
  id: number;
};

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/services");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h1>Services</h1>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            {service.name}
            <Link to={`/services/${service.id}`} state={{ service }}>
              View available appointments
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
