---
title: 'GTK Theme Preferences – утилита для настройки GTK тем'
date: '2012-09-08T18:58:20+04:00'
uri: 'apps/gtk-theme-preferences'
alias: 
  - 'apps/gtk-theme-preferences.html'
tags: 'Твикер,Тема,Gtk'
source: 'http://www.webupd8.org/2012/09/customize-gtk3-gtk2-theme-colors-using.html'
unixtime: 1347116300
visits: 17603
---
Представлена новая утилита «GTK Theme Preferences» для настройки GTK и GNOME Shell тем.

[![](img/2012/09/08/18-00/gtk-7955680194-o.jpg)](img/2012/09/08/18-00/gtk-7955680194-o.jpg)

Программа работает с любыми GTK2 и GTK3 темами и позволяет настроить различные параметры оформления:

*   фоновый цвет при выделение;
*   цвет фона и текста в панелях Xfce, Gnome и Unity;
*   фон и цвет меню.

Подобные характеристики были включены по умолчанию ещё в GNOME 2, но к сожалению они не были перенесены в GNOME 3 (GNOME Shell, Unity), поэтому пользователям, для смены оформления темы, приходилось в ручную редактировать конфигурационные файлы. Новая утилита пока не обладает полным функционалом для настройки всех компонентов, но в будущем можно надеяться на расширение возможностей.

## Установка GTK Theme Preferences

GTK Theme Preferences доступна для установки из PPA в Ubuntu 12.04 Precise Pangolin и 12.10 Quantal Quetzal, используя команды ниже:

```
sudo add-apt-repository ppa:shimmerproject/ppa
 sudo apt-get update
 sudo apt-get install gtk-theme-config
```

После изменения параметров их необходимо сохранить и перезайти в сессию.
