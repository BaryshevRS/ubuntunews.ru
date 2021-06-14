---
title: '10+ узкоспециализированных линз для Ubuntu 12.10 и 12.04'
date: '2012-11-26T16:19:29+04:00'
uri: 'apps/10-uzkospetsializirovannykh-linz-dlya-ubuntu-12-10-i-12-04'
alias: 
  - 'apps/10-uzkospetsializirovannykh-linz-dlya-ubuntu-12-10-i-12-04.html'
tags: 'Области,Линзы'
source: ''
unixtime: 1353932369
visits: 12245
---
Рассмотрим с десяток узкоспециализированных линз для Ubuntu 12.10 и 12.04, появившихся в последнее время или ещё не описанных на сайте.

**Линзы** – это вкладки главного меню (Dash), позволяющие искать определённый контент, например: видео, аудио, сообщения из Twitter или Facebook и т.п., берущиеся из различных областей расположенных, как локально, так и в различных онлайн источниках.

### Unity Contacts

Предназначение линзы Unity Contacts состоит в поиске по базе контактов Google, получить доступ, к которым можно через сервис Gmail, нажав на его логотип.

[![](img/2012/11/26/16-00/unity-lens-7-8219742249-o.jpg)](img/2012/11/26/16-00/unity-lens-7-8219742249-o.jpg)

Также в Ubuntu 12.10 по умолчанию был интегрирован специальный инструмент (gnome-contacts), позволяющий работать с этим сервисом напрямую. Для этого надо в сетевых учётных записях завести аккаунт для Google, а затем в программе контактов GNOME сменить адресную книгу (Контакты → Изменить адресную книгу → Google).

Кроме того, в новой версии 0.0.2 реализован механизм превью, выводящий подробную информацию о контакте, включая адрес электронной почты, телефон и т.п.

Установить можно в 12.04 и 12.10:

```
sudo add-apt-repository ppa:atareao/lenses 
sudo apt-get update 
sudo apt-get install lens-contacts scope-contacts-google
```

### Amazon и Ubuntu One Music Store

Представлена альтернативная, отдельная линза поиска по интернет магазину Amazon и Ubuntu One Music Store. Включающая поддержку фильтров по странам и механизм превью, при активации которого можно будут увидеть описание, цену и кнопку-ссылку на магазин.

[![](img/2012/11/26/16-00/unity-lens-2-8219742873-o.jpg)](img/2012/11/26/16-00/unity-lens-2-8219742873-o.jpg)

[![](img/2012/11/26/16-00/unity-lens-14-8220822754-o.jpg)](img/2012/11/26/16-00/unity-lens-14-8220822754-o.jpg)

Установить можно в Precise и Quantal:

```
sudo add-apt-repository ppa:scopes-packagers/ppa 
sudo apt-get update 
sudo apt-get install unity-lens-shopping-alternate
```

### Области для музыкальной вкладки

По умолчанию вкладка аудиозаписей ищет только в области для Rhythmbox, но теперь список поддерживаемых плееров можно расширить и для Audacious, Clementine, Gmusicbrowser, Guayadeque и Musique.

[![](img/2012/11/26/16-00/unity-lens-8220902010-o.jpg)](img/2012/11/26/16-00/unity-lens-8220902010-o.jpg)

Установить можно в Quantal, используя команды ниже:

```
sudo add-apt-repository ppa:markjtully/ppa 
sudo apt-get update 
sudo apt-get install unity-scope-clementine unity-scope-guayadeque unity-scope-gmusicbrowser unity-scope-audacious unity-scope-musique
```

## Для игр

Рассмотрим три вкладки, осуществляющие поиск по Wiki таких игр, как Minecraft, Elder Scrolls и RuneScape.

### Minecraft

Отличная линза, которая будет не заменимым инструментом для поиска инструкций по созданию различных игровых элементов. Главным её достоинством является превью, выводящие описание всех компонентов необходимых для крафтинга.

[![](img/2012/11/26/16-00/unity-lens-11-8220823168-o.jpg)](img/2012/11/26/16-00/unity-lens-11-8220823168-o.jpg)

[![](img/2012/11/26/16-00/unity-lens-13-8220822880-o.jpg)](img/2012/11/26/16-00/unity-lens-13-8220822880-o.jpg)

Пакет доступен в 12.10:

```
sudo add-apt-repository ppa:scopes-packagers/ppa 
sudo apt-get update 
sudo apt-get install unity-lens-minecraft
```

### Elder Scrolls's Wikia

Осуществляет поиск по Wiki вселенной Elder Scrolls, включая Arena, Daggerfall, Morrowind, Oblivion и Skyrim.

[![](img/2012/11/26/16-00/unity-lens-12-8219741687-o.jpg)](img/2012/11/26/16-00/unity-lens-12-8219741687-o.jpg)

Установить можно в 12.04 и 12.10 с помощью команд ниже:

```
sudo add-apt-repository ppa:kroq-gar78/ppa 
sudo apt-get update 
sudo apt-get install unity-lens-elderscrollswikia
```

