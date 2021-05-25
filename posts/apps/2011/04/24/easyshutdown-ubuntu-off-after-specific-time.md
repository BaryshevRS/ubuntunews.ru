---
title: 'EasyShutdown – выключение компьютера c Ubuntu по таймеру'
date: '2011-04-24T17:53:44+04:00'
uri: 'apps/easyshutdown-ubuntu-off-after-specific-time'
alias: 
  - 'apps/easyshutdown-ubuntu-off-after-specific-time.html'
tags: 'EasyShutdown,ComplexShutdown'
source: ''
unixtime: 1303653224
visits: 49083
---
EasyShutdown простой скрипт с графически интерфейсом, выключающий компьютер в указанный промежуток времени, которое можно задать в минутах и часах.

[![EasyShutdown – выключение компьютера c Ubuntu по таймеру](img/2011/04/24/17-00/easyshutdown-screenshot-5649825462-o.jpg)](img/2011/04/24/17-00/easyshutdown-screenshot-5649825462-o.jpg)

Для более детальной настройки выключения компьютера можно воспользоваться более продвинутой утилитой ComplexShutdown, отличающийся от EasyShutdown расширенной настройкой и наличием дополнительных параметров.

[![ComplexShutdown – выключение компьютера c Ubuntu по таймеру](img/2011/04/24/17-00/screenshot-complexshutdown-5649263821-o.jpg)](img/2011/04/24/17-00/screenshot-complexshutdown-5649263821-o.jpg)

Ubuntu также можно выключить воспользовавшись терминалом (ALT+CTRL+T).

Введя:

```
sudo shutdown -h +m 
```

или

```
sudo shutdown -h hh:mm.
```

Где **hh:mm** это часы и минуты, в которые система будет выключена.

Кроме **–h** доступны и другие опции:

*   \-r - перезагружает систему
*   \-h - выключает или включает систему
*   \-H - выключает систему
*   \-P - включает систему
*   \-c - отменяет введенную команду

Скачать можно с launchpad.net: [EasyShutdown](https://code.launchpad.net/easyshutdown), [ComplexShutdown](https://launchpad.net/complexshutdown).
