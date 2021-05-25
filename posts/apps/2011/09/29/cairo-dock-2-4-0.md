---
title: 'Cairo Dock 2.4.0 - новая версия с отдельной Gnome сессией и поддержкой Unity'
date: '2011-09-29T10:31:57+04:00'
uri: 'apps/cairo-dock-2-4-0'
alias: 
  - 'apps/cairo-dock-2.4.0.html'
tags: 'Cairo Dock,Лаунчер'
source: 'http://www.webupd8.org/2011/09/cairo-dock-240-released-with-custom.html'
unixtime: 1317277917
visits: 8549
---
[Cairo Dock](https://launchpad.net/cairo-dock-core/+download) - это очень гибкий в настройке лаунчер, доступный с огромным списком плагинов и тем, а по своему функционалу может полностью заменить старую панель GNOME 2.

[![Cairo Dock 2.4.0 - новая версия с отдельной Gnome сессией и поддержкой Unity](img/2011/09/29/10-00/cairo-dock-6194475128-o.jpg)](img/2011/09/29/10-00/cairo-dock-6194475128-o.jpg)

Среди включенных плагинов / апплетов: индикатор клавиатуры, вывод погоды, меню сообщений, системный монитор, область уведомлений, вывод истории последних действий за счет использования Zeitgeist, менеджер буфера обмена и ещё множество других.

В новой версии Cairo Dock 2.4.0 в Ubuntu Oneiric по умолчанию реализована поддержка самостоятельной сессии, доступной для выбора из GDM, LightDM и других дисплейных менеджеров, а также реализована поддержка контекстного меню для Unity и улучшена интеграция с XFCE и оконными менеджерами.

## Что нового в Cairo Dock 2.4.0

*   Переписан апплет управления питанием
*   Профиксено меню сообщений в Ubuntu Oneiric и Natty
*   Улучшена поддержка инструментов Gnome 3
*   Поддержка MPRIS2 для апплета MusicPlayer
*   Обновлена тема по умолчанию
*   Новые апплеты, такие как: Gmail, и.п. - список которых можно найти [тут](http://glx-dock.org/mc_album.php?a=7).

Официальная видео презентация Cairo Dock 2.4.0

<iframe src="http://www.youtube.com/embed/NE6FFKhc66A" frameborder="0" width="500" height="284"></iframe> 

## Установка Cairo Dock 2.4.0 в Ubuntu

Установка доступна из официального PPA, для Ubuntu 11.10, 11.04, 10.10 и 10.04:

```
sudo add-apt-repository ppa:cairo-dock-team/ppa 
sudo apt-get update 
sudo apt-get install cairo-dock cairo-dock-plug-ins
```
