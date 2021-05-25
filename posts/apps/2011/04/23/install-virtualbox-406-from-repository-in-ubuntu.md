---
title: 'Установка VirtualBox 4.0.6 из репозитория в Ubuntu'
date: '2011-04-23T00:33:47+04:00'
uri: 'apps/install-virtualbox-406-from-repository-in-ubuntu'
alias: 
  - 'apps/install-virtualbox-406-from-repository-in-ubuntu.html'
tags: 'VirtualBox'
source: ''
unixtime: 1303504427
visits: 8740
---
Представлен релиз Virtualbox 4.0.6 совместимый с Unity, за счет добавление поддержки X.Org Server 1.10, также была улучшена совместимость с ядром 2.6.39-rc1 и общее улучшение производительности при работе в качестве гостевой системы, полный список изменений доступен [здесь](http://www.virtualbox.org/wiki/Changelog).

[![](img/2011/04/23/00-00/virtualbox-natty-5644503062-o.jpg)](img/2011/04/23/00-00/virtualbox-natty-5644503062-o.jpg)

### Установка VirtualBox 4 в Ubuntu

Для добавления репозитория и установки последней версии VirtualBox 4.0.6 в Ubuntu 11.04 Natty Narwhal, 10.10 Maverick Meerkat или 10.04 Lucid Lynx нужно выполнить [следующие](http://www.webupd8.org/2011/04/virtualbox-ubuntu-1104-natty-narwhal.html) команды: (предварительно удалив, если установлена, 3-ию версию)

```
echo "deb http://download.virtualbox.org/virtualbox/debian $(lsb_release -sc) contrib" | sudo tee /etc/apt/sources.list.d/virtualbox.list
wget -q http://download.virtualbox.org/virtualbox/debian/oracle_vbox.asc -O- | sudo apt-key add -
sudo apt-get update
sudo apt-get install virtualbox-4.0
```

Для тех кто использует предыдущие версии Ubuntu и хочет попробовать 11.04 в качестве гостевой ОС нужно выполнить следующую команду:

```
sudo apt-get install virtualbox-ose-guest-utils 
```
