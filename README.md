# esp-idf-web-rc-switch
315/433MHz RF ON/OFF Switch using esp32.   
You can turn ON/OFF Wireless Smart Outlet using a browser.   

![web-rc-switch](https://user-images.githubusercontent.com/6020549/140236843-fffad16b-087e-4785-8f26-f8f8bf7c8f12.JPG)

![rc_switch](https://user-images.githubusercontent.com/6020549/172749601-bc45feec-fd0d-484b-a489-9f15698289b7.JPG)


I used [this](https://github.com/Molorius/esp32-websocket) component.   
This component can communicate directly with the browser.   
There is an example of using the component [here](https://github.com/Molorius/ESP32-Examples).
It's a great job.   


# Hardware requirements
- 315MHz/433MHz ASK Wireless transmitter like this.   
H34A-3125/H34A-433   
SYN115   
STX882   

I used this:
![H3V4F-2](https://user-images.githubusercontent.com/6020549/125154180-c36bdc00-e193-11eb-9e89-5934c2db7fae.JPG)
![H3V4F-3](https://user-images.githubusercontent.com/6020549/125154246-0ded5880-e194-11eb-974b-03232166ab12.JPG)


- Outlet that can be turned ON/OFF by RF.   

![SmartOutlet](https://user-images.githubusercontent.com/6020549/172750850-bdc786a4-680f-4bd0-a75b-832a333970b4.jpg)
![SmartSwitch](https://user-images.githubusercontent.com/6020549/172750746-a4de0c1d-cf3c-4429-821f-b4cb60a63bee.jpg)

# Installation
```
git clone https://github.com/nopnop2002/esp-idf-web-rc-switch
cd esp-idf-web-rc-switch
git clone https://github.com/Molorius/esp32-websocket components/websocket
idf.py set-target {esp32/esp32s2/esp32s3/esp32c3}
idf.py menuconfig
idf.py flash
```


# Configuration
![config-main](https://user-images.githubusercontent.com/6020549/140235836-c6d87d67-77d2-4b4b-84e1-a01b9dc1a90e.jpg)
![config-app](https://user-images.githubusercontent.com/6020549/140235844-d6c62d54-dc12-4658-ac34-89074361a84d.jpg)

## WiFi Setting
![config-wifi-1](https://user-images.githubusercontent.com/6020549/140235869-423eb5db-5614-4d0a-9aa1-9f11cbc2ed39.jpg)

You can use Static IP.   
![config-wifi-2](https://user-images.githubusercontent.com/6020549/140235870-fa7c8c1c-901c-475a-844c-0828ee88cad8.jpg)

You can connect using mDNS name.   
![config-wifi-3](https://user-images.githubusercontent.com/6020549/140235866-2a3e692e-69b6-4767-b1c5-d16e59a74903.jpg)

## Radio Setting
![config-radio](https://user-images.githubusercontent.com/6020549/140235926-66f2f5d5-c3f9-460b-ad6b-c7cf9fd8b715.jpg)

## Outlet Setting

- With a 10 pole DIP switch.   
I used the photo [here](https://github.com/sui77/rc-switch/wiki/HowTo_OperateLowCostOutlets).   
![rc_switch_typeA](https://user-images.githubusercontent.com/6020549/140236080-2baa037b-e5db-49dc-8e8b-4d9bcba95491.png)
![config-outlet-1](https://user-images.githubusercontent.com/6020549/140235974-edb2354b-81af-4c63-a295-abea5ec4dd57.jpg)

- With two rotary (or sliding) switches with four setting possibilities each.   
I used the photo [here](https://github.com/sui77/rc-switch/wiki/HowTo_OperateLowCostOutlets).   
![rc_switch_typeB](https://user-images.githubusercontent.com/6020549/140236100-f40c300e-b632-460d-8e31-0d74db8d7b64.png)   
![config-outlet-2](https://user-images.githubusercontent.com/6020549/140235976-d145fd2d-79b3-406c-90fd-7b39677193f1.jpg)

- Generic.   
Directly specify the ON and OFF codes.   
![config-outlet-3](https://user-images.githubusercontent.com/6020549/140235972-0de0384e-aabc-463e-8223-6314d2283031.jpg)

# Wirering

|RF Module||ESP32|
|:-:|:-:|:-:|
|DATA|--|GPIO4|
|GND|--|GND|
|VCC|--|3.3V|

You can change data pin to any pin using menuconfig.   
__However, changing to some pins does not work properly.__


# WEB Page
The WEB page is stored in the html folder.   
You can change it as you like.   


# Task Structure Diagram
![Task_structure_diagram](https://user-images.githubusercontent.com/6020549/140486779-67b4fab3-224b-49b8-b670-0da60552dca7.JPG)


# Reference

https://github.com/nopnop2002/esp-idf-rc-switch
