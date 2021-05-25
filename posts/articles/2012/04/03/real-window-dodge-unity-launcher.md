---
title: 'Полнофункциональное скрытие панели Unity в Ubuntu 12.04'
date: '2012-04-03T21:34:39+04:00'
uri: 'articles/real-window-dodge-unity-launcher'
alias: 
  - 'articles/real-window-dodge-unity-launcher.html'
tags: 'Unity,12.04'
source: 'http://www.webupd8.org/2012/04/real-window-dodge-unity-launcher.html'
unixtime: 1333474479
visits: 17105
---
Несколько дней назад нами был рассмотрен скрипт, позволяющий скрывать панель Unity, для программ развёрнутых во весь экран. Но теперь так же стал доступен ещё один скрипт, который реализует полноценный функционал скрытия панели при наведении окон. Подобный тому, что используется в Ubuntu 11.10.

С небольшой демонстрацией работы можно ознакомиться из следующего ролика:

<iframe width="500" height="284" src="http://www.youtube.com/embed/xUJBvD0TxIw" frameborder="0" allowfullscreen=""></iframe>

Стоит отметить, что если уже установлена старая версия скрипта, то его потребуется удалить:

```
sudo apt-get remove unity-dodge-windows
```

## Скачать

.deb пакеты доступны только для Ubuntu 12.04:

*   1\. Скрипт для скрытия панели аналогичный тому, что используется в Ubuntu 11.10
*   2\. Скрипт скрытия только для максимизированных приложений

  

После установки потребуется перезайти в сессию.

Удалить можно выполнив команду в терминале:

**Для первого:**

```
sudo apt-get remove unity-dodge-windows
```

**Для второго:**

```
sudo apt-get remove unity-dodge-maximized-windows
```
