---
headerDepth: 2
---

# Integrations

Rfxcom2MQTT can be integrated with various home automation platforms and tools through MQTT. This section provides guides for integrating Rfxcom2MQTT with different systems.

## Available Integrations

* [Home Assistant](./home_assistant.md) - Integrate Rfxcom2MQTT with Home Assistant using MQTT discovery

## General Integration Principles

Regardless of the specific platform you're using, there are some general principles for integrating Rfxcom2MQTT with any system that supports MQTT:

### 1. MQTT Connection

First, ensure your system can connect to the same MQTT broker that Rfxcom2MQTT is using. This is typically configured in your system's MQTT integration or plugin.

### 2. Subscribe to Device Topics

To receive updates from your RF devices, subscribe to the appropriate MQTT topics. The base topic is `rfxcom2mqtt` by default (configurable in your `config.yaml`).

For example, to receive all device updates:
```
rfxcom2mqtt/devices/#
```

### 3. Send Commands to Devices

To control your RF devices, publish messages to the appropriate command topics. The general format is:

```
rfxcom2mqtt/cmd/[type]/[subtype]/[id]/[unitCode]/set
```

With the payload being the command you want to send (e.g., `on`, `off`, `level 15`).

For detailed information about MQTT topics and messages, see the [MQTT Topics and Messages](../mqtt_topics_and_messages.md) page.

## Integration Tools

### MQTT Explorer

A low-level MQTT client like [MQTT-Explorer](http://mqtt-explorer.com/) can help to understand the topic structure and publish values to test the behavior. This is particularly useful when setting up a new integration or troubleshooting issues.

### Node-RED

[Node-RED](https://nodered.org/) is a powerful flow-based programming tool that can be used to create automation flows with Rfxcom2MQTT. To integrate with Node-RED:

1. Install the MQTT nodes in Node-RED if they're not already installed
2. Add an MQTT input node and configure it to connect to your MQTT broker
3. Set the topic to subscribe to Rfxcom2MQTT topics (e.g., `rfxcom2mqtt/devices/#`)
4. Process the messages in your flow as needed
5. Use MQTT output nodes to send commands to your devices

### OpenHAB

[OpenHAB](https://www.openhab.org/) can be integrated with Rfxcom2MQTT through its MQTT binding:

1. Install the MQTT binding in OpenHAB
2. Configure the MQTT broker connection
3. Create MQTT things for your devices
4. Define channels that subscribe to the appropriate topics
5. Link these channels to items in your OpenHAB setup

### Custom Applications

You can also integrate Rfxcom2MQTT with custom applications using any MQTT client library available for your programming language of choice. Most programming languages have MQTT client libraries available, such as:

- JavaScript: [MQTT.js](https://github.com/mqttjs/MQTT.js)
- Python: [Paho MQTT](https://pypi.org/project/paho-mqtt/)
- Java: [Eclipse Paho](https://www.eclipse.org/paho/)
- C#: [MQTTnet](https://github.com/chkr1011/MQTTnet)

## Contributing Integration Guides

If you've successfully integrated Rfxcom2MQTT with a system not listed here, consider contributing a guide to help others. You can submit a pull request to the [Rfxcom2MQTT documentation repository](https://github.com/rfxcom2mqtt/documentation).
