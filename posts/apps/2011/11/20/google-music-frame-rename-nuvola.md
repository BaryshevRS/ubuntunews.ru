---
title: 'Google Music Frame переименован в Nuvola и теперь поддерживает Grooveshark'
date: '2011-11-20T18:42:18+04:00'
uri: 'apps/google-music-frame-rename-nuvola'
alias: 
  - 'apps/google-music-frame-rename-nuvola.html'
tags: 'Google Music Frame,Nuvola,Grooveshark,Google Music'
source: 'http://www.webupd8.org/2011/11/google-music-frame-renamed-to-nuvola.html'
unixtime: 1321800138
visits: 3386
---
Google Music Frame – программа, которая использовалась для проигрывания музыки из сервиса [Google Music](http://music.google.com/), для пользователей Ubuntu, с реализацией поддержки интеграции с звуковым меню, уведомлениями и работой с мультимедийными клавишами.

Последний тестовый релиз Google Music Frame теперь также стал поддерживать ещё один музыкальный сервис Grooveshark, поэтому было принято решение сменить название у программы на Nuvola. Кроме того в будущем также планируется расширить количество поддерживаемых сервисов.

[![](img/2011/11/20/18-00/nuvola-6369433531-o.jpg)](img/2011/11/20/18-00/nuvola-6369433531-o.jpg)

Текущая реализация Grooveshark в приложении ещё очень сырая и не поддерживает все имеющиеся характеристики доступные для Google Music.

[![](img/2011/11/20/18-00/nuvola-1-6369434057-o.jpg)](img/2011/11/20/18-00/nuvola-1-6369434057-o.jpg)

Среди достоинств, повлиявших на включение Grooveshark в релиз, стоит отметить то, что для использование сервиса не требуется платная подписка (можно даже не создавать аккаунт), а также уже реализована поддержка: «меню звука» в GNOME Shell и Unity, уведомлений и мультимедийных клавишей.

## Установка

Grooveshark будет включен с релизом Nuvola 0.4, но если есть желание поставить уже сейчас, то можно воспользоваться тестовой сборкой из PPA, доступной для Ubuntu Lucid, Maverick, Natty, Oneiric и Precise:

```
 sudo add-apt-repository ppa:nuvola-player-builders/unstable
 sudo apt-get update
 sudo apt-get install google-music-frame
```

Как можно заметить пакет все ещё называется Google Music Frame, но вскоре всё будет поправлено.
