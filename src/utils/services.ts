import type { ServiceType } from "../types";

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

export { getServices };
