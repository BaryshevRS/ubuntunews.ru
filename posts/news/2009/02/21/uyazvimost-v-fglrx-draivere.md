---
title: 'Уязвимость в fglrx драйвере из состава Ubuntu 8.10 и в почтовом клиенте Evolution'
date: '2009-02-21T00:37:46+03:00'
uri: 'news/uyazvimost-v-fglrx-draivere'
alias: 
  - 'news/54.html'
tags: 'баг,8.10,Ubuntu Linux,Evolution'
source: 'http://www.opennet.ru/opennews/art.shtml?num=20391'
unixtime: 1235165866
visits: 1377
---
“fglrx-installer vulnerability” - уязвимость в fglrx (ATI Radeon) драйвере из состава Ubuntu 8.10. Проблема связана с установкой скриптом

```
fglrx-installer 
```

некорректной переменной окружения

```
LD_LIBRARY_PATH
```

на 64-разрядных системах. В

```
/etc/X11/Xsession.d/10fglrx
```

имеется строка

```
"LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:/usr/lib32"
```

, которая приводит к установке

```
LD_LIBRARY_PATH
```

в значение

```
":/usr/lib32"
```

, при этом пустая строка подразумевает текущую директорию, т.е. злоумышленник может организовать загрузку своей библиотеки и выполнить код с привилегиям другого пользователя.

Кроме того, в почтовом клиенте Evolution найдена проблема безопасности, связанная с возможностью генерации злоумышленником подписанных через S/MIME сообщений, корректных с точки зрения Evolution.
