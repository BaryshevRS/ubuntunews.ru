---
title: 'Заставляем работать Skype на Ubuntu 13.04 с проприетарными видеодрайверами Nvidia'
date: '2013-04-13T19:21:18+04:00'
uri: 'articles/zastavlyaem-rabotat-skype-na-ubuntu-1304'
alias: 
  - 'articles/zastavlyaem-rabotat-skype-na-ubuntu-1304.html'
tags: 'Skype,13.04'
source: 'http://www.webupd8.org/2013/04/fix-skype-not-working-in-ubuntu-1304.html'
unixtime: 1365866478
visits: 29828
---
Пользователи Ubuntu 13.04 Raring Ringtail, работающие с проприетарными видеодрайверами Nvidia, столкнулись с проблемами запуска Skype. Как решить эту проблему сейчас и рассмотрим.

[![](img/2013/04/13/19-00/skype-8645908984-o.jpg)](img/2013/04/13/19-00/skype-8645908984-o.jpg)

## Фикс запуска Skype на Ubuntu 13.04 Raring Ringtail

Актуально только для тех, кто установил проприетарные драйверы Nvidia.

### Ход действий

**1.** Переименуем «skype» в «skype-bin», используя команду в терминале:

```
sudo mv /usr/bin/skype /usr/bin/skype-bin
```

**2.** Создадим новый файл запуска Skype. Для чего откроем текстовый редактор с правами администратора:

```
sudo gedit /usr/bin/skype
```

И вставим следующий код:

<samp>#!/bin/sh<br> export LD_PRELOAD=/usr/lib/i386-linux-gnu/mesa/libGL.so.1<br> exec skype-bin</samp>

Сохраняем.

**3.** Последнее. Устанавливаем права на выполнение:

```
sudo chmod 0755 /usr/bin/skype
```

Теперь всё должно работать.

Откатить изменения, и вернуть как было, можно следующими командами:

```
sudo rm /usr/bin/skype
sudo mv /usr/bin/skype-bin /usr/bin/skype
```

Описанное выше – лично не тестировалось, но по отзывам должно работать.
