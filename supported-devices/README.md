---
headerDepth: 1
---

# Supported Devices

Rfxcom2mqtt supports a wide range of devices that are compatible with the RFXCOM transceiver. The RFXCOM transceiver supports multiple protocols, each with its own set of compatible devices.

## Supported Protocols

The RFXCOM transceiver supports the following protocols:

- **AC** - LightwaveRF, Siemens, NEXA, CHACON, and more
- **ARC** - ARC, ELRO, IMPULS, and more
- **ATI** - ATI Remote Wonder
- **BLINDS1** - BlindsT0/T1/T2/T3/T4/T5/T6/T7/T8/T9/T10/T11/T12
- **BLYSS** - Blyss lighting
- **BYRON_SX** - Byron SX doorbell
- **CASAFAN** - Casafan ceiling fan
- **CURTAIN1** - Harrison curtain
- **EDISIO** - Edisio devices
- **ELEC1** - Electricity meters
- **ELEC2** - Electricity meters
- **ELEC3** - Electricity meters
- **ELEC4** - Electricity meters
- **ELEC5** - Electricity meters
- **FAN** - Fan devices (LUCCI, WESTINGHOUSE, etc.)
- **FS20** - FS20 devices
- **FINEOFFSET** - Fine Offset weather stations
- **FUNKBUS** - Funkbus devices
- **HUNTER** - Hunter ceiling fan
- **HOMECONFORT** - Home Confort devices
- **HOMEEASY** - HomeEasy devices
- **IMAGINTRONIX** - Imagintronix sensors
- **KEELOQ** - Keeloq security devices
- **LACROSSE** - LaCrosse weather stations
- **LIGHTING1** - X10, ARC, ELRO, Waveman, EMW200, IMPULS, etc.
- **LIGHTING2** - AC, HomeEasy EU, ANSLUT, etc.
- **LIGHTING3** - Ikea Koppla
- **LIGHTING4** - PT2262 devices, Silvercrest, etc.
- **LIGHTING5** - LightwaveRF, Siemens, EMW100, BBSB, etc.
- **LIGHTING6** - Blyss, Cuveo
- **MCVS** - MCZ Pellet stoves
- **MDI** - MDI devices
- **OREGON** - Oregon Scientific weather stations
- **PROGUARD** - ProGuard alarms
- **RAW** - Raw data
- **REMOTE** - ATI, MEDION, PC Remote, etc.
- **RFXSENSOR** - RFXSensor temperature and A/D
- **RFXMETER** - RFXMeter
- **RTSDEVICE** - RTS devices
- **SECURITY1** - X10 security devices, KD101, PowerCode, etc.
- **SECURITY2** - Security devices
- **THERMOSTAT1** - Digimax, TLX7506
- **THERMOSTAT2** - HE105, RTS10, TLX7506
- **THERMOSTAT3** - G6R-H4S, Mertik
- **THERMOSTAT4** - MCZ pellet stoves
- **WEIGHT** - Weight scales
- **WEATHER** - Weather stations

## Device Compatibility

The compatibility of a device with Rfxcom2mqtt depends on whether the device uses one of the protocols supported by the RFXCOM transceiver. Here are some examples of compatible device types:

### Remote Controls
- X10 remotes
- LightwaveRF remotes
- NEXA remotes
- HomeEasy remotes
- Many other 433.92MHz remote controls

### Sensors
- Temperature sensors
- Humidity sensors
- Rain sensors
- Wind sensors
- Door/window sensors
- Motion sensors
- Various weather stations (Oregon Scientific, Fine Offset, etc.)

### Actuators
- Light switches
- Dimmers
- Blinds/curtain controllers
- Power switches
- Thermostats

## Adding New Devices

To add a new device to Rfxcom2mqtt:

1. Make sure your RFXCOM transceiver is properly connected and Rfxcom2mqtt is running
2. Put your device in pairing mode (refer to the device's manual)
3. Trigger the device (press a button, activate a sensor, etc.)
4. Rfxcom2mqtt should detect the device and add it to the list of devices
5. You can then configure the device through the Rfxcom2mqtt frontend or MQTT

## Troubleshooting Device Issues

If you're having trouble with a specific device:

1. Make sure the device is within range of the RFXCOM transceiver
2. Check if the protocol used by the device is enabled in your Rfxcom2mqtt configuration
3. Try resetting the device and pairing it again
4. Enable debug logging to see more detailed information about the device communication

## Reporting Compatibility

If you have successfully used a device with Rfxcom2mqtt that is not listed here, please consider contributing to the documentation by reporting your success on the GitHub repository.
