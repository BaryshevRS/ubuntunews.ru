---
title: '5 отличных темных и светлых тем для Ubuntu 12.10'
date: '2012-12-15T23:06:00+04:00'
uri: 'apps/5-otlichnykh-temnykh-i-svetlykh-tem-dlya-ubuntu-12-10'
alias: 
  - 'apps/5-otlichnykh-temnykh-i-svetlykh-tem-dlya-ubuntu-12-10.html'
tags: 'Тема,Awoken'
source: 'http://www.webupd8.org/2012/12/zukitwo-adwaita-cupertino-themes-ported.html'
unixtime: 1355598360
visits: 14096
---
Рассмотрим пять превосходных светлых и темных тем для установки в Ubuntu 12.10.

## Светлые

### Zukitwo

**Zukitwo** – одна из самых популярных наборов тем, которая была окончательно портирована для GTK 3.6.

[![](img/2012/12/15/23-00/zukitwo-8275652292-o.jpg)](img/2012/12/15/23-00/zukitwo-8275652292-o.jpg)

Установить Zukitwo GTK2/3/GNOME Shell/Xfwm можно в Ubuntu 12.10 или 13.04, используя команды ниже:

```
sudo add-apt-repository ppa:webupd8team/themes sudo apt-get update sudo apt-get install zukitwo-theme
```

### Gnome Cupertino

**Gnome Cupertino** – ранее известная, как Adwaita Cupertino, содержит GTK2/3 темы стилизованные под Mac OSX Snow Leopard и Lion, адаптированные под GNOME Shell и Unity.

[![](img/2012/12/15/23-00/gnome-cupertino-8275652806-o.jpg)](img/2012/12/15/23-00/gnome-cupertino-8275652806-o.jpg)

Установить можно в Quantal и Raring:

```
sudo add-apt-repository ppa:webupd8team/themes sudo apt-get update sudo apt-get install gnome-cupertino-gtk-theme
```

## Тёмные

### MediterraneanNight

Темная тема GTK 3.6 представленная в трех вариациях: MediterraneanDark, MediterraneanLight и MediterraneanNight.

[![](img/2012/12/15/23-00/mediterranean-8274588495-o.jpg)](img/2012/12/15/23-00/mediterranean-8274588495-o.jpg)

[![](img/2012/12/15/23-00/mediterranean-3-8275652560-o.jpg)](img/2012/12/15/23-00/mediterranean-3-8275652560-o.jpg)

[![](img/2012/12/15/23-00/mediterranean-2-8275652682-o.jpg)](img/2012/12/15/23-00/mediterranean-2-8275652682-o.jpg)

Инсталляция доступна для Ubuntu 13.04, 12.10 и 12.04:

```
sudo add-apt-repository ppa:webupd8team/themes sudo apt-get update sudo apt-get install mediterraneannight-gtk-theme
```

Для настройки можно использовать специальную утилиту:

```
sudo mediterranean-config
```

### DeLorean Dark

Прекрасная темная тема доступная для GTK 3.6 и GTK2, включая такие рабочие окружения, как Unity, Cinnamon, Xfce, Openbox и т. п.

[![](img/2012/12/15/23-00/delorean-dark-2-8274588989-o.jpg)](img/2012/12/15/23-00/delorean-dark-2-8274588989-o.jpg)

Установка в Quantal:

```
sudo add-apt-repository ppa:killhellokitty/themes.ppa sudo apt-get update sudo apt-get install delorean-dark-theme
```

В GTK 3.4 / Ubuntu 12.04 для инсталляции следует использовать команду ниже:

```
sudo apt-get install delorean-dark
```

### Boje

Ещё отличная темная тема, поставить которую можно во все версии Ubuntu, начиная с 11.10.

[![](img/2012/12/15/23-00/boje-8275653024-o.jpg)](img/2012/12/15/23-00/boje-8275653024-o.jpg)

[![](img/2012/12/15/23-00/boje-2-8275653142-o.jpg)](img/2012/12/15/23-00/boje-2-8275653142-o.jpg)

```
sudo add-apt-repository ppa:upubuntu-com/gtk3  sudo apt-get update  sudo apt-get install boje-theme
```

## Установка Awoken Icons 2.4 в Ubuntu 12.10

Монохромные иконки, используемые совместно с темами выше называются Awoken, установить их можно из PPA ниже:

```
sudo add-apt-repository ppa:noobslab/icons sudo apt-get update sudo apt-get install awoken-icon-theme
```

Для дистрибутивов младше 12.10, Awoken можно поставить, воспользовавшись [официальным PPA](apps/home-4-fancy-icon-themes).

Темы можно выбрать с помощью любого из твикеров, например: GNOME Tweak Tool, Ubuntu Tweak или [Unsettings](apps/tweak-unity-with-unsettings-008).
