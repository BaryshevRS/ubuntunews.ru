---
title: 'Как установить Linux 3.2.9 в Ubuntu 11.10 / 12.04'
date: '2012-03-12T01:37:52+04:00'
uri: 'articles/install-linux-3-2-9'
alias: 
  - 'articles/install-linux-3.2.9.html'
tags: 'Ядро,Linux'
source: 'http://www.lffl.org/2012/03/installare-il-nuovo-kernel-linux-329-su.html'
unixtime: 1331501872
visits: 7912
---
Для загрузки доступно новое обновление [Linux 3.2.9](http://www.kernel.org/pub/linux/kernel/v3.0/ChangeLog-3.2.9) с различными нововведениями из которых стоит лишь отметить улучшение поддержки архитектуры ARM и патч для USB.

## Рассмотрим как установить Linux 3.2.9 в Ubuntu 11.10 / 12.04

### Linux 3.2.9 для Ubuntu (i386 / 32-bit)

```
cd
 wget -O linux-headers-3.2.9_all.deb http://goo.gl/HT0WU
 wget -O linux-headers-3.2.9-generic_i386.deb http://goo.gl/WTjwG
 wget -O linux-image-generic_3.2.9_i386.deb http://goo.gl/JZBNX
 sudo dpkg -i *.deb
 sudo apt-get install -f
```

### Linux 3.2.9 для Ubuntu (amd64 / 64-bit)

```
cd
 wget -O linux-headers-3.2.9_all.deb http://goo.gl/HT0WU
```

```
wget -O linux-headers-generic_3.2.9_amd64.deb http://goo.gl/0nAfq
```

```
wget -O linux-image-3.2.9-generic_amd64.deb http://goo.gl/5hvrp
 sudo dpkg -i *.deb
 sudo apt-get install -f
```

После выполнения команд перегружаемся и вводим команду для проверки успешности установки:

```
uname -r
```

<samp>3.2.9-030209-generic</samp>

Для удаления можно выполнить следующую команду:

```
sudo apt-get purge linux-image-3.2.9-030209-generic
```

Обновление версии ядра не всегда может пройти успешно, особенно если установлены проприетарные драйверы ATI или NVIDIA, поэтому их желательно удалить и поставить заново уже после установки новой версии Linux.
