---
title: 'Трансформируем Unity в стиле Ubuntu Touch'
date: '2013-03-14T22:58:59+04:00'
uri: 'articles/transformiruyem-unity-v-stile-ubuntu-touch'
alias: 
  - 'articles/transformiruyem-unity-v-stile-ubuntu-touch.html'
tags: 'Unity,Ubuntu Touch'
source: 'http://www.omgubuntu.co.uk/2013/03/ubuntu-touch-style-launcher-icons-for-the-ubuntu-desktop'
unixtime: 1363287539
visits: 7318
---
С начала этого года новый тачпад-интерфейс Ubuntu для телефонов и планшетов привлёк внимание многих энтузиастов и разработчиков, которые представили свои макеты, обои и приложения, выдержанные в стиле Ubuntu Touch.

[![](img/2013/03/14/22-00/unity-touch-2-8558168270-o.jpg)](img/2013/03/14/22-00/unity-touch-2-8558168270-o.jpg)

С недавно анонсированной [Unity Next](news/canonical-anonsirovala-mir-i-unity-next), предвещающей очередную переработку Unity, заточенную одновременно под десктопы и все остальные устройства. Мы получим новый единый интерфейс, который будет одинаково смотреться независимо от того, где будет установлена Ubuntu.

[![](img/2013/03/14/22-00/unity-touch-8558165350-o.jpg)](img/2013/03/14/22-00/unity-touch-8558165350-o.jpg)

Пользователь DeviantArt – Aerilius представил своё виденье нового дизайна, опубликовав набор иконок, трансформирующий стандартную тему Unity в стиле значков Ubuntu Touch.

Изменения можно будет заменить на панели запуска программ и при переключении окон (<kbd>Alt + Tab</kbd>).

## Как установить

Во-первых, скачиваем zip-архив по следующей ссылке:

[<button>Скачать иконки Unity Touch</button>](http://aerilius.deviantart.com/art/Ubuntu-Touch-Launcher-icons-358618366)

Теперь запускаем файловый менеджер с правами администратора, используя команду:

```
gksu nautilus /usr/share/unity
```

Нам откроется директория «/usr/share/unity», в ней замещаем папку «6» на ту, которая находится в архиве. Всё, перезапускаем сессию.

**Как можно заметить, работает только с Ubuntu 12.10 и выше.**

### Вернуть, как было

Выполняем команду в терминале:

```
sudo apt-get install --reinstall unity-common
```
