---
title: 'Планы замены Banshee на Rhythmbox и приложения по умолчанию'
date: '2011-11-03T21:48:26+04:00'
uri: 'news/rhythmbox-to-return-as-ubuntu-12-04'
alias: 
  - 'news/rhythmbox-to-return-as-ubuntu-12-04.html'
tags: 'Banshee,Rhythmbox,UDS,12.04'
source: ''
unixtime: 1320342506
visits: 4675
---
Сегодня на саммите разработчиков Ubuntu (UDS), были рассмотрены приложения которые войдут по умолчанию в состав релиза Ubuntu 12.04.

## Возвращение Rhythmbox?

Мнения насчёт замены Rhythmbox на Banshee среди разработчиков разделились поровну. Сильными сторонами Rhythmbox является то, что он был установлен по умолчанию в предыдущем LTS релизе Ubuntu 10.04 и имеет нативную интеграцию с GTK3, в то время как Banshee всё ещё использует GTK2, а его порт находится в разработке.

[![Планы замены Banshee на Rhythmbox и приложения по умолчанию](img/2011/11/03/21-00/banshee-6309440055-o.jpg)](img/2011/11/03/21-00/banshee-6309440055-o.jpg)

Основной же причиной стало то, что переход на Rhythmbox позволит перейти на GTK3 плагину для фирменного магазина музыки Ubuntu One Music Store. Кроме того не должно возникнуть больших трудностей с интеграцией линзы аудиозаписей и прочих компонентов десктопа.

Также переключение на Rhythmbox позволит увеличить так необходимое свободное место на диске.

Не смотря на всё это говорить, что Rhythmbox заменит Banshee всё ещё рано, впереди ждут шесть месяцев разработки, в течение которых могут возникнуть различные проблемы, как это было с Thunderbird.

## Приложения в Ubuntu 12.04

По-прежнему в качестве включённых приложений останутся: почтовый клиент Thunderbird, для которого будут реализованы различные доработки интерфейса и офисный пакет LibreOffice. Браузером было решено оставить Firefox.

Такие приложения из GNOME 3, как GNOME Sushi и GNOME Documents было решено не включать в состав следующего выпуска. Среди отмеченных причин: плохая интеграция с интерфейсом Unity (нет новых скроллбаров, кнопки управления окном с другой стороны) и использование [Clutter](http://ru.wikipedia.org/wiki/Clutter), который работает не у всех пользователей.

## GNOME 3.4

Цикл релизов GNOME, как и Ubuntu равен шести месяцам, в то же время выпуск GNOME 3.4 выйдет за месяц до релиза 12.04, поэтому для большей стабильности, как это было в Ubuntu 11.04, будет реализован лишь частичный переход на 3.4, например для таких компонентов как: GNOME Games, Gedit и некоторых других.

Наиболее важные приложения, такие как Empathy или Nautilus останутся на 3.2. Исключением станет только видеопроигрыватель Totem 3.2, который как и в 11.10 останется на версии 3.0, из-за использования библиотеки Сlutter.

Пакеты не вошедшие в состав CD диска (например GNOME-Shell), будут доступны для версии 3.4.
