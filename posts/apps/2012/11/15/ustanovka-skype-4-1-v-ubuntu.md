---
title: 'Установка Skype 4.1 в Ubuntu'
date: '2012-11-15T22:24:27+04:00'
uri: 'apps/ustanovka-skype-4-1-v-ubuntu'
alias: 
  - 'apps/ustanovka-skype-4-1-v-ubuntu.html'
tags: 'Skype'
source: ''
unixtime: 1353003867
visits: 23506
---
Для Linux была представлена новая версия популярного VoIP-клинта Skype, обновившаяся до версии 4.1.

Основными изменениями стали вход через аккаунт Microsoft и интеграция с клиентом обмена мгновенными сообщениями Windows Live Messenger.

[![](img/2012/11/15/22-00/skype-8187908297-o.jpg)](img/2012/11/15/22-00/skype-8187908297-o.jpg)

Теперь при авторизации будет предложено войти через обычный логин или через аккаунт созданный в сервисах Microsoft, при выборе последнего можно будет объединить Skype с записями в Windows Live Messenger.

[<button>Скачать Skype 4.1 в Ubuntu</button>](http://www.skype.com/intl/en-us/get-skype/on-your-computer/linux/)

## Установка Skype 4.1 в Ubuntu

Если при установке новой версии возникли проблемы с зависимостями, то нужно удалить старую версию:

```
sudo apt-get remove skype skype-bin
```

В 64-битной Ubuntu также возможно пропадание апплета-индикатора. Это решается так:

```
sudo apt-get install sni-qt:i386
```
