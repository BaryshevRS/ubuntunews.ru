---
title: 'Поддержка Cloud Foundry (PaaS) в Ubuntu 11.10'
date: '2011-08-19T23:29:07+04:00'
uri: 'news/cloud-foundry-paas-in-ubuntu-11-10'
alias: 
  - 'news/cloud-foundry-paas-in-ubuntu-11-10.html'
tags: 'Cloud Foundry,PaaS,облачные вычисления,11.10'
source: 'http://www.h-online.com/open/news/item/Ubuntu-11-10-to-support-the-Cloud-Foundry-Platform-as-a-Service-1324917.html'
unixtime: 1313782147
visits: 3559
---
Canonical [сообщила](http://blog.canonical.com/2011/08/17/cloud-foundry-platform-as-a-service-paas-in-ubuntu-11-10-3/), что в октябрьском релизе Ubuntu 11.10 Oneric Ocelot, будет включена VMware's [Cloud Foundry](http://cloudfoundry.org/), PaaS (Platform-as-a-Service, платформа как сервис) с открытым исходным кодом, предназначенная для создания, развертывания и поддержки обеспечения работы приложений в приватном или публичном облачном окружении.

[![Поддержка Cloud Foundry (PaaS) в Ubuntu 11.10](img/2011/08/19/23-00/cloudfoundrydiagram800x576-6059529825-o.jpg)](img/2011/08/19/23-00/cloudfoundrydiagram800x576-6059529825-o.jpg)

Cloud Foundry была запущена в апреле и уже поддерживается запуск различных платформ и фреймворков таких как: Spring, Grails, Rails, Sinatra, Node.js и Scala, а из СУБД имеется возможность использовать MySQL, Redis, MongoDB и RabbitMQ. Другими словами, система является модульной и очень хорошо масштабируемой, без привязки к определенному набору приложений или сервисов.

Облачное окружение PaaS предназначено для запуска конечных приложений адаптированных для работы в облаке, в отличие от IaaS (Infrastructure-as-a-Service, инфраструктуры как сервис), таких как OpenStack и Amazon EC2, предлагающих развертывание виртуальных машин в облаке на которых запущены операционные системы и их приложения.

Ubuntu 11.10 будет включать: пакеты клиента и сервера Cloud Foundry's VMC, которые позволят развертывать и управлять приложениями, а также серверные инструменты, используя [Ensemble](http://ensemble.ubuntu.com/), для настройки системы как узла инфраструктуры PaaS.

VMC Client может быть использован для конфигурирования и развертывания приложений в любом облаке Cloud Foundry, в том числе и на собственном хостинге CloudFoundry.com Vmware, на которых, на текущий момент, открыта полностью бесплатная регистрация.

Также стоит отметить , что серверные пакеты могут быть настроены для запуска на узлах любого другого из IaaS облачных инфраструктур таких как: Eucalyptus или OpenStack.

Сами пакеты, для Ubuntu Server, можно будет найти в 11.10 Universe репозитории.

Инструкцию по установке из PPA и настройки CloudFoundry Server PaaS в Ubuntu 11.10 можно найти в [блоге разработчика](http://blog.dustinkirkland.com/2011/08/howto-install-cloudfoundry-server-paas.html) Dustin Kirkland.

С общими планами развития Ubuntu Server как облачной платформы можно ознакомиться [здесь](news/the-five-pillars-of-ubuntu-server-11-10).
