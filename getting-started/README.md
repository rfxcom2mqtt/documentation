---
headerDepth: 1
next: ../installations/
---

# Getting started

Rfxcom2mqtt is a bridge application written in Node.js that connects your RFXCOM transceiver to your MQTT broker. This allows you to integrate various RF devices into your smart home system and control them through MQTT.

## What is RFXCOM?

[RFXCOM](http://www.rfxcom.com) is a hardware device that can receive and transmit RF signals from various devices operating on 433.92MHz frequency. These include:

- Remote controls
- Motion sensors
- Door/window sensors
- Temperature and humidity sensors
- Power switches
- And many more

## How Rfxcom2mqtt works

Rfxcom2mqtt acts as a bridge between your RFXCOM transceiver and your MQTT broker:

1. It connects to your RFXCOM transceiver via USB
2. It listens for RF signals received by the RFXCOM device
3. When a signal is received, it converts it to an MQTT message and publishes it to your MQTT broker
4. It also subscribes to MQTT topics to receive commands and sends them to the RFXCOM transceiver for transmission

## Prerequisites

Before you begin, you'll need:

- An RFXCOM transceiver (like RFXtrx433 or RFXtrx433E)
- A computer or server to run Rfxcom2mqtt (or a Home Assistant instance)
- An MQTT broker (like Mosquitto)
- RF devices compatible with RFXCOM

## Next steps

Follow these guides to get Rfxcom2mqtt up and running:

* [Installation](../installations/README.md) - Install Rfxcom2mqtt using Docker or as a Home Assistant addon
* [Configuration](../configuration/README.md) - Configure your MQTT connection and RFXCOM settings
* [Usage](../usage/README.md) - Learn how to use Rfxcom2mqtt and integrate it with other systems
