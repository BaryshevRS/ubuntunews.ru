---
title: 'Установка Smart Scopes в Ubuntu 13.04'
date: '2013-04-13T18:05:41+04:00'
uri: 'apps/ustanovka-smart-scopes-v-ubuntu-1304'
alias: 
  - 'apps/ustanovka-smart-scopes-v-ubuntu-1304.html'
tags: 'Smart Scopes,13.04'
source: ''
unixtime: 1365861941
visits: 6699
---
Пару месяцев назад разработчиками [был анонсирован](news/poisk-v-dash-cherez-udalennyy-server) проект превращения домашней вкладки главного меню (Dash) в мощную область поиска по бесчисленному множеству источников данных, которая должна позволить пользователям найти нужную информацию среди обширных и разрозненных материалов.

[![](img/2013/04/13/18-00/smart-scope-2-8644642929-o.jpg)](img/2013/04/13/18-00/smart-scope-2-8644642929-o.jpg)

Для этих целей был организован специальный репозиторий под названием «100 областей». На текущий момент, уже включающий несколько десятков источников данных, таких как Wikipedia, IMDb, сервисы информации о погоде, рецептах и т.д.

Те области, которые можно найти из PPA:

*   *Audacious, Clementine, Guayadeque, Musique, Gmusicbrowser* – дополнительные медиаплееры.
*   *Calculator* – математические операции.
*   *Chromium Bookmarks, Firefox Bookmarks* – закладки Chromium и Firefox.
*   *Colourlovers* – онлайн сервис, содержащий различные графические элементы, такие как палитры, цвета, текстуры и т.д.  
*   *Devhelp, Launchpad, GitHub* – для разработчиков.
*   *Deviantart* – широко известная социальная сеть художников.
*   *Evolution* – почта и календарь Evolution.
*   *Gallica* – репозиторий содержащий миллионы документов, сотни тысяч книг, картинок, рукописей, периодики, звуковых записей и карт.
*   *Gdrive*  – файлы с сервиса Google Drive.
*   *Google News* – новости с Google.
*   *[Gourmet](http://www.gourmet.com/)* – рецепты.
*   *IMDb* – известнейший ресурс, включающий информацию о рейтинге фильмов, новостях, трейлерах, актёрах и т.п.
*   *Manpages* – документация и помощь.
*   *Open Clip Art* – большая коллекция свободных клипартов.
*   *SoundCloud* – сообщество музыкантов и подкастеров.
*   *SSH* – сессии SSH.
*   *Texdoc* – контент с Texdoc.
*   *Tomboy* – заметки для Tomboy.
*   *Virtualbox* – виртуальные машины, созданные в Virtualbox.
*   *Yahoostock* – вывод информации о финансах.
*   *Yelp* – поиск услуг (ресторанов, парикмахерских и т.п.);
*   Zotero – удобный инструмент, позволяющий пользователям собирать и управлять доступом к интересным источникам данных.

Очевидно, что работа с таким большим числом областей (50, 70, 150 и более) привела бы к снижению производительности системы до нуля, поэтому, чтобы разгрузить пользовательский компьютер, было предложено определять нужные области сначала на удалённом сервере Canonical, а уже потом вести по ним поиск.

Эта новая технология получила название – “умная область” (Smart Scopes), потому что это будет не простая выборка из базы данных, а информация, полученная после обработки самообучающимся алгоритмом, который со временем будет стараться выдавать всё более и более точные результаты.  

## Как работает

В домашней линзе теперь справа можно будет наблюдать блок с фильтрами, такими же, какие используются для других вкладок, например, видео, музыки, приложений и т.д. Блок поделён на два раздела: категорий, задающих общий критерий поиска по источникам, и собственно самих источников – ограничивающих поиск по одному конкретному ресурсу.

[![](img/2013/04/13/18-00/smart-scope-1-8645741816-o.jpg)](img/2013/04/13/18-00/smart-scope-1-8645741816-o.jpg)

Если ввести слово «London» в поисковую строку – запрос отправится на сервер и выведет предпочтительные категории и источники, по которым уже будет произведена выборка интересующей информации. В случае, если представленные данные не находят требуемый материал, их также можно будет отсортировать вручную, снимая и добавляя новые пункты фильтрации.

[![](img/2013/04/13/18-00/smart-scope-3-8645741376-o.jpg)](img/2013/04/13/18-00/smart-scope-3-8645741376-o.jpg)

Для части выведенных результатов также можно будет просмотреть превью с картинкой и детальным описанием.

[![](img/2013/04/13/18-00/smart-scope-4-8644642383-o.jpg)](img/2013/04/13/18-00/smart-scope-4-8644642383-o.jpg)

## Установка Smart Scopes в Ubuntu 13.04

Изначально, эту характеристику планировали добавить в Ubuntu 13.04 по умолчанию, но в процессе тестирования выяснилось, что новый механизм поиска ещё очень сырой и не соответствуют стандартам качества предъявляемым к Ubuntu. Поэтому насладиться полноценной работой можно будет не раньше релиза Ubuntu 13.10.

Тем не менее те, кому не терпится, могут поставить уже сейчас, однако стоит помнить, что это всего лишь тестовая версия, не лишенная недостатков.

Установка доступна для Raring из официального тестового PPA:

```
sudo add-apt-repository ppa:ubuntu-unity/experimental-certified 
sudo apt-get update
sudo apt-get dist-upgrade
```

Удалить:

```
sudo apt-get install ppa-purge 
sudo ppa-purge ppa:ubuntu-unity/experimental-certified
```
