---
sidebarDepth: 0
---

# Rfxcom2MQTT fails to start

Most of the time this is caused by Rfxcom2MQTT not being able to communicate with your RFXCOM adapter.

[[toc]]

## Check if the adapter is connected

First, make sure your RFXCOM adapter is properly connected to your computer or server. You can check this by running:

```bash
ls -l /dev/serial/by-id/
```

You should see something like:

```
total 0
lrwxrwxrwx 1 root root 13 Jan 1 12:00 usb-RFXCOM_RFXtrx433_A1XR56A5-if00-port0 -> ../../ttyACM0
```

If you don't see your RFXCOM device listed, try:
- Unplugging and reconnecting the device
- Trying a different USB port
- Checking if the device is recognized by your operating system

## Check permissions

Make sure the user running Rfxcom2MQTT has permission to access the serial port. If you're using Docker, make sure the device is properly mapped to the container.

For Linux users, you may need to add your user to the `dialout` group:

```bash
sudo usermod -a -G dialout $USER
```

After running this command, you'll need to log out and log back in for the changes to take effect.

## Check configuration

Make sure your `config.yaml` file has the correct USB port specified:

```yaml
rfxcom:
  usbport: /dev/ttyACM0  # Change this to match your device path
```

You can also try using the full path from `/dev/serial/by-id/`:

```yaml
rfxcom:
  usbport: /dev/serial/by-id/usb-RFXCOM_RFXtrx433_A1XR56A5-if00-port0
```

## Enable debug logging

To get more information about what's happening, enable debug logging in your `config.yaml`:

```yaml
logLevel: 'debug'
rfxcom:
  debug: true
```

Then check the logs for any error messages.

## Common issues

### Error: Cannot open /dev/ttyACM0

This error means that Rfxcom2MQTT cannot access the serial port. Check the permissions as described above.

### Error: Port is already in use

Another application might be using the serial port. Make sure no other instance of Rfxcom2MQTT or any other application is using the RFXCOM adapter.

### Docker-specific issues

If you're using Docker, make sure:

1. The device is properly mapped in your Docker run command or docker-compose file:
   ```
   --device=/dev/serial/by-id/usb-RFXCOM_RFXtrx433_A1XR56A5-if00-port0:/dev/ttyACM0
   ```

2. The container has the necessary permissions to access the device.

3. If using Docker Compose with rootless mode, make sure you've added:
   ```yaml
   group_add:
     - dialout
   user: 1000:1000
   ```

## Still having issues?

If you're still having trouble, try the following:

1. Check if your RFXCOM adapter is working properly by testing it with the official RFXCOM software on Windows.

2. Make sure your adapter's firmware is up to date.

3. Try a different USB cable.

4. If all else fails, check the GitHub issues or create a new one with detailed information about your setup and the error messages you're seeing.
