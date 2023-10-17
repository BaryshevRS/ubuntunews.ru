---
title: 'Установка Firefox 7 из PPA в Ubuntu 10.04 или 10.10'
date: '2011-09-28T10:02:56+04:00'
uri: 'apps/firefox-7'
alias: 
  - 'apps/firefox-7.html'
tags: 'Firefox,Браузер,PPA'
source: ''
unixtime: 1317189776
visits: 8190
---
[Стала доступна](http://www.mozilla.org/en-US/firefox/7.0/releasenotes/) новая стабильная версия Firefox 7. Главной характеристикой в релизе стала улучшенная работа с памятью. Как заявляют разработчики потребление сократилось примерно на 20 — 30%, а в некоторых случаях и до 50%.

[![Установка Firefox 7 из PPA в Ubuntu 10.04 или 10.10](img/2011/09/28/10-00/firefox7-6190904315-o.jpg)](img/2011/09/28/10-00/firefox7-6190904315-o.jpg)

## Среди других улучшений:

*   Улучшена синхронизация сохраненных закладок и паролей через аддон Firefox Sync.
*   Префикс «http://» теперь скрыт
*   Добавлена поддержка CSS свойства: [text-overflow: ellipsis](https://developer.mozilla.org/En/CSS/Text-overflow)
*   Включена поддержка [Web Timing specification](https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/NavigationTiming/Overview.html) для помощи разработчикам в определение реальной производительности браузера при работе с их сайтами.
*   Протокол WebSocket обновлен до 8-ой версии.
*   Общее улучшение стабильности и производительности

## Установка Firefox 7 в Ubuntu

Пользователям  Ubuntu 11.04 и Ubuntu 11.10 не стоит беспокоиться об необходимости установки, т.к. новая версия сама установится через менеджер обновлений.

Для тех кто использует 10.04 и 10.10 потребуется добавить следующий PPA и установить:

```
sudo apt-add-repository ppa:mozillateam/firefox-stable/ubuntu 
sudo apt-get update 
sudo apt-get install firefox
```
