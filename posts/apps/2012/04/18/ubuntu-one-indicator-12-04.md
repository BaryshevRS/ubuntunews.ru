---
title: 'Обновлён апплет-индикатор для Ubuntu One в Ubuntu 12.04'
date: '2012-04-18T22:06:17+04:00'
uri: 'apps/ubuntu-one-indicator-12-04'
alias: 
  - 'apps/ubuntu-one-indicator-12.04.html'
tags: 'indicator-applet,Ubuntu One,12.04'
source: ''
unixtime: 1334772377
visits: 7321
---
Апплет-индикатор для работы с облачным сервисом Ubuntu One был обновлён для Ubuntu 12.04. В результате чего он был полностью переписан на Vala и стал намного экономичнее расходовать память.

[![](img/2012/04/18/22-00/ubuntu-one-7091082137-o.jpg)](img/2012/04/18/22-00/ubuntu-one-7091082137-o.jpg)

## Другие изменения:

*   Апплет теперь стартует сразу после авторизации в системе.
*   Добавлены новые пункты меню: недавно опубликованные файлы, открыть папку Ubuntu One, открыть сайт и открыть панель управления.
*   Вывод скорости и времени передачи файла.

## Установка Ubuntu One Indicator в 12.04

Для установки выполним следующие команды из терминала:

```
sudo add-apt-repository ppa:rye/ubuntuone-extras
 sudo apt-get update
 sudo apt-get install indicator-ubuntuone
```
