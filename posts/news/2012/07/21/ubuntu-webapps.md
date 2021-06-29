---
title: 'Ubuntu WebApps  – новая технология для Ubuntu 12.04 и 12.10'
date: '2012-07-21T12:46:56+04:00'
uri: 'news/ubuntu-webapps'
alias: 
  - 'news/ubuntu-webapps.html'
tags: 'WebApps,12.10'
source: 'http://www.webupd8.org/2012/07/install-new-ubuntu-webapps-technology.html'
unixtime: 1342860416
visits: 15614
---
**Ubuntu WebApps** – новая характеристика, которая будет включена в Ubuntu по умолчанию, начиная со следующего выпуска Ubuntu 12.10 Quantal Quetzal. Новая технология позволит сайтам, например, таким как Gmail, Grooveshark, Last.fm, Facebook, Google Docs и ещё многим другим тесно интегрироваться с десктоп компонентами Unity. Для них будет реализована поддержка HUD, уведомлений, меню сообщений и звука, контекстное меню, переключение через горячие клавиши <kbd>Alt + Tab</kbd> и т. д.

## Текущие возможности WebApps

*   Интеграция с музыкальными сервисами в меню управления звуком (Grooveshark, Last.fm).

[![](img/2012/07/21/12-00/webapps-7614196196-o.jpg)](img/2012/07/21/12-00/webapps-7614196196-o.jpg)

*   Из меню уведомлений можно просмотреть число непрочитанных сообщений на почте и из аккаунтов социальных сетей (Facebook, Gmail, Google+).

[![](img/2012/07/21/12-00/webapps-3-7614196600-o.jpg)](img/2012/07/21/12-00/webapps-3-7614196600-o.jpg)

*   Всплывающие сообщения notify-OSD (BBC News).
*   В поиске Dash можно будет найти документы из Google Drive и фотографии из фотохостинга Flickr.

[![](img/2012/07/21/12-00/webapps-4-7614197536-o.jpg)](img/2012/07/21/12-00/webapps-4-7614197536-o.jpg)

*   Доступ через HUD (Reddit).

[![](img/2012/07/21/12-00/webapps-7-7614195978-o.jpg)](img/2012/07/21/12-00/webapps-7-7614195978-o.jpg)

Все подключенные сайты можно будет найти через поиск в Dash, а для некоторых из них на панели Unity будет выводиться счётчик с числом непрочитанных сообщений.

[![](img/2012/07/21/12-00/webapps-5-7614196846-o.jpg)](img/2012/07/21/12-00/webapps-5-7614196846-o.jpg)

**Видео с демонстрацией работы:**

<iframe src="http://www.youtube.com/embed/x7vF-AB7SF4" frameborder="0" width="500" height="281"></iframe>

## Поддерживаемые сервисы

### Новостные сайты

*   BBC News (bbc.co.uk/news)
*   CNN News (edition.cnn.com)
*   Yandex News (news.yandex.ru)
*   Google Reader (google.com/reader)
*   Reddit (reddit.com)
*   Yahoo! News (news.yahoo.com/)
*   Google News (news.google.com)

### Музыка

*   Libre.fm (libre.fm)
*   Last.fm (lastfm.com)
*   Hulu Player (hulu.com/watch)
*   Yandex Music (music.yandex.ru)
*   Pandora (pandora.com)
*   Grooveshark (grooveshark.com)

### Почта

*   GMail (mail.google.com)
*   Yahoo! Mail (mail.yahoo.com)
*   Yandex Mail (mail.yandex.ru)
*   QQ Mail (mail.qq.com)
*   Windows Live Mail (login.live.com)
*   Mail RU (mail.ru)

### Социальные сети

*   VK.com (vk.com)
*   Facebook (facebook.com)
*   LinkedIn (linkedin.com)
*   YouTube (youtube.com)
*   Tumblr (tumblr.com)
*   Twitter (twitter.com)
*   Google+ (plus.google.com)

### Игры

*   Cut the Rope (cuttherope.ie)
*   Angry Birds (chrome.angrybirds.com)
*   Lord of Ultima (lordofultima.com)
*   Command and Conquer: Tiberium Alliances (alliances.commandandconquer.com)

### Офисные приложения

*   Google Docs (docs.google.com)
*   Google Calendar (google.com/calendar)

### Прочее

*   Launchpad (launchpad.net)
*   Amazon (amazon.com)
*   Amazon Cloud reader (read.amazon.com)
*   Subway IRC
*   WordPress.com (wordpress.com)

## Подключение

Выбор сайтов для интеграции опционален. На всех поддерживаемых сервисах будет выводиться всплывающее сообщение, в котором можно будет согласиться или отказаться от использования.

[![](img/2012/07/21/12-00/webapps-2-7614196700-o.jpg)](img/2012/07/21/12-00/webapps-2-7614196700-o.jpg)

Пока в целом интеграция реализована для около 30 популярных ресурсов, но как можно ожидать их число со временем только возрастёт. Кроме того, WebApps имеет открытое API через который можно подключить любой другой сайт.

Такие сервисы, как Facebook, Google (включая Docs, Gmail, Google+, Picasa и YouTube), Flickr, Twitter, Foursquare и Identi.ca можно будет найти из меню «Online Accounts» в параметрах системы.

[![](img/2012/07/21/12-00/webapps-1-7614196360-o.jpg)](img/2012/07/21/12-00/webapps-1-7614196360-o.jpg)

Среди поддерживаемых браузеров доступны **только Firefox и Chromium**, а реализацию для остальных нужно пока подождать.

## Установка Ubuntu WebApps в Ubuntu 12.10 или 12.04

Как уже упоминалось, эта технология будет доступна по умолчанию в Ubuntu 12.10 через обновление в ближайшие несколько недель, а пока её можно установить из специально подготовленного PPA, как для 12.10, так и в 12.04:

```
sudo add-apt-repository ppa:webapps/preview
sudo apt-get update
sudo apt-get install unity-webapps-preview
```

Из PPA также установятся две новые линзы для документов Google и для фотографий (с областью Flickr).

**Стоит отметить, что текущая версия больше предназначена для тестирования, чем для повседневной работы, поэтому ждать от WebApps стабильности и полноценной поддержки всех описанных выше характеристик пока не стоит.**

### Удаление WebApps

Выполните в терминале следующие команды и перезайдите в сессию.

```
sudo apt-get install ppa-purge
sudo ppa-purge ppa:webapps/preview
```

```
sudo apt-get remove gnome-control-center-signon signond signon-keyring-extension signon-plugin-oauth2 signon-ui libunity-webapps-chromium unity-chromium-extension unity-lens-gdocs unity-lens-photo unity-scope-flickr xul-ext-webaccounts xul-ext-unity xul-ext-websites-integration
```
