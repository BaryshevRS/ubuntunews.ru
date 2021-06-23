---
title: 'Подборка апплетов индикаторов для Ubuntu'
date: '2011-01-10T02:32:15+03:00'
uri: 'apps/indicator-applet-ubuntu'
alias: 
  - 'apps/indicator-applet-ubuntu.html'
tags: 'indicator-applet'
source: 'http://maketecheasier.com/15-useful-appindicator-applets-for-ubuntu/2011/01/07'
unixtime: 1294615935
visits: 28824
---
Индикаторы приложений (indicator-applet) были включены в Ubuntu в качестве замены стандартных апплетов Gnome. Они представляют из себя небольшие апплеты для отображения информации из различных приложений, располагаясь последовательно на панели, также могут использоваться для доступа и настройки программ без необходимости их запуска.

Рассмотрим ряд индикаторов приложений недоступных в репозитории Ubuntu, ставить их все необязательно, но возможно некоторые из них окажутся полезными:

### 1.Indicator-DesktopNova

[DesktopNova](http://sites.google.com/site/haliner/desktopnova) будет полезен тем кто хочет без особых усилий сменить обои на рабочем столе, апплет позволяет менять их прямо из системного трея.

![Indicator-DesktopNova](img/2011/01/10/02-00/oboi.jpg)  
  

```
sudo add-apt-repository ppa:michael-astrapi/ppa sudo apt-get update sudo apt-get install desktopnova indicator-desktopnova
```

### 2\. Indicator-VirtualBox

Позволяет запускать виртуальную машину без открытия окна VirtualBox VM.

![Indicator-VirtualBox](img/2011/01/10/02-00/vm.jpg)  
  

```
sudo add-apt-repository ppa:michael-astrapi/ppasudo apt-get updatesudo apt-get install indicator-virtualbox
```

### 3\. Indicator-Dropbox

В облачном хранилище данных [Dropbox](http://maketecheasier.com/upgrade-dropbox-to-version-1-0-in-ubuntu/2010/12/19) версии 1.0, в системном трее можно увидеть удобный апплет запуска и настройки Dropbox.

![Indicator-Dropbox](img/2011/01/10/02-00/drop.jpg)  
  

### 4\. Indicator-cpufreq

С помошью Indicator-cpufreq можно быстро сменить частоту процессора. Апплет будет полезен пользователям нетбуков, позволяя дольше сохранять заряд батарей, переводя процессор в режим энергосбережения.

![Indicator-cpufreq](img/2011/01/10/02-00/cpu.jpg)

```
sudo add-apt-repository ppa:artfwo/ppasudo apt-get updatesudo apt-get install indicator-cpufreq
```

### 5\. Pastie

[Pastie](https://github.com/fmoralesc/pastie/) простой менежер буфера обмена с поддержкой апплета.

![Pastie](img/2011/01/10/02-00/past.jpg)  
  

```
sudo add-apt-repository ppa:hel-sheep/pastiesudo apt-get updatesudo apt-get install pastie
```

### 6\. Indicator-workspace

Позволяет быстро сменить рабочее место, через удобный апплет на системном трее, в последней версии реализована [поддержка Unity](apps/adjust-number-workspaces-in-unity-with-indicator-workspaces).

![Indicator-workspace](img/2011/01/10/02-00/work.jpg)  
  

```
sudo add-apt-repository ppa:geod/ppa-geodsudo apt-get updatesudo apt-get install indicator-workspaces
```

### 7\. Indicator-keylock

У некоторые лаптопов и нетбуков отсутствуют клавиши NUM lock и Screen lock, как раз им и не только, будет полезен этот апплет, включающий нужные клавиши; NUM lock, Screen lock или CAPS lock.

![Indicator-keylock](img/2011/01/10/02-00/key.jpg)  
  

```
sudo add-apt-repository ppa:tsbarnes/indicator-keylocksudo apt-get updatesudo apt-get install indicator-keylock
```

### 8\. UbuntuOne Indicator

UbuntuOne indicator-applet позволяет отслеживать информацию о файлах синхронизируясь с аккаунтом UbuntuOne.

![UbuntuOne Indicator](img/2011/01/10/02-00/one.jpg)  
  

```
sudo add-apt-repository ppa:rye/ubuntuone-extrassudo apt-get updatesudo apt-get install ubuntuone-indicator
```

### 9\. Lookit

Lookit удобный апплет для быстрого создания скриншотов выделенной области экрана, позволяет загружать через протоколы FTP, SSH и на фотохостинг Imgur

![Lookit](img/2011/01/10/02-00/look.jpg)  
  

```
sudo add-apt-repository ppa:lookit/ppasudo apt-get updatesudo apt-get install lookit
```

После инсталляции Alt + F2 для запуска.

### 10\. Compiz-indicator

Позволяет получить удобный доступ к настройкам оконного менеджера Compiz, прямо из системного трея. Апплет недоступен в PPA, для его инсталляции нужно [скачать файл](http://gnome-look.org/content/show.php?content=132352), распаковать в домашнию директорию, после чего появится папка compiz-indicator, и ввести в терминале команды:

![Compiz-indicator](img/2011/01/10/02-00/compiz.jpg)  
  

```
cd compiz-indicatorchmod +x install.sh./install.sh
```

### 11\. USB Safe Removal application indicator

Апплет для быстрого и безопасного извлечения флешек и прочих внешних USB устройств, позволяющий отказаться для этих целей от использования командной строки и файлового менеджера Nautilus.

![USB Safe Removal application indicator](img/2011/01/10/02-00/indusb-2.jpg)  
  

DEB пакет для инсталляции качать отсюда.

### 12\. Touchpad Indicator

Иногда потребность в тачпаде отпадает и что бы он не мешал и предназначен этот апплет, включающий и выключающий тачпад по надобности.

![Touchpad Indicator](img/2011/01/10/02-00/tach.jpg)  
  

Поддержка только для Ubuntu Maverick

```
sudo add-apt-repository ppa:atareao/atareaosudo apt-get updatesudo apt-get install touchpad-indicator
```

### 13\. My Weather Indicator

Апплет предназначенный для отслеживания изменения погоды.

![My Weather Indicator](img/2011/01/10/02-00/pogoda-a.jpg) ![My Weather Indicator](img/2011/01/10/02-00/my-weather-indicator-003.jpg)  
  

Поддержка также только для Ubuntu Maverick

```
sudo add-apt-repository ppa:atareao/atareaosudo apt-get updatesudo apt-get install my-weather-indicator
```

### 14\. Google Reader Indicator

[Индикатор](http://twitter.com/atareao) Google Reader, выводит заголовки статей со ссылками на источник.

![Google Reader Indicator](img/2011/01/10/02-00/read.jpg)  
  

Доступен для Ubuntu Maverick

```
sudo add-apt-repository ppa:atareao/atareaosudo apt-get updatesudo apt-get install google-reader-indicator
```

### 15\. Indicator-sysmonitor

Индикатор показывает загруженность процессора и процент использования оперативной памяти.

```
sudo add-apt-repository ppa:alexeftimie/ppa sudo apt-get update sudo apt-get install indicator-sysmonitor
```

### 16\. Различный апплеты для медиа проигрывателей

По умолчанию в [Ubuntu Maverick](news/stal-dostupen-ubuntu-10-10) реализована интеграция с проигрывателем **Rhythmbox**, в индикаторе звука, рассмотрим и другие плееры.

**Banshee:** Инсталлируем banshee-community-extensions и активируем аплет индикатор Banshee из списка плагинов. Правка > Параметры > Расширения

**Exaile:** Скачать индикатор Exaile можно [отсюда](http://github.com/sunng87/Exaile-Soundmenu-Indicator). Распаковываем и помещаем в директорию “/HOME/.local/share/exaile/plugins”. Открываем Exaile, ищем в меню “Правка > Настройки > Оформления” и активируем (Отображать иконку в системном трее).

**Clementine:** В последней версии проигрывателя реализована поддержка апплета.

**XNoise:** Инсталлируем xnoise-plugins-core и активируем плагин апплета.
