---
title: 'Удаленный десктоп в В Ubuntu 10.04 '
date: '2010-03-04T22:55:26+03:00'
uri: 'news/udalennyi-desktop-v-v-ubuntu-10-04'
alias: 
  - 'news/299.html'
tags: 'null'
source: 'http://www.opennet.ru/opennews/art.shtml?num=25670'
unixtime: 1267732526
visits: 1231
---
В рамках проекта “[Desktop in the Cloud](https://blueprints.launchpad.net/ubuntu/+spec/desktop-lucid-desktop-cloud)” в Ubuntu 10.04 [планируют добавить](http://www.starryhope.com/linux/2010/ubuntu-desktop-in-the-cloud/) возможность организации удаленной работы с десктоп-окружением, обслуживаемым на сервере, работающем под управлением [EC2-совместимой](https://help.ubuntu.com/community/EC2StartersGuide) Cloud-инфраструктуры. Доступ к удаленному десктопу производится через запуск [NX-клиента](http://www.nomachine.com/download-client-linux.php) в любой ОС, в качестве NX-сервера используется [Neatx](http://code.google.com/p/neatx/).

По предварительным данным одно виртуальное серверное окружение с Ubuntu сможет обслуживать около 100 пользователей. Сервер можно будет запустить как в оригинальном Cloud-окружении Amazon EC2, так и его свободной реализации Eucalyptus, доступной для быстрого развертывания на локальном кластере при помощи дистрибутива [Ubuntu Enterprise Cloud](http://www.ubuntu.com/cloud) (UEC).
