const getServices = async () => {
  // TODO: Return list of services from "/services" endpoint
  try {
    const response = await fetch("http://localhost:2000/services");
    const services = await response.json();
    return services;
  } catch (err) {
    console.error('ERROR :=>', err);
    return null;
  }
};

export { getServices };
