---
title: 'Basenji - индексация файлов на удаленных носителях в Ubuntu 11.04'
date: '2011-05-13T23:55:09+04:00'
uri: 'apps/basenji-fast-indexing-of-volume-collections-in-ubuntu-11-04'
alias: 
  - 'apps/basenji-fast-indexing-of-volume-collections-in-ubuntu-11.04.html'
tags: 'Basenji'
source: ''
unixtime: 1305316509
visits: 2290
---
Basenji приложение для простой и быстрой индексации коллекций на удаленных носителях.

[![](img/2011/05/13/23-00/basenji-5716364241-o.jpg)](img/2011/05/13/23-00/basenji-5716364241-o.jpg)

Текущая версия поддерживает индексацию файлов на удаленных носителей, таких как CD/DVD или USB, сохраняя собранную информацию в базе данных, по которой в дальнейшем можно будет просматривать и искать нужные файлы.

В качестве интерфейса для Basenji используется GTK+ GUI фронтенд, на стороне бекенда работает библиотека VolumeDB, которая и реализует всю логику работы с базой данных, а также индексацию и поиск.

### Установить Basenji в Ubuntu 11.04

```
sudo add-apt-repository ppa:pulb/ppa
sudo apt-get update
sudo apt-get install basenji
```
