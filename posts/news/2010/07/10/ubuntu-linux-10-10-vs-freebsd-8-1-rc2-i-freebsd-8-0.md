---
title: 'Ubuntu Linux 10.10 vs FreeBSD 8.1 RC2 и FreeBSD 8.0'
date: '2010-07-10T13:50:06+04:00'
uri: 'news/ubuntu-linux-10-10-vs-freebsd-8-1-rc2-i-freebsd-8-0'
alias: 
  - 'news/419.html'
tags: 'FreeBSD,10.10,Ubuntu Linux,сравнение'
source: 'http://www.opennet.ru/opennews/art.shtml?num=27243'
unixtime: 1278755406
visits: 2547
---
Ресурс Phoronix провел тестирование производительности FreeBSD 8.1 RC2, FreeBSD 8.0 и Ubuntu 10.10. В тестировании участвовали: FreeBSD 8.0-RELEASE x86\_64 (GCC 4.2.1 и файловая система UFS), FreeBSD 8.1 RC2 8.1-RC2 x86\_64 (GCC 4.3.4 и файловая система UFS) и снапшот Ubuntu Server 10.10 2010-07-04 (ядро Linux 2.6.35-6-generic x86\_64, GCC 4.4.4 и файловая система EXT4).

*   В тесте LAME MP3 быстрее оказался Ubuntu.
*   В тесте на скорость сжатия утилитой 7-Zip FreeBSD 8.1 RC2 оказался быстрее на 4%.
*   В тесте на сжатие методом Gzip FreeBSD 8.1 RC2 был быстрее FreeBSD 8.0, но все же не быстрее Ubuntu 10.10 с файловой системой EXT4.
*   В тесте LZMA результаты приблизительно одинаковые, но все же FreeBSD 8.1 RC2 была чуть быстрее.
*   В тесте POV-Ray на 211 секунд отстала FreeBSD 8.1 RC2, но в тесте C-Ray значительно быстрее была FreeBSD.
*   В тестах John the Ripper, dcraw, MAFFT, GraphicsMagick, Himeno победила Ubuntu, в тесте Threaded I/O отрыв Ubuntu с файловой системой EXT4 против UFS на FreeBSD составил 50%.

Хотя тестовый выпуск Ubuntu 10.10 был быстрее FreeBSD в большинстве испытаний приятно видеть небольшое увеличение производительности FreeBSD 8.1 RC2 в сравнении с FreeBSD 8.0. В любом случае FreeBSD 8.1 не является таким большим обновлением как FreeBSD 7 и FreeBSD 8, потому результаты не вызывают удивления. Формирование официального релиза FreeBSD 8.1 по плану должно состоятся сегодня, но скорее всего релиз выйдет с небольшим запозданием.
