---
headerDepth: 2
---

# Home Assistant addon

If you are running Home Assistant OS or a Supervised Home Assistant instance, the easiest way to install Rfxcom2MQTT is via the Home Assistant addon.

## Installation

1. Navigate to your Home Assistant instance
2. Go to **Settings** → **Add-ons** → **Add-on Store**
3. Click on the three dots in the upper right corner and select **Repositories**
4. Add the following repository URL: `https://github.com/rfxcom2mqtt/hassio-addons`
5. Click **Add**
6. Close the repositories dialog
7. The Rfxcom2MQTT addon should now appear in the add-on store
8. Click on the Rfxcom2MQTT addon and then click **Install**

## Configuration

After installation, you need to configure the addon before starting it:

1. Go to the **Configuration** tab of the addon
2. Configure the following settings:

```yaml
mqtt:
  server: mqtt://core-mosquitto:1883
  user: homeassistant  # If you've set a username in your Mosquitto addon
  password: your_password  # If you've set a password in your Mosquitto addon
rfxcom:
  usbport: /dev/ttyACM0  # This may vary depending on your system
```

3. If you're using the Mosquitto broker addon in Home Assistant, the default MQTT server address is `mqtt://core-mosquitto:1883`
4. Save the configuration

## USB Device Access

To ensure the addon can access your RFXCOM device:

1. Go to the **Device** tab of the addon
2. Enable the toggle for your RFXCOM device (it should be listed if properly connected)
3. If your device is not listed, you may need to check your USB connection or try a different USB port

## Starting the Addon

1. Go back to the **Info** tab of the addon
2. Click **Start**
3. Check the logs to make sure everything is working correctly

## Accessing the Web Interface

Once the addon is running:

1. Click on **Open Web UI** from the addon page
2. This will open the Rfxcom2MQTT web interface where you can manage your devices

## Integration with Home Assistant

To enable automatic discovery of your RFXCOM devices in Home Assistant:

1. Make sure your configuration includes:

```yaml
homeassistant:
  discovery: true
```

2. Devices should automatically appear in Home Assistant after they are detected by Rfxcom2MQTT

## Updating the Addon

When updates are available:

1. Go to the **Add-on Store** in Home Assistant
2. Look for the update badge on the Rfxcom2MQTT addon
3. Click on the addon and then click **Update**

For more detailed information, visit the [official addon repository](https://github.com/rfxcom2mqtt/hassio-addons#installation).
