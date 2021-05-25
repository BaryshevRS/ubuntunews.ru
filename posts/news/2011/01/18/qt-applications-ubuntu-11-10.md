---
title: 'Qt будет в Ubuntu 11.10 по умолчанию'
date: '2011-01-18T22:33:43+03:00'
uri: 'news/qt-applications-ubuntu-11-10'
alias: 
  - 'news/qt-applications-ubuntu-11.10.html'
tags: '11.10,Qt,Фреймворк,Gnome,Gtk,Canonical,Марк Шаттлворт,dconf'
source: ''
unixtime: 1295379223
visits: 8534
---
Сегодня в своем [блоге](http://www.markshuttleworth.com/archives/568) Марк Шаттлворт объявил, что в следующем выпуске 11.10, идущем после апрельского релиза Natty на компакт-диске будет расчищено место под Qt библиотеки, для рассмотрения возможности включения нескольких программ на CD диск, разработанных с использованием Qt, и включения их по умолчанию в Ubuntu.

![Qt будет в Ubuntu 11.10 по умолчанию](img/2011/01/18/22-00/blackeubuntulogo.jpg)

До этого момента QT приложения не были рассмотрены для включения в поставку Ubuntu, не смотря на то, что некоторые из них были лучшими в своем классе, это было связано с неполной интеграцией с системными настройками Gnome, что давно являются причиной трений между Qt и Gtk.

В рамках разрешения данной ситуации, Canonical начала развитие dconf привязки для Qt, так что скоро можно будет писать приложения на Qt, используя настройки, что и все остальные приложения в [Ubuntu](ubuntu/).

Также Марк Шаттлворт отметил команду Qt, уже давно хорошо зарекомендовавших себя в сообществе Ubuntu, например сейчас работающих над интеграцией uTouch.

Следует помнить, что «Qt» и «KDE» не одно и тоже, приложения написанные для KDE, не знают ничего о системной конфигурации dconf и не могут быть просто интегрированы в Gnome так, что замена Banshee на Amarok в ближайшие время не планируется.