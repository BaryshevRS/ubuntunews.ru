---
title: 'Поддержка по умолчанию 32-разрядных приложений в 64-разрядной сборке Ubuntu'
date: '2011-08-17T21:11:17+04:00'
uri: 'news/multiarch-ubuntu-11-10'
alias: 
  - 'news/multiarch-ubuntu-11-10.html'
tags: 'Multiarch,11.10'
source: ''
unixtime: 1313601077
visits: 6607
---
Разработчики Ubuntu [сообщили](http://www.mail-archive.com/ubuntu-devel-announce@lists.ubuntu.com/msg00650.html), что multiarch, позволяющая запускать 32-разрядные приложения на 64-разрядных системах, в рамках проекта отказа от использования библиотек «ia32-libs», была включена по умолчанию в тестовых версиях Ubuntu 11.10 для архитектуры amd64.

Это означает, что пакеты доступные для 32-разрядной версии Ubuntu могут быть свободно установлены и под 64-битную систему.

Работа по интеграции multiarch была начата еще в [тестовых релизах Ubuntu 11.04](news/ubuntu-1104-beta-1-released), а её окончательная поддержка планируется к финальному релизу Oneiric Ocelot.

Если была установлена не сегодняшняя тестовая сборка Ubuntu, то для включения поддержки в третьей альфа нужно в файле «/etc/dpkg/dpkg.cfg.d/multiarch» прописать строку «foreign-architecture i386» выполнив в терминале:

```
sudo echo foreign-architecture i386 > /etc/dpkg/dpkg.cfg.d/multiarch 
sudo apt-get update
```
