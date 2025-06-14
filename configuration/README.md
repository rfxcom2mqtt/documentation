---
headerDepth: 1
next: ../usage/
---

# Configuration

Rfxcom2MQTT is configured using a [YAML](https://en.wikipedia.org/wiki/YAML) based `config.yaml` file.
This file must be located in the `data` directory within your installation. Both the `data` directory and the `config.yaml` file must be writeable.

## Basic Configuration

Here's a minimal configuration example to get started:

```yaml
mqtt:
  server: mqtt://localhost:1883
  # Optional: MQTT authentication
  # username: your_username
  # password: your_password
rfxcom:
  # USB port where your RFXCOM device is connected
  usbport: /dev/ttyUSB0
```

::: tip CONVENTION
The _dot-notation_ of a config-key like `mqtt.server` means the `server` property within the `mqtt`
section. All _dot-notation_ references are absolute.
:::

## Complete Configuration Options

Below is a comprehensive list of all available configuration options:

```yaml
# MQTT connection settings
mqtt:
  # MQTT broker URL (required)
  server: mqtt://localhost:1883
  # Optional: MQTT authentication
  username: your_username
  password: your_password
  # Optional: MQTT client ID (default: rfxcom2mqtt)
  client_id: rfxcom2mqtt
  # Optional: MQTT base topic (default: rfxcom2mqtt)
  base_topic: rfxcom2mqtt
  # Optional: MQTT keepalive in seconds (default: 60)
  keepalive: 60
  # Optional: MQTT version (default: 4)
  version: 4
  # Optional: MQTT QoS (default: 0)
  qos: 0
  # Optional: MQTT retain (default: false)
  retain: false

# RFXCOM device settings
rfxcom:
  # USB port where your RFXCOM device is connected (required)
  usbport: /dev/ttyUSB0
  # Optional: Enable debug mode (default: false)
  debug: false
  # Optional: List of protocols to enable (default: all)
  # If not specified, all protocols will be enabled
  enabledProtocols:
    - LIGHTING1
    - LIGHTING2
    - LIGHTING4
    - OREGON
    - HOMECONFORT
  # Optional: Transmitter power level (default: 10)
  # Range: 0-10, where 10 is maximum power
  transmitterPower: 10

# Home Assistant integration
homeassistant:
  # Optional: Enable Home Assistant MQTT discovery (default: false)
  discovery: true
  # Optional: Home Assistant discovery topic (default: homeassistant)
  discovery_topic: homeassistant
  # Optional: Home Assistant device prefix (default: rfxcom2mqtt)
  discovery_device: rfxcom2mqtt

# Frontend settings
frontend:
  # Optional: Enable web frontend (default: false)
  enabled: true
  # Optional: Host to bind the web server to (default: 0.0.0.0)
  host: 0.0.0.0
  # Optional: Port for the web server (default: 8890)
  port: 8890

# Advanced settings
# Optional: Log level (default: info)
# Options: debug, info, warn, error
logLevel: info

# Optional: Permit join (default: false)
# When true, new devices can be added to the network
permit_join: true
```

## Environment Variables

It is possible to override the values in `config.yaml` via environment variables. This is particularly useful when running Rfxcom2MQTT in a Docker container.

To override a configuration value, use the following naming convention:
1. Convert the configuration key to uppercase
2. Replace dots (.) with underscores (_)
3. Prefix with the section name in uppercase

For example, to override:

```yaml
rfxcom:
  usbport: /dev/ttyUSB0
```

Set the environment variable `RFXCOM_USB_DEVICE` to the desired value.

### Available Environment Variables

| Environment Variable | Configuration Property |
|---------------------|------------------------|
| MQTT_PASSWORD | mqtt.password |
| MQTT_USERNAME | mqtt.username |
| MQTT_SERVER | mqtt.server |
| RFXCOM_USB_DEVICE | rfxcom.usbport |
| LOG_LEVEL | logLevel |
| FRONTEND_ENABLED | frontend.enabled |
| FRONTEND_PORT | frontend.port |
| FRONTEND_HOST | frontend.host |
| HOMEASSISTANT_DISCOVERY | homeassistant.discovery |

## Configuration File Location

The location of the configuration file depends on how you installed Rfxcom2MQTT:

- **Docker**: The configuration file should be placed in the mounted data directory, e.g., `./data/config.yaml`
- **Home Assistant Addon**: The configuration is managed through the addon configuration page
- **Manual Installation**: The configuration file should be placed in the `data` directory within your installation directory

## Reloading Configuration

After making changes to the configuration file, you need to restart Rfxcom2MQTT for the changes to take effect.

## Next Steps

After configuring Rfxcom2MQTT, you can proceed to the [Usage](../usage/README.md) section to learn how to use Rfxcom2MQTT and integrate it with other systems.
