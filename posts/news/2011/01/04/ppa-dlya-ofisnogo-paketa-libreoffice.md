---
title: 'PPA для офисного пакета LibreOffice'
date: '2011-01-04T19:53:10+03:00'
uri: 'news/ppa-dlya-ofisnogo-paketa-libreoffice'
alias: 
  - 'news/560.html'
tags: 'LibreOffice,Open Source,Софт,PPA,OpenOffice.org,Пакет'
source: ''
unixtime: 1294159990
visits: 2307
---
Появилась возможность установки офисного пакета LibreOffice форка OpenOffice из PPA, до этого приходилось устанавливать из множества DEB пакетов, или вручную: при это без возможности уведомления об выходе новых версий, теперь ситуация изменилась и можно пользоваться всеми возможностями PPA и с легкостью производить обновления.

![LibreOffice](img/2011/01/04/19-00/libreoffice.jpg)

Пакеты доступны для пользователей 10,04, 10,10 и 11,04, стоит отметит, что стабильный релиз пока ещё не вышел и LibreOffice находится на стадии кандидата в релиз.

Установка:

```

sudo add-apt-repository ppa:libreoffice/ppa
sudo apt-get update && sudo apt-get install libreoffice 
```

Стилизация под Gnome:

```

sudo apt-get install libreoffice-gnome
```

И для пользователей KDE:

```

sudo apt-get install libreoffice-kde
```
