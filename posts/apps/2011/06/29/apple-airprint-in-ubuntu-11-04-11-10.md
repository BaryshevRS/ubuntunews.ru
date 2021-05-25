---
title: 'Apple AirPrint: беспроводная печать с iPad / iPhone в Ubuntu 11.04 и 11.10'
date: '2011-06-29T08:49:51+04:00'
uri: 'apps/apple-airprint-in-ubuntu-11-04-11-10'
alias: 
  - 'apps/apple-airprint-in-ubuntu-11.04-11.10.html'
tags: 'iPhone,iPad,AirPrint,Apple,11.04'
source: ''
unixtime: 1309322991
visits: 4210
---
В последнем обновлении репозитория Ubuntu 11.04 и будущего релиза Ubuntu 11.10 реализована поддержка [CUPS](http://ru.wikipedia.org/wiki/Common_Unix_Printing_System) для Apple AirPrint, используемый для беспроводной печати с устройств Apple.

Apple AirPrint, позволяет запускать задания на беспроводную печать из iPad / iPhone / iPod, доступен из современных версий операционной системы Apple iOS.

Apple AirPrint официально поддерживаются принтеры HP (Hewlett-Packard), позволяющие отправлять задания на печать прямо на принтер, для поддержки остальных принтеров потребуется установить CUPS пакет AirPrint.

Если в системе нет принтера, то протестить работу можно создав псевдо-принтер командой:

```
cupsctl FileDevice=yes
lpadmin -p test -E -v file:/tmp/test.ps -m drv:///sample.drv/generic.ppd 
-o PageSize=A4
```

Результатом работы печати будет PostScript файл в «/tmp/test.ps».

Дополнительную информацию можно найти на [ubuntu-devel](https://lists.ubuntu.com/archives/ubuntu-devel/2011-June/033611.html).
