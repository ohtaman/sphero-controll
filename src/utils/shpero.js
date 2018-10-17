import * as consts from './consts.js'


class Sphero {
  constructor () {
    this.charactaristics = {}
  }
  
  connect () {
    this.server = navigator.bluetooth.requestDevice({
      filters: [{
        services: [consts.UUID_SPHERO_SERVICE]
      }],
      optionalServices: [consts.UUID_SPHERO_SERVICE_INITIALIZE]
    }).then((device) => {
      return device.gatt.connect()
    }).then((server) => {
      console.log(`Successfuly connected: ${server.device.name}`)
      return server
    })
    
    this.server.getPrimaryService(
      consts.UUID_SPHERO_SERVICE_INITIALIZE
    ).then((service) => {
      [
        consts.UUID_SPHERO_CHARACTERISTIC_USETHEFORCE,
        consts.UUID_SPHERO_CHARACTERISTIC_SUBSCRIBE,
        consts.UUID_SPHERO_CHARACTERISTIC_READ
      ].forEach((uuid) => {
        service.getCharacteristic(uuid).then((characteristic) => {
          this.characteristics[uuid] = characteristic
        })
      })
    })
  }
  
  disconnect () {
    
  }
}


export default {
  connect: () => {
    return navigator.bluetooth.requestDevice({
      filters: [{
        services: [consts.UUID_SPHERO_SERVICE]
      }],
      optionalServices: [consts.UUID_SPHERO_SERVICE_INITIALIZE]
    }).then((device) => {
      return device.gatt.connect()
    }).then((server) => {
      console.log(`Successfuly connected: ${server.device.name}`)
      return server
    })
  },
  disconnect: (device) => {
    return device.gatt.disconnect()
  },
  initialize: (server) => {
    return server.getPrimaryService(
      consts.UUID_SPHERO_SERVICE_INITIALIZE
    ).then((service) => {
      [
        consts.UUID_SPHERO_CHARACTERISTIC_USETHEFORCE,
        consts.UUID_SPHERO_CHARACTERISTIC_SUBSCRIBE,
        consts.UUID_SPHERO_CHARACTERISTIC_READ
      ].forEach((uuid) => {
        service.getCharacteristic(uuid).then((characteristic) => {
          console.log(characteristic)
          characteristic.addEventListener(
            'characteristicvaluechanged',
            (event) => {
              console.log(event.target)
            }
          )
        })
      })
    })
  }
}
