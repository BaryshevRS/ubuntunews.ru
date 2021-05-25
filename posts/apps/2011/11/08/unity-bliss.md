---
title: 'Unity Bliss -  альтернативная линза приложений для Ubuntu'
date: '2011-11-08T19:48:47+04:00'
uri: 'apps/unity-bliss'
alias: 
  - 'apps/unity-bliss.html'
tags: 'Unity Bliss,Линзы'
source: 'http://www.omgubuntu.co.uk/2011/11/unity-bliss-an-alternative-application-lens-for-ubuntu/'
unixtime: 1320767327
visits: 5940
---
Линза приложений в Ubuntu позволяет искать нужные приложения по названию, а также по категориям.

Для пользователей кто предпочитает более традиционную структуру меню программ была представлена специальная линза приложений Unity Bliss.

Линза Unity Bliss организует все программы в виде папок категорий, по переходу в которую выводятся все соответствующие приложения, как это было в меню GNOME 2.

[![Unity Bliss -  альтернативная линза приложений для Ubuntu](img/2011/11/08/19-00/unity-bliss-1-6325523031-o.jpg)](img/2011/11/08/19-00/unity-bliss-1-6325523031-o.jpg)

[![Unity Bliss -  альтернативная линза приложений для Ubuntu](img/2011/11/08/19-00/unity-bliss-6325523029-o.jpg)](img/2011/11/08/19-00/unity-bliss-6325523029-o.jpg)

## Установка Unity Bliss

Скачаем исходники пакета из PPA:  [launchpad.net/unity-lens-bliss](https://launchpad.net/unity-lens-bliss)

Для установки сначала распакуем архив в домашнюю директорию, а затем последовательно выполним ряд команд в терминале:

```
cd unity-lens-bliss-0.1.3
sudo apt-get install checkinstall
./configure --prefix=/usr --sysconfdir=/etc
make 
sudo checkinstall
```

Для вступления изменений в силу потребуется перезайти в сессию.

Утилита checkinstall нам понадобилась для возможности установить новую линзу в виде родного deb пакета, который в дальнейшем в случае необходимости можно будет удалить воспользовавшись центром приложений Ubuntu.

Видео с демонстрацией работы:

<iframe src="http://player.vimeo.com/video/31596017?title=0&amp;byline=0&amp;portrait=0" width="500" height="255" frameborder="0" webkitallowfullscreen="" allowfullscreen=""></iframe>
