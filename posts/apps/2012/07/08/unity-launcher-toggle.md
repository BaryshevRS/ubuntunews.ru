---
title: 'Апплет для переключения режимов показа панели Unity'
date: '2012-07-08T19:31:20+04:00'
uri: 'apps/unity-launcher-toggle'
alias: 
  - 'apps/unity-launcher-toggle.html'
tags: 'indicator-applet,Unity'
source: ''
unixtime: 1341761480
visits: 5323
---
В Ubuntu 12.04 по умолчанию панель Unity всегда включена, но её показ можно отключить из настроек внешнего вида.

[![](img/2012/07/08/19-00/toogle-7527826754-o.jpg)](img/2012/07/08/19-00/toogle-7527826754-o.jpg)

Для упрощения переключения был представлен простой апплет, который позволяет быстро скрыть или показать панель. Это может быть полезным для энономии свободного пространства при работе с различными приложениями, без необходимости поиска опции отключения панели в настройках.

Апплет поддерживает работу с HUD, для чего достаточно ввести «Toggle» (appindicator → Toggle) и панель также изменит своё состояние.

## Установка Unity Launcher Toggle в Ubuntu 12.04

```
sudo add-apt-repository ppa:napdivad/ppa sudo apt-get update sudo apt-get install unity-launcher-toggle
```

Программу можно будет найти поиском «Unity Launcher Toggle» через Dash.

Для добавления программы в автозапуск надо перейти в запуск приложений и добавить:

*   **Имя команды:** unity-toggle
*   **Команда:** /opt/extras.ubuntu.com/unity-launcher-toggle/bin/unity-launcher-toggle
