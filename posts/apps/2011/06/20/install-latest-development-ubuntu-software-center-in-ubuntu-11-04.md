---
title: 'Установка последней тестовой версии Ubuntu Software Center в Ubuntu 11.04'
date: '2011-06-20T18:35:29+04:00'
uri: 'apps/install-latest-development-ubuntu-software-center-in-ubuntu-11-04'
alias: 
  - 'apps/install-latest-development-ubuntu-software-center-in-ubuntu-11.04.html'
tags: 'Ubuntu Software Center,11.04'
source: ''
unixtime: 1308580529
visits: 12168
---
Центр приложений Ubuntu (Ubuntu Software Center), представляет из себя программу для управления программным обеспечением в Ubuntu. Позволяет производить поиск, установку, деинсталляцию, а также возможность покупки программ.

[![](img/2011/06/20/18-00/usc-5853162952-o.jpg)](img/2011/06/20/18-00/usc-5853162952-o.jpg)

Если есть желание поставить последнюю тестовую версию, то можно воспользоваться PPA с ежедневными сборками.

```
sudo apt-add-repository ppa:software-store-developers/daily-build
sudo apt-get update
sudo apt-get install software-center
```

По умолчанию в Ubuntu 11.04 Natty установлена версия 4.0, после установки из PPA, версия обновится до 4.1.6 или более позднюю.
