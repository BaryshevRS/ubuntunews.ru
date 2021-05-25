---
title: 'Air Video: потоковое видео для iPhone / iPad в Ubuntu'
date: '2011-06-23T22:02:44+04:00'
uri: 'apps/stream-videos-to-iphone-with-airvideo-in-ubuntu'
alias: 
  - 'apps/stream-videos-to-iphone-with-airvideo-in-ubuntu.html'
tags: 'iPhone,iPad'
source: ''
unixtime: 1308852164
visits: 6367
---
Air Video программа предоставляющая возможность потокового видео вещания в любых форматах совместимых с iPhone, iPad или iPod. Что позволяет смотреть видео без необходимости загрузки его на само устройство.

![Air Video: потоковое видео для iPhone / iPad в Ubuntu](img/2011/06/23/22-00/air-video-5863592761-o.jpg)

### Установка Air Video в Ubuntu

Для установки потребуется добавить PPA, доступный для Ubunu 10.04, 10.10 и 11.04:

```
sudo apt-add-repository ppa:rubiojr/airvideo
sudo apt-get update
sudo apt-get install airvideo-server
```

Для изменения настроек, необходимо отредактировать файл «/opt/airvideo-server/AirVideoServerLinux.propertie»

```
sudo gedit /opt/airvideo-server/AirVideoServerLinux.properties
```

Поддержка Unity не реализована, поэтому иконка с приложением для управления запуском / остановкой не появится в системном трее. Для включения поддержки нужно будет выполнить в терминале следующую команду:

```
gsettings set com.canonical.Unity.Panel systray-whitelist "['all']"
```

и перезайти в сессию, для сохранения изменений.

Для работы с сервером для iPad / iPhone нужно будет установить приложение Air Video.
