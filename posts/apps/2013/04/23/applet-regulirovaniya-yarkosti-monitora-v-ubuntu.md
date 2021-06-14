---
title: 'Апплет регулирования яркости монитора в Ubuntu'
date: '2013-04-23T20:43:43+04:00'
uri: 'apps/applet-regulirovaniya-yarkosti-monitora-v-ubuntu'
alias: 
  - 'apps/applet-regulirovaniya-yarkosti-monitora-v-ubuntu.html'
tags: 'indicator-applet'
source: ''
unixtime: 1366735423
visits: 26165
---
Вышел небольшой апплет-индикатор, предназначенный для регулирования яркости на мониторах портативных устройств.

[![](img/2013/04/23/20-00/ubuntu-8674716411-o.jpg)](img/2013/04/23/20-00/ubuntu-8674716411-o.jpg)

Апплет позволяет быстро непринуждённо установить нужное значение яркости монитора в желаемое значение с помощью одного из трёх способов:

*   выбрав из выпадающего списка;
*   прокрутив скролл мыши по значку;
*   использовав клавиатурные сокращения.

[![](img/2013/04/23/20-00/ubuntu-2-8675866116-o.jpg)](img/2013/04/23/20-00/ubuntu-2-8675866116-o.jpg)

Для настройки горячих клавиш нужно зайти в настройки клавиатуры и задать собственные значения:

*   **команда для увеличения:** /opt/extras.ubuntu.com/indicator-brightness/indicator-brightness-adjust --up
*   **команда для уменьшения:** /opt/extras.ubuntu.com/indicator-brightness/indicator-brightness-adjust --down

### Установка апплета настройки яркости монитора в Ubuntu

Установка доступна из PPA для всех версий Ubuntu, начиная c 11.10. Команды для терминала:

```
sudo add-apt-repository ppa:indicator-brightness/ppa
sudo apt-get update
sudo apt-get install indicator-brightness
```
