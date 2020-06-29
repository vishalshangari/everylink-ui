interface Device {
  name: string;
  width: number;
  height: number;
}

const devices: Device[] = [
  { name: "iPhone 5", width: 320, height: 568 },
  { name: "iPhone 6", width: 376, height: 667 },
  { name: "iPhone 6 Plus", width: 414, height: 736 },
  { name: "Galaxy S5", width: 360, height: 640 },
  { name: "Nexus 5X", width: 412, height: 732 },
];

export default devices;
