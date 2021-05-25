---
title: 'Goober - мессенджер для Ubuntu'
date: '2011-07-06T20:16:51+04:00'
uri: 'apps/goober-instant-messenger-ubuntu'
alias: 
  - 'apps/goober-instant-messenger-ubuntu.html'
tags: 'Goober,Мессенджер'
source: 'http://www.omgubuntu.co.uk/2011/07/goober-instant-messenger/'
unixtime: 1309969011
visits: 7801
---
Goober представляет из себя клиент обмена мгновенными сообщениями и может использоваться как альтернатива таким зарекомендовавшим себя программам как Pidgin или Empathy.

[![Goober - мессенджер для Ubuntu](img/2011/07/06/20-00/goober-1-5908733829-o.jpg)](img/2011/07/06/20-00/goober-1-5908733829-o.jpg)

Goober мультипротокольный кроссплатформенный мессенджер работающий на таких платформах как Windows, Mac и Ubuntu / Linux. Среди поддерживаемых сервисов: MSN, Yahoo!, Gtalk, Jabber, ICQ, AIM, а также работа с VoIP и социальными сервисами Facebook и Twitter, доступных в отдельных вкладках.

[![Goober - мессенджер для Ubuntu](img/2011/07/06/20-00/goober-5908733375-o.jpg)](img/2011/07/06/20-00/goober-5908733375-o.jpg)

## Характеристики Goober

*   HD видео чат (на 6 участников, но в Linux пока не поддерживается)
*   VoIP сервис (требует покупки специального кредита)
*   200 МБ свободного места в виртуальной папке, для обмена файлами с контактами.
*   Инструмент создания скриншотов
*   Отправка SMS (за небольшую плату)
*   Гибкая настройка интерфейса

## Установка Goober в Ubuntu 10.10 / 11.04 / 11.10

Goober это QT4 приложение, поэтому придется доустановить следующие пакеты:

```
sudo apt-get install libqt4-core libqtgui4 libqt4-network libqt4-sql libqt4-webkit libqca2 libqca2-plugin-ossl libportaudio2 libspeex1 libglew1.5 
```

Установка для 32 битных систем:

```
wget http://www.goober.com/downloads/startDownload/software/debian32 -P /tmp
sudo dpkg -i /tmp/debian32
```

для 64-х битных:

```
wget http://www.goober.com/downloads/startDownload/software/debian64 -P /tmp
sudo dpkg -i /tmp/debian64
```

или скачать .deb пакет отсюда.
