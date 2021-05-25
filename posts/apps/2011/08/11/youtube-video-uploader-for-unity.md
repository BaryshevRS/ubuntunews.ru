---
title: 'Плагин загрузки видео на YouTube в Unity'
date: '2011-08-11T22:48:52+04:00'
uri: 'apps/youtube-video-uploader-for-unity'
alias: 
  - 'apps/youtube-video-uploader-for-unity.html'
tags: 'YouTube,Unity'
source: 'http://www.omgubuntu.co.uk/2011/08/youtube-video-drag-drop-uploader-unity/'
unixtime: 1313088532
visits: 3630
---
Появился новый плагин для панели Unity позволяющий загружать видео на YouTube простым перетаскиванием файла на значок.

[![](img/2011/08/11/22-00/unity-youtube-6033120024-o.jpg)](img/2011/08/11/22-00/unity-youtube-6033120024-o.jpg)

Автором является все тот же разработчик (Tom LeJeune), кто сделал плагин для работы с [Google+ / загрузку файлов в Picasa](apps/google-unity-picture-picasa-uploader).

## Установка

Сначала нужно установить утилиту [GoogleCL](apt://googlecl), необходимую для работы с cервисами Google из командной строки.

Скачиваем сам апплет и распаковываем в домашний каталог.

Открываем терминал и выполняем команду:

```
google youtube list 
```

Теперь вводим свой логин на YouTube, открываем ссылку в браузере, где подтверждаем авторизацию и нажимаем <kbd>Enter</kbd>

Возвращаемся в распакованную папку, где в файле *«YouTube.desktop»* меняем имя пользователя на свое в следующих строках:

```
Icon=/home/ВАШ_ПРОФИЛЬ/youtube/youtube.png 
```

```
Exec="/home/ВАШ_ПРОФИЛЬ/youtube/youtube" %u 
```

Где **ВАШ\_ПРОФИЛЬ** меняем на свой.

Заключительной чертой перетаскиваем файл *«YouTube»* на панель Unity.
