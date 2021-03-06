---
title: 'Установка драйвера Nvidia 270.41.19 в Ubuntu 11.04 из PPA'
date: '2011-05-27T13:58:53+04:00'
uri: 'apps/install-nvidia-driver-in-ubuntu-11-04-from-ppa'
alias: 
  - 'apps/install-nvidia-driver-in-ubuntu-11.04-from-ppa.html'
tags: 'Nvidia,Драйвер'
source: ''
unixtime: 1306490333
visits: 22326
---
Новые стабильные версии официального драйвера Nvidia Linux 270.41.19 и бета 275.09 стали доступны для загрузки на прошлой недели.

![Установка драйвера Nvidia 270.41.19 в Ubuntu 11.04 из PPA](img/2011/05/27/13-00/nvidia2704119-5764663636-o.jpg)

### Улучшения в 270.41.19:

*   Исправлена ошибка при обработки очередей в VDPAU, вызывающие односекундую задержку, обычно происходившей при выключенном композитном менеджере.
*   Устранена ошибка вызывающая падения при захвате видео через SDI
*   Устранен баг приводившей к утечке ресурсов в OpenGL драйвере при использование вызова fork() .
*   Профикшен баг с SLI инициализаций на некоторых Intel платформах.
*   Профикшен баг с SLI инициализаций для некоторых Linux ядер, к примеру в 2.6.38..
*   Улучшена совместимость с интерфейсом ядра.

### Скачать драйвер Nvidia для Ubuntu:

Для установки Ubuntu 11.04 Natty и Ubuntu 11.10 Oneiric можно воспользоваться PPA, выполнив в терминале следующие команды:

```
sudo apt-add-repository ppa:ubuntu-x-swat/x-updates
sudo apt-get update
sudo apt-get install nvidia-current
```

Для установки в более старые версии дистрибутива или для установки тестовой версии, можно воспользоваться ссылками с официального сайта.
