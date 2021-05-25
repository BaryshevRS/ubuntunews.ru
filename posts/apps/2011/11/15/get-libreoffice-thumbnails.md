---
title: 'Установка превьюшек для файлов LibreOffice и OpenOffice.org'
date: '2011-11-15T20:18:51+04:00'
uri: 'apps/get-libreoffice-thumbnails'
alias: 
  - 'apps/get-libreoffice-thumbnails.html'
tags: 'LibreOffice,OpenOffice.org'
source: 'http://www.webupd8.org/2011/11/get-libreoffice-thumbnails-in-nautilus.html'
unixtime: 1321373931
visits: 4587
---
OOO Thubnailer - небольшая утилита для файлового менеджера Nautilus, позволяющая выводить превьюшки для файлов созданных в LibreOffice / OpenOffice.org, таких как: документы, презентации, рисунки и таблицы.

[![](img/2011/11/15/20-00/ooo-thubnailer-6347166565-o.jpg)](img/2011/11/15/20-00/ooo-thubnailer-6347166565-o.jpg)

Кроме вывода превью, также в нижнем правом углу выводится иконка приложения в котором был создан файл.

Основным изменением обновлённой версии стала работа с файлами LibreOffice (предыдущая версия имела зависимости с OpenOffice.org), а также реализована полная поддержка GNOME 3 / Nautilus 3.

## Установка OOO Thubnailer

Установить OOO Thubnailer Ubuntu 11.10 Oneiric Ocelot можно командами ниже:

```
sudo add-apt-repository ppa:flimm/ooo-thumbnailer
 sudo apt-get update
 sudo apt-get install ooo-thumbnailer
```

После инсталляции потребуется перегрузить Nautilus:

```
nautilus -q
```