### RuneScape Wikia

**RuneScape** – это браузерная MMORPG, содержащая все атрибуты классических ролевых игр: магия, ремесла, исследования подземелий и т.д. Представленная линза поможет облегчить путь поиска по игровым элементам этого мира.

[![](img/2012/11/26/16-00/unity-lens-4-8220823972-o.jpg)](img/2012/11/26/16-00/unity-lens-4-8220823972-o.jpg)

Установка доступна только для 12.04:

```
sudo apt-add-repository ppa:ryanmichaelmcclure/ppa 
sudo apt-get update 
sudo apt-get install unity-lens-runescapewikia
```

## Для разработчиков

Представленные ниже линзы будут полезны в основном разработчикам, поэтому кому не интересно можете его пропустить.

### GitHub

Линза для сервиса GitHub, включающая поиск по свыше двух с половиной миллионов разработчиков и свыше четырёх миллионов репозиториев.

[![](img/2012/11/26/16-00/unity-lens-6-8219742383-o.jpg)](img/2012/11/26/16-00/unity-lens-6-8219742383-o.jpg)

Установка доступна из центра приложений.

### RubyGems

**RubyGems** – пакетный менеджер для языка Ruby, который заключает все программы и библиотеки в специальный пакет, который называется «gems».

[![](img/2012/11/26/16-00/unity-lens-9-8220823424-o.jpg)](img/2012/11/26/16-00/unity-lens-9-8220823424-o.jpg)

Установка линзы поиска по RubyGems доступна во все версии, начиная с Precise.

```
sudo add-apt-repository ppa:useful-lenses-team/daily 
sudo apt-get update 
sudo apt-get install unity-lens-rubygems
```

### PyPi

Линза поиска по каталогу пакетов, написанных на языке программирования Python. На текущий момент, содержит около 25 тысяч проектов.

![](img/2012/11/26/16-00/unity-lens-8-8219742141-o.jpg)

Установить можно в 12.04 и 12.10:

```
sudo add-apt-repository ppa:scopes-packagers/ppa 
sudo apt-get update 
sudo apt-get install unity-lens-pypi
```

### Graphic Design

Линза, ориентированная на дизайнеров, включающая в себя ряд областей, таких как Dribbble, Iconfinder, Colourlovers и Deviantart. Вся информация разбита на четыре категории: кисти, палитры, иконки и дизайн.

[![](img/2012/11/26/16-00/unity-lens-3-8220824084-o.jpg)](img/2012/11/26/16-00/unity-lens-3-8220824084-o.jpg)

При нажатии на выбранную палитру она автоматически импортируется в редакторы GIMP и Inkscape, откуда их потом можно будет использовать.

Линза, к сожалению, не портирована на 12.10 и доступна только для установки в 12.04:

```
sudo add-apt-repository ppa:scopes-packagers/ppa sudo apt-get update sudo apt-get install unity-lens-graphicdesign unity-scope-colourlovers unity-scope-deviantart unity-scope-dribbble unity-scope-iconfinder
```

## Прочее

### Unity VM lens

Вкладка, предоставляющая удобный доступ к виртуальным машинам, созданным в VirtualBox.

[![](img/2012/11/26/16-00/unity-lens-1-8220824280-o.jpg)](img/2012/11/26/16-00/unity-lens-1-8220824280-o.jpg)

Установить можно в Ubuntu 12.10 и 12.04:

```
sudo add-apt-repository ppa:scopes-packagers/ppa sudo apt-get update sudo apt-get install unity-lens-vm
```

### VPN

VPN (виртуальная частная сеть) – технология, позволяющая безопасно соединить свою систему с удалённой компьютерной сетью и получить доступ к располагающимся в ней ресурсам (принтеры, базы данных и т. д.)

[![](img/2012/11/26/16-00/unity-lens-5-8220823876-o.jpg)](img/2012/11/26/16-00/unity-lens-5-8220823876-o.jpg)

Линза позволит автоматически сделать соединение с выбранным из списка VPN, который был предварительно создан в настройках сети.

Установить можно только в 12.04:

```
sudo add-apt-repository ppa:themiwi/unity-lens-vpn sudo apt-get update sudo apt-get install unity-lens-vpn
```

### Unity Help lens

Осуществляет поиск по сайтам вопросов и ответов askubuntu.com, ask.libreoffice.org и support.mozilla.org, а также по системным руководствам (Man).

[![](img/2012/11/26/16-00/unity-lens-10-8220823280-o.jpg)](img/2012/11/26/16-00/unity-lens-10-8220823280-o.jpg)

Установка доступна из официального PPA в Precise и Quantal.

```
sudo add-apt-repository ppa:askubuntu-tools/ppa sudo apt-get update sudo apt-get install unity-lens-help unity-scope-asklibreoffice unity-scope-askubuntu unity-scope-manpages unity-scope-sumo
```

Для корректной работы описанных линз рекомендуется перегрузиться.
