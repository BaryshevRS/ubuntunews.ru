---
title: 'Обзор Unity 6.6'
date: '2012-09-22T20:41:16+04:00'
uri: 'news/review-unity-6-6'
alias: 
  - 'news/review-unity-6-6.html'
tags: 'Unity,12.10'
source: 'http://www.omgubuntu.co.uk/2012/09/online-shopping-features-arrive-in-ubuntu-12-10'
unixtime: 1348332076
visits: 4869
---
В Ubuntu 12.10 Quantal Quetzal была [загружена](https://launchpad.net/ubuntu/quantal/+source/unity/6.6.0-0ubuntu1) новая версия Unity 6.6, вышедшая с двумя новыми линзами и анимацией для обзора файлов в Dash.

<iframe width="500" height="281" src="http://www.youtube.com/embed/gGGWiNGPfNE" frameborder="0" allowfullscreen=""></iframe>

## Линзы

В Dash была проведена работа по улучшению функциональности и интерфейса линз, а также добавлены две новые: для онлайн-покупок и социальная, более известная как Gwibber.

### Линза покупок

Линза для покупок, это ещё один шаг в направлении монетизации дистрибутива, который поможет собрать средства на дальнейшее развитие и улучшение Ubuntu.

[![](img/2012/09/22/20-00/unity-6-6-8012449861-o.jpg)](img/2012/09/22/20-00/unity-6-6-8012449861-o.jpg)

По своей сути хоть линза покупок и называется «линзой», но отдельной вкладкой в Dash она не представлена. Увидеть результаты её работы можно при поиске в домашней линзе, которые будут соответствовать введенному запросу и регионально зависимы. Среди сервисов откуда будет браться информация — это пока Ubuntu One Music Store и Amazon с его партнёрами.

Получение дохода будет за счёт отчисления небольшого процента от покупок.

Для тех кто недоволен таким решением при желании может её с легкостью удалить, например, введя в терминале команду:

```
sudo apt-get remove unity-lens-shopping
```

Новая линза не требуется в каких-либо зависимостях, поэтому её удаление полностью безопасно для системы.

При обзоре предлагаемого к покупке товара будет выводиться кнопка с логотипом магазина из которого его можно приобрести.

[![](img/2012/09/22/20-00/unity-6-3-8012455680-o.jpg)](img/2012/09/22/20-00/unity-6-3-8012455680-o.jpg)

К слову, это не единственное, что будет включено в плане получения прибыли, также на панель Unity по умолчанию будут добавлены два новых значка веб-приложений (WebApps) Ubuntu One Music Store и Amazon. Но в силу того, что новая характеристика, для создания из онлайн-сервисов, что-то вроде обычных десктоп приложений, пока не включена в дистрибутив, поэтому иконки всё ещё не доступны.

### Социальная линза

Социальная линза, больше известная как Gwibber, была значительно обновлена и теперь доступна по умолчанию.

[![](img/2012/09/22/20-00/unity-6-2-8012455870-o.jpg)](img/2012/09/22/20-00/unity-6-2-8012455870-o.jpg)

У линзы появился обзор с помощью которого можно будет воспользоваться различными социальными функциями предоставляемыми тем или иным онлайн-сервисом.

[![](img/2012/09/22/20-00/unity-6-1-8012450829-o.jpg)](img/2012/09/22/20-00/unity-6-1-8012450829-o.jpg)

### Линза приложений

Из линзы приложений был удалён фильтр по рейтингу (звёздочки), а в категории предлагаемых к установке теперь выводится список новинок.

<iframe width="500" height="281" src="http://www.youtube.com/embed/b3BFmIdzgsY" frameborder="0" allowfullscreen=""></iframe>

Ещё одним изменением стало появление новой анимации для устанавливаемых программ из интерфейса обзора Dash, не требующей запуска центра приложений.

### Линза для музыки

Изменения коснулись удаления горизонтальной прокрутки из категории с предложением к покупке и была обновлена иконка для отсутствующих обложек альбомов.

Среди общих улучшений интерфейса стоит отметить:

*   новый градиентный стиль для разделения категорий;
*   ярлык с ценой для предлагаемых к покупке товаров (альбомов, книг и т. п.);
*   увеличен размер подсветки при наведении на файлы.

[![](img/2012/09/22/20-00/unity-6-8-8012449489-o.jpg)](img/2012/09/22/20-00/unity-6-8-8012449489-o.jpg)

## Обзор файлов

Обзор файлов в Dash или «Unity Preview» получил множество различных улучшений, главный из которых — это новая анимация и закрытие с помощью кнопок мыши.

[![](img/2012/09/22/20-00/unity-6-5-8012450067-o.jpg)](img/2012/09/22/20-00/unity-6-5-8012450067-o.jpg)

Для того, чтобы вернуться назад к выводу всех файлов нужно нажать правой или левой кнопкой мыши по превью (например, для альбома это будет его обложка), либо по верхней или нижней границе. Где границы представляют из себя вывод ряда предыдущих и следующих, за выбранным файлом, позиций. Также по-прежнему можно использовать клавишу ESC.

Из других изменений стоит отметить удаление визуального выделения блоков и уменьшение, когда неактивны, прозрачности стрелок навигации на 20%.

## Прочее

*   Появилась опция удаления окна из просмотра в режиме группировки(Spread).

[![](img/2012/09/22/20-00/unity-6-7-8012449651-o.jpg)](img/2012/09/22/20-00/unity-6-7-8012449651-o.jpg)

*   Убрана ранее добавленная анимация «Magic Lamp» для минимизации окон.
*   Теперь с панели Unity можно удалить иконку переключения рабочих столов.
*   Удалена опция для сброса настроек Unity — «unity --reset», вместо которой теперь можно использовать «unity --reset-icon».