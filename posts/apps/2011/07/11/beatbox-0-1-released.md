---
title: 'Стабильный релиз Elementary медиаплеера Beatbox 0.1 в Ubuntu'
date: '2011-07-11T19:53:19+04:00'
uri: 'apps/beatbox-0-1-released'
alias: 
  - 'apps/beatbox-0-1-released.html'
tags: 'Elementary,Проигрыватель,Beatbox'
source: 'http://www.omgubuntu.co.uk/2011/07/beatbox-0-1-released'
unixtime: 1310399599
visits: 3604
---
Пользователям Ubuntu стал доступен первый стабильный релиз легковесного музыкального плеера Beatbox.

[![Elementary медиаплеера Beatbox 0.1 в Ubuntu](img/2011/07/11/19-00/beatbox-2-5926793408-o.jpg)](img/2011/07/11/19-00/beatbox-2-5926793408-o.jpg)

Beatbox 0.1 это «Elementary» музыкальный плеер, особенностью которого является нетребовательность к системным ресурсам. Разработкой проекта занимается [Scott Ringwelski](https://launchpad.net/~sgringwe).

## Основные характеристики:

*   Поддержка звукового меню в Ubuntu
*   Проигрывание аудио и видео
*   Умный плейлист, позволяющий воспроизводить похожие композиции
*   Интеграция с Last FM
*   Эквалайзер

[![Эквалайзер Elementary медиаплеера Beatbox 0.1 в Ubuntu](img/2011/07/11/19-00/beatbox-1-5926232303-o.jpg)](img/2011/07/11/19-00/beatbox-1-5926232303-o.jpg)

*   Группировка по: спискам, альбомам и колонкам с фильтрацией по метаданным.
*   Перемешивание, повтор и очередь воспроизведения
*   Редактор метаданных

[![Elementary медиаплеера Beatbox 0.1 в Ubuntu](img/2011/07/11/19-00/beatbox-5926792090-o.jpg)](img/2011/07/11/19-00/beatbox-5926792090-o.jpg)

*   Автоматическая подгрузка обложки альбома

В следующих версиях планируется интеграция с музыкальными магазинами и синхронизация со сторонними сервисами.

## Установка Beatbox

Beatbox 0.1 доступен из PPA в Ubuntu 11.04 и 11.10, требующий для своей работы дополнительную зависимость «libsqlheavy».

```
sudo apt-add-repository ppa:sgringwe/beatbox 
sudo apt-add-repository ppa:elementaryart/elementarydesktop 
sudo apt-get update
sudo apt-get install beatbox
```
