---
title: 'Вышел виджет часов Ubuntu Phone Clock 0.9'
date: '2013-01-25T00:29:20+04:00'
uri: 'apps/ubuntu-phone-clock-0-9'
alias: 
  - 'apps/ubuntu-phone-clock-0-9.html'
tags: 'Виджеты,Телефон'
source: ''
unixtime: 1359059360
visits: 6971
---
Недавно представленная Ubuntu для телефонов послужила плацдармом для создания различных приложений, выдержанных в стиле этой операционной системы. На текущий момент такими программами стали живые [обои для Android](apps/zhivyye-oboi-s-ubuntu-phone-dlya-android) и виджет часов для десктоп редакции Ubuntu, который сейчас и рассмотрим.

[![](img/2013/01/25/00-00/ubuntu-phone-clock-1-8412419004-o.jpg)](img/2013/01/25/00-00/ubuntu-phone-clock-1-8412419004-o.jpg)

Приложение в первую очередь создано для фанатов, находящихся в предвкушении выхода Ubuntu Phone. Виджет не богат функционалом, главным его достоинством является имитирование поведения экранной заставки с аналогичной попеременной сменой цветовой гаммы.

[![](img/2013/01/25/00-00/ubuntu-phone-clock-4-8412418794-o.jpg)](img/2013/01/25/00-00/ubuntu-phone-clock-4-8412418794-o.jpg)

Из настроек стоит отметить смену формата вывода даты и установку статической однотонной цветовой темы.

## Установка Ubuntu Phone Clock 0.9

Установить можно в Ubuntu 12.10, используя PPA ниже:

```
sudo add-apt-repository ppa:barbosanascimentogabriel/ubuntu-phone-clock sudo apt-get update sudo apt-get install ubuntu-phone-clock
```

В Ubuntu 12.04 надо выполнить следующие команды в терминале:

```
wget -O ubuntu-phone-clock.deb http://goo.gl/6b5Cs sudo dpkg -i ubuntu-phone-clock.deb && rm ubuntu-phone-clock.deb
```
