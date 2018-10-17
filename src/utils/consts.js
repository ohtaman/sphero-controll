export const UUID_SPHERO_SERVICE = '00010001-574f-4f20-5370-6865726f2121'
export const UUID_SPHERO_SERVICE_COMMAND = '00010001-574f-4f20-5370-6865726f2121'
export const UUID_SPHERO_SERVICE_INITIALIZE = '00020001-574f-4f20-5370-6865726f2121'

export const UUID_SPHERO_CHARACTERISTIC_HANDLE_1C = '00010002-574f-4f20-5370-6865726f2121'
export const UUID_SPHERO_CHARACTERISTIC_USETHEFORCE = '00020005-574f-4f20-5370-6865726f2121'
export const UUID_SPHERO_CHARACTERISTIC_SUBSCRIBE = '00020002-574f-4f20-5370-6865726f2121'
export const UUID_SPHERO_CHARACTERISTIC_READ = '00020004-574f-4f20-5370-6865726f2121'

export const UseTheForce = [0x75, 0x73, 0x65, 0x74, 0x68, 0x65, 0x66, 0x6f, 0x72, 0x63, 0x65, 0x2e, 0x2e, 0x2e, 0x62, 0x61, 0x6e, 0x64]

export const DeviceId = {
  apiProcessor: 0x10,
  systemInfo: 0x11,
  powerInfo: 0x13,
  driving: 0x16,
  animatronics: 0x17,
  sensor: 0x18,
  userIO: 0x1A,
  somethingAPI: 0x1F
}

export const SomethingApi = {
  something5: 0x27
}

export const APIProcessCommandIds = {
  echo: 0x00
}

export const SystemInfoCommandIds = {
  mainApplicationVersion: 0x00,
  bootloaderVersion: 0x01,
  something: 0x06,
  something6: 0x12,
  something7: 0x28
}

export const PowerCommandIds = {
  deepSleep: 0x00,
  sleep: 0x01,
  batteryVoltage: 0x03,
  wake: 0x0D,
  something2: 0x10, // every x time
  something3: 0x04, // every x time
  something4: 0x1e
}

export const DrivingCommandIds = {
  rawMotor: 0x01,
  resetYaw: 0x06,
  driveAsSphero: 0x04,
  driveAsRc: 0x02,
  driveWithHeading: 0x07,
  stabilization: 0x0C
}

export const AnimatronicsCommandIds = {
  animationBundle: 0x05,
  shoulderAction: 0x0D,
  domePosition: 0x0F,
  shoulderActionComplete: 0x26,
  enableShoulderActionCompleteAsync: 0x2A
}

export const SensorCommandIds = {
  sensorMask: 0x00,
  sensorResponse: 0x02,
  configureCollision: 0x11,
  collisionDetectedAsync: 0x12,
  resetLocator: 0x13,
  enableCollisionAsync: 0x14,
  sensor1: 0x0f,
  sensor2: 0x17,
  configureSensorStream: 0x0c
}

export const UserIOCommandIds = {
  allLEDs: 0x0E,
  playAudioFile: 0x07,
  audioVolume: 0x08,
  stopAudio: 0xA,
  testSound: 0x18
}

export const Flags = {
  isResponse: 1,
  requestsResponse: 2,
  requestsOnlyErrorResponse: 4,
  resetsInactivityTimeout: 8
}

export const APIconsants = {
  escape: 0xAB,
  startOfPacket: 0x8D,
  endOfPacket: 0xD8,
  escapeMask: 0x88
}
