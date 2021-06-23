---
title: 'Меняем Splash Screen в Grub для Ubuntu 10.10'
date: '2011-01-22T01:06:41+03:00'
uri: 'articles/change-grub-splash-screen-ubuntu-10-10'
alias: 
  - 'articles/change-grub-splash-screen-ubuntu-10-10.html'
tags: 'Splash Screen,10.10,Ubuntu Linux,Grub'
source: ''
unixtime: 1295647601
visits: 8988
---
При каждом запуске компьютера, меню Grub представляет пользователю выбор операционных систем, выводится все это на темном фоне, которое можно заменить на картинку.

Cейчас и рассмотрим как можно установить Splash изображение в качестве фона для меню Grub.

Среди поддерживаемых форматов изображений .png, .jpeg(8-bit) и.tga, и картинка должна быть в RGB цветовом режиме.

Инсталляция, запускаем терминал (Ctrl + Alt + T), устанавливаем пакет splashimage package:

```
 sudo apt-get install grub2-splashimages 
```

Загружаем картинку в директорию **/usr/share/images/grub**, открываем под root файл grub **“/etc/default/grub”**

```
 sudo gedit /etc/default/grub 
```

и добавляем следующий код:

```
 GRUB_BACKGROUND=/usr/share/images/grub/uses_img.tga 
```

где **uses\_img.tga**, это используемая картинка, теперь обновляем информацию в grub.cfg:

```
 update-grub 
```

После перезагрузки системы можно будет увидеть изменения.
