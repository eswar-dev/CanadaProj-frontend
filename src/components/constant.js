export const servicedata = [
  'Services',
  'Application Management Services',
  'Data Governance Framework',
  'Data Quality',
  '    Embedded System Development',
  'IOT',
  '   Machine learning',
];

const convertToPath = (serviceName) => {
  // Replace spaces with hyphens and convert to lowercase
  return serviceName.trim().toLowerCase().replace(/\s+/g, '-');
};

// Map the servicedata array to create an array of objects with label and path
export const serviceObjects = servicedata.map((serviceName) => ({
  label: serviceName.trim(), // Remove leading/trailing spaces
  path: `/${convertToPath(serviceName)}`, // Append '/services/' to the path
}));
