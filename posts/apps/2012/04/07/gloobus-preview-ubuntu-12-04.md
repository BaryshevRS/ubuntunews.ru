---
title: 'Gloobus Preview – шустрый вьювер с поддержкой Ubuntu 12.04'
date: '2012-04-07T23:08:24+04:00'
uri: 'apps/gloobus-preview-ubuntu-12-04'
alias: 
  - 'apps/gloobus-preview-ubuntu-12.04.html'
tags: 'Gloobus Preview'
source: 'http://www.webupd8.org/2012/04/gloobus-preview-update-brings-gtk3-and.html'
unixtime: 1333825704
visits: 8857
---
Gloobus Preview – шустрый вьювер для просмотра изображений, документов (pdf, odf, ods … ), файлов исходников, аудио (mp3, wav, ogg … ), видео (avi, ogg, mkv, flv … ), папок, архивов, шрифтов, текстовых файлов и много чего ещё.

[![](img/2012/04/07/23-00/gloobus-preview-6908317812-o.jpg)](img/2012/04/07/23-00/gloobus-preview-6908317812-o.jpg)

В новой версии Gloobus Preview была добавлена поддержка Ubuntu 12.04, запароленных файлов, формата WebM , а также внесены различные багофиксы.

Видео с демонстрацией работы:

 <iframe width="500" height="284" src="http://www.youtube.com/embed/CaU1L1Z75j8" frameborder="0" allowfullscreen=""></iframe>

## Установка Gloobus Preview в Ubuntu

Установить можно в Ubuntu 12.04 и 11.10 из официального PPA, используя команды ниже:

```
sudo add-apt-repository ppa:gloobus-dev/gloobus-preview
 sudo apt-get update
 sudo apt-get install gloobus-preview gloobus-sushi
```

Для поддержки некоторых документов (odf, ods и т. п.) потребуется поставить пакет unoconv:

```
sudo apt-get install unoconv
```

Запустить превью файла можно выделив его и нажав клавишу <kbd>пробел</kbd>.
