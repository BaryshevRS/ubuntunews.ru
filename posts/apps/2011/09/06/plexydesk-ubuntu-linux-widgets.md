---
title: 'PlexyDesk - виджеты для рабочего стола в Ubuntu'
date: '2011-09-06T18:05:30+04:00'
uri: 'apps/plexydesk-ubuntu-linux-widgets'
alias: 
  - 'apps/plexydesk-ubuntu-linux-widgets.html'
tags: 'PlexyDesk,Виджеты'
source: 'http://www.omgubuntu.co.uk/2011/09/plexydesk-ubuntu-linux-widgets/'
unixtime: 1315317930
visits: 16777
---
PlexyDesk – еще одна реализация виджетов для рабочего стола. Проект является новым и все еще находится на этапе разработки и в основном ориентирован на вывод файлов на рабочий стол.

[![PlexyDesk - виджеты для рабочего стола в Ubuntu](img/2011/09/06/18-00/plexydesk-6120022397-o.jpg)](img/2011/09/06/18-00/plexydesk-6120022397-o.jpg)

PlexyDesk основана на Qt/QML и после установки по умолчанию заменяет рабочий стол на альтернативу, которая по словам разработчиков - «Позволяет эффективно использовать ваш десктоп».

Приложение является кроссплатформенным (Windows, OS X and Linux) и может работать под большинством десктоп окружений, такими как: KDE, GNOME 2, GNOME 3/Shell и Ubuntu Unity.

## Основные характеристики:

*   Небольшой набор виджетов (часы, фоторамки, файловый браузер).
*   Некоторые виджеты поддерживают смену темы – правый клик мыши для переключения между ними.
*   Смена обоев простым перетаскиванием картинки на свободное пространство рабочего стола
*   Поддержка 3D
*   Поддержка изменения тем (QML)
*   Новые виджеты добавляются перетаскиванием (некоторые нестабильные версии можно найти тут «/usr/share/plexy/themepack/default»)
*   Поддержка API и шейдеров GLSL для разработки сторонних виджетов

## Установка Plexydesk в Ubuntu

Установочный пакет можно найти в тестовом репозитории, доступным для пользователей Ubuntu 10.10, 11.04 и 11.10, а так как приложение написано на QT, то в процессе потребуется установить дополнительные зависимости.

```
sudo add-apt-repository ppa:plexydesk/plexydesk-dailybuild 
sudo apt-get update
sudo apt-get install plexydesk
```