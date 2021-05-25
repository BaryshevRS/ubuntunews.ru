---
title: 'Апплеты для работы с Gmail в Unity'
date: '2011-08-16T22:46:55+04:00'
uri: 'apps/unity-mail-gmail-count-desktop-launcher'
alias: 
  - 'apps/unity-mail-gmail-count-desktop-launcher.html'
tags: 'Gmail,Unity'
source: 'http://www.webupd8.org/2011/08/ubuntu-email-notifier-gmailwatcher-gets.html'
unixtime: 1313520415
visits: 5271
---
Рассмотрим два дополнения, предназначенные для интеграции десктоп оболочки Unity c почтовым сервисом Gmail.

## Unity Mail

[Unity Mail](http://www.google.ru/url?sa=t&source=web&cd=1&ved=0CCEQFjAA&url=https%3A%2F%2Flaunchpad.net%2F~mitya57%2F%2Barchive%2Fppa&rct=j&q=ppa%3Amitya57%2Fppa&ei=3LtKTpyOPMOVOvGHlLsI&usg=AFQjCNHcVnDDju6dub0IRcJc7-JTUA509g&sig2=bBDqtln2oEmIKNo98W7k9w&cad=rja) - простой апплет в виде значка на панели Unity с выводом счетчика числа непрочитанных сообщений.

### Основные характеристики:

*   Простой интерфейс создания аккаунтов.

[![Апплеты для работы с Gmail в Unity](img/2011/08/16/22-00/gmail-unity-2-6049957337-o.jpg)](img/2011/08/16/22-00/gmail-unity-2-6049957337-o.jpg)

*   Поддержка создания нескольких аккаунтов.
*   Интеграция с системой уведомлений, выводящая сообщения для новых писем.
*   Поддержка контекстного меню с быстрым доступом к часто используемым опциям (написать письмо, входящие, отправленные)

[![Апплеты для работы с Gmail в Unity](img/2011/08/16/22-00/gmail-unity-4-6049960613-o.jpg)](img/2011/08/16/22-00/gmail-unity-4-6049960613-o.jpg)

Установка доступна из PPA для Ubuntu 11.04 и 11.10:

```
sudo add-apt-repository ppa:mitya57/ppa 
sudo apt-get update 
sudo apt-get install unity-mail 
```

## GmailWatcher

[GmailWatcher](https://bugs.launchpad.net/gmailwatcher) - дополнение специально разработанное для работы в Ubuntu c сервисом Gmail. Поддерживает возможность создания нескольких аккаунтов, отслеживания новых писем разделенных по меткам, а также интегрируется с меню сообщений и уведомлений NotifyOSD.

[![GmailWatcher](img/2011/08/16/22-00/gmail-unity-1-6050508706-o.jpg)](img/2011/08/16/22-00/gmail-unity-1-6050508706-o.jpg)

В меню сообщений, апплет выводит число непрочитанных сообщений, при клике по которым открывается окно с выводом отправителя и названием письма, без необходимости запуска браузера.

[![GmailWatcher](img/2011/08/16/22-00/gmail-unity-5-6050513832-o.jpg)](img/2011/08/16/22-00/gmail-unity-5-6050513832-o.jpg)

Новая версия GmailWatcher пока нестабильна и доступна только под Ubuntu 11.10 Oneiric Ocelot:

```
sudo add-apt-repository ppa:loneowais/gmailwatcher.dev 
sudo apt-get update 
sudo apt-get install gmailwatcher
```
