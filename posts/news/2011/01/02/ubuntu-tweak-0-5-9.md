---
title: 'Вышла Ubuntu Tweak 0.5.9 – утилита для тонкой настройки Ubuntu Linux'
date: '2011-01-02T19:49:03+03:00'
uri: 'news/ubuntu-tweak-0-5-9'
alias: 
  - 'news/556.html'
tags: 'Ubuntu Tweak,Ubuntu Linux,Настройка,Система,11.04,Пакет'
source: ''
unixtime: 1293986943
visits: 3798
---
Вышла новая версия Ubuntu Tweak 0.5.9, приложения предназначенного для тонкой настройки параметров Ubuntu Linux и рабочего стола Gnome. Ubuntu Tweak показывает полные системные характеристики (Версию дистрибутива, используемое ядро, ЦПУ, память и т. д.), автозапуск приложений, быструю инсталляцию популярных приложений, удаление ненужных пакетов, обновление программ, настройку эффектов рабочего стола и многое другое.

![Ubuntu Tweak  0.5.9](img/2011/01/02/19-00/ubuntu-tweak-058.jpg)

В этой версии введена поддержка Ubuntu 11.04 Natty и Linux Mint 10, также поддержка новых эффектов Compiz 0.9.2.1, стандартизирован список PPA и многое другое.

Устранен [баг](https://bugs.launchpad.net/ubuntu-tweak/+bug/694741 "Баг Ubuntu Tweak  0.5.9") возникающий при выключенной опции (Use Separated Sources), переименовывающий sources.list.

Примечание: пользователям Ubuntu 11.04 Natty нужно устанавливать Ubuntu Tweak из исходников.

Установить можно загрузив [пакет](https://launchpad.net/ubuntu-tweak/+download) или выполнив следующие действия:

Добавив репозиторий:

```
sudo add-apt-repository ppa:tualatrix/ppa
```

Обновляем список пакетов и устанавливаем Ubuntu Tweak:

```
sudo apt-get update
sudo apt-get install ubuntu-tweak
```
