---
title: 'Новые версии тем Elementary и Orion'
date: '2012-04-07T21:07:25+04:00'
uri: 'apps/themes-elementary-orion'
alias: 
  - 'apps/themes-elementary-orion.html'
tags: 'Elementary,Orion,Тема'
source: 'http://www.webupd8.org/2012/04/elementary-gtk-theme-30-released.html'
unixtime: 1333818445
visits: 10050
---
**Elementary** – одна из лучших GTK тем была обновлена до третьей версии.

[![](img/2012/04/07/21-00/elementary-gtk-30-theme-6907989122-o.jpg)](img/2012/04/07/21-00/elementary-gtk-30-theme-6907989122-o.jpg)

### Что нового:

*   Использование GTK3, но пока без поддержки темной версии
*   Переход на использование движка Unico GTK3
*   Поддержка Granite, используемого для многих приложений в дистрибутиве Elementary OS Luna
*   Удалены стили для GTK2 приложений
*   Кнопка максимизации окна была заменена на две взаимно обратные стрелки, вместо используемого ранее значка «+».

[![](img/2012/04/07/21-00/elementary-1-6907950442-o.jpg)](img/2012/04/07/21-00/elementary-1-6907950442-o.jpg)

Тема ориентирована на использование под сессией Pantheon (десктоп окружение Elementary OS) и к сожалению не оптимизирована для работы в Unity и GNOME Shell, так что её стиль оформления может выглядеть немного иначе.

**В Pantheon:**

**[![](img/2012/04/07/21-00/elementary-gtk-theme-2-7054079457-o.jpg)](img/2012/04/07/21-00/elementary-gtk-theme-2-7054079457-o.jpg)  
**

**В Unity и GNOME Shell:**

**[![](img/2012/04/07/21-00/elementary-7048892337-o.jpg)](img/2012/04/07/21-00/elementary-7048892337-o.jpg)  
**

Кроме того, тема подготовлена только под GTK3 (3.4) и поэтому не будет работать под Ubuntu Oneiric.

## Установка темы Elementary

Скачать тему можно отсюда: [launchpad.net/egtk/](https://launchpad.net/egtk/+download)

Установить можно распаковав скаченный архив в папку «.themes» в домашней директории (если нет то создать). Папка скрытая, так что для её отображения придётся нажать <kbd>CTRL + H</kbd>.

Также можно поставить тему иконок Elementary из PPA:

```
 sudo add-apt-repository ppa:elementary-os/testing
 sudo apt-get update
 sudo apt-get install elementary-icon-theme
```

И установить воспользовавшись одним из многочисленных твикеров, например: [MyUnity](apt://myunity), [Ubuntu Tweak](apps/ubuntu-tweak-0-6-0-released) или [GNOME Tweak Tool](apt://gnome-tweak-tool).

## Orion

**Orion** – стильная светлая GTK3 тема, которая теперь стала доступна для работы под GNOME 3.4 (используемый в Ubuntu 12.04 Precise Pangolin) и совместима с последней версией движка Unico GTK. Ещё одним нововведением стало добавление поддержки Openbox.

[![](img/2012/04/07/21-00/orion-2-7048892041-o.jpg)](img/2012/04/07/21-00/orion-2-7048892041-o.jpg)

Orion включает темы для GTK2/3, XFCE, Openbox и Unity, а также имеет полную поддержку GNOME Shell.

[![](img/2012/04/07/21-00/orion-6902800570-o.jpg)](img/2012/04/07/21-00/orion-6902800570-o.jpg)

## Установка темы Orion

Установить можно в Ubuntu 12.04 или 11.10, выполнив команды в терминале:

```
 sudo add-apt-repository ppa:satyajit-happy/themes
 sudo apt-get update
 sudo apt-get install orion-gtk-theme
```
