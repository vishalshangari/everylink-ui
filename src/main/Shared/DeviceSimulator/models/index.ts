export interface Device {
  name: string;
  width: number;
  height: number;
}

export interface DeviceSimulatorProps {
  onDeviceChange: (device: Device) => void;
}
