---
title: 'Установка Ubuntu TV из PPA'
date: '2012-01-11T21:42:45+04:00'
uri: 'articles/install-ubuntu-tv-ppa'
alias: 
  - 'articles/install-ubuntu-tv-ppa.html'
tags: 'Телевизоры,Ubuntu TV'
source: 'http://www.webupd8.org/2012/01/how-to-install-ubuntu-tv-from-ppa.html'
unixtime: 1326303765
visits: 17372
---
Рассмотрим процесс инсталляции Ubuntu TV из PPA на Ubuntu 11.10. Также можно воспользоваться инструкцией по ручной сборке, выложенной на [Ubuntu wiki](https://wiki.ubuntu.com/UbuntuTV/Contributing), которая является более правильным способом установки и не замещает собой рабочий стол Unity 2D.

Сборка из PPA является более простым способом, но заменяет собой Unity 2D, а также будет невозможно запустить его из меню выбора рабочих столов при загрузке системы. Кроме того Ubuntu TV на начальной стадии разработки и содержит минимум [заявленных характеристик](news/ubuntu-tv-video).

Скриншот Ubuntu TV на нетбуке (не всё уместилось), так как оптимизировано под разрешение 1080р:

[![](img/2012/01/11/21-00/ubuntu-tv-netbook-6679793973-o.jpg)](img/2012/01/11/21-00/ubuntu-tv-netbook-6679793973-o.jpg)

Стоит отметить, что ни в коем случае **не стоит ставить Ubuntu TV на рабочий компьютер**. Установку лучше производить на запасном компьютере или на виртуальную машину (при инсталляции на VirtualBox запуск не удался).

## Установка Ubuntu TV в Ubuntu 11.10 Oneiric Ocelot

1\. Надо удалить линзу Video Lens используемой для области YouTube, чтобы не было конфликтов.

```
sudo apt-get remove lens-video
```

2\. Устанавливаем Ubuntu TV используя тестовый PPA:

```
 sudo add-apt-repository ppa:nilarimogard/test3
 sudo apt-get update
 sudo apt-get dist-upgrade
 sudo apt-get install unity-lens-video
```

3\. Создаем следующие папки в домашнем каталоге для имеющихся видеороликов (помещать их самих необязательно):

*   ~/Videos/unity/local/featured
*   ~/Videos/unity/local/rented
*   ~/Videos/unity/local/purchased
*   ~/Videos/unity/local/recorded

4.Теперь создаём обложки для роликов:

```
/usr/lib/unity-lens-video/create_tmb.sh ~/Videos/
```

5\. Установливаем режим «tv»:

```
gsettings set com.canonical.Unity2d form-factor tv
```

6\. Запускаем из используемого рабочего стола:

Если уже работаете под Unity 2D:

```
killall unity-2d-{panel,places,launcher,spread} && killall unity-2d-{panel,places,launcher,spread}
```

И команда для Unity 3D / GNOME Shell:

```
metacity --replace &
```

Если выдаёт ошибку:

<samp>Загружаемый модуль тем не найден в module_path: «pixmap»</samp>

То надо поставить следующий пакет:

```
apt-get install gtk2-engines-pixbuf
```

Сам запуск Ubuntu TV выполняется следующей командой:

```
unity-2d-shell -opengl
```

И нажать клавишу <kbd>F1</kbd>.

Официальные обои:

[![](img/2012/01/11/21-00/wallpaper-ubuntu-tv-6679790217-o.jpg)](img/2012/01/11/21-00/wallpaper-ubuntu-tv-6679790217-o.jpg)
