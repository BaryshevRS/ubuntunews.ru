---
title: 'Области и линзы для Ubuntu 12.04 и 11.10'
date: '2011-12-28T16:16:14+04:00'
uri: 'apps/unity-lens-scope'
alias: 
  - 'apps/unity-lens-scope.html'
tags: 'Линзы,Области,12.04,11.10'
source: ''
unixtime: 1325074574
visits: 16784
---
Рассмотрим несколько новых линз и областей, доступных для установки в Ubuntu 11.10 и 12.04:

**Линзы** – это вкладки, позволяющие пользователям быстро находить интересующую их информацию, расположенную как локально на компьютере (установленные приложения, закладки ...), так и хранящаяся на удаленных сервисах (Ubuntu One, Twitter ...).

Линзы позволяют сортировать нужную информацию, за счет использования категория и различных фильтров (размер, рейтинг и т.п.), а также искать сразу в нескольких областях (Scopes).

**Области** – это источники данных, например по умолчанию для музыкальной линзы, это музыка которая хранится на компьютере и в сервисе Ubuntu One Music Store.

## Unity Cities scope

Эта область выводит различную информацию о городах, такую как: погода, скорость ветра, текущие время и расположение на карте Google Maps.

Доступ осуществляется из глобальной линзы (значок дома в нижней панели Dash), где надо будет ввести название города на английском языке.

[![](img/2011/12/28/16-00/unity-cities-scope-6587409813-o.jpg)](img/2011/12/28/16-00/unity-cities-scope-6587409813-o.jpg)

Область находится в разработке, так что к финальному релизу 12.04 может обзавестись локализацией, которая сделает её еще более удобной и функциональной.

Установить можно из PPA в Ubuntu 11.10 и 12.04:

```
 sudo add-apt-repository ppa:scopes-packagers/ppa
 sudo apt-get update
 sudo apt-get install unity-lens-utilities unity-scope-cities
```

## Unity calculator scope

Область позволяет производить математические вычисления прямо в окне глобальной линзы Dash. Среди поддерживаемых операторов «-, +, \*, /, %, sin, cos, tan» и многие другие.

[![](img/2011/12/28/16-00/unity-calculator-scope-6587409145-o.jpg)](img/2011/12/28/16-00/unity-calculator-scope-6587409145-o.jpg)

Установка доступна из PPA для Oneiric и Precise:

```
sudo add-apt-repository ppa:scopes-packagers/ppa
sudo apt-get update 
sudo apt-get install unity-lens-utilities unity-scope-calculator
```

## Unity Grooveshark scope

Область позволяет искать аудиозаписи в музыкальном сервисе Grooveshark и проигрывать найденную запись в окне веб-браузера.

[![аудиозаписи в музыкальном сервисе Grooveshark](img/2011/12/28/16-00/unity-grooveshark-scope-6587409301-o.jpg)](img/2011/12/28/16-00/unity-grooveshark-scope-6587409301-o.jpg)

Область для Grooveshark добавляется в музыкальную линзу, которая по умолчанию ищет файлы в медиаплеере Banshee, но список поддерживаемых проигрывателей также можно расширить за счёт использования областей для Clementine, Rhythmbox и Guayadeque.

Установка из PPA (Oneiric, Precise):

```
 sudo add-apt-repository ppa:scopes-packagers/ppa
 sudo apt-get update
 sudo apt-get install unity-scope-grooveshark
```

## Unity Torrents lens

Линза предназначена для поиска торрент файлов, а также поддерживает сортировку по типу и размеру файла.

Недостатком линзы является то, что для неё пока доступна только одна область – поиска с сайта Piratebay.

[![](img/2011/12/28/16-00/unity-torrents-lens-6587409629-o.jpg)](img/2011/12/28/16-00/unity-torrents-lens-6587409629-o.jpg)

Для скачивания найденного файла есть два способа:

*   Нажать на иконку в окне линзы, после чего откроется искомая страница в веб-браузере, используемом по умолчанию.
*   Или перетащить иконку файла из окна линзы на значок торрент-клиента, который был предварительно размещен на панели Unity.

Установить можно в Ubuntu 11.10 и 12.04:

```
 sudo add-apt-repository ppa:scopes-packagers/ppa
 sudo apt-get update
 sudo apt-get install unity-lens-torrents unity-scope-piratebay
```

## Unity Adult lens

Линза предназначенная для вывода видеоконтента для взрослых (18+), а также поддерживает сортировку найденных роликов по жанрам. На текущий момент в качестве источника используется сайт Youporn, доступ к которому осуществляется через одноимённую область.

После установки выведет значок «X» в нижней панели, как на цензурированном скриншоте ниже:

[![Unity Adult lens](img/2011/12/28/16-00/unity-adult-lens-6587409961-o.jpg)](img/2011/12/28/16-00/unity-adult-lens-6587409961-o.jpg)

Для того, что бы скрыть вывод значка «X» потребуется внести правку в файле «/usr/lib/unity-lens-adult/unity-lens-adult»:

```
gksu gedit /usr/lib/unity-lens-adult/unity-lens-adult
```

отредактировав 37 строку и заменив значение параметра «self.\_lens.props.visible = True;» с True на False, после чего доступ к линзе можно будет получить через сочетание горячих клавиш <kbd>Super</kbd>+<kbd>X</kbd>.

Установить можно в Ubuntu 11.10 и 12.04:

```
 sudo add-apt-repository ppa:scopes-packagers/adult-scopes
 sudo apt-get update
 sudo apt-get install unity-lens-adult unity-scope-youporn
```

## Unity Binary Clock

Оригинальная линза, которая выполняет не совсем свойственное для линз предназначение, а именно выводит время в бинарном виде.

Время рассчитывается из суммы оранжевых точек. В первой строке задаются часы, во второй минуты, а в третьей секунды.

[![Unity Binary Clock](img/2011/12/28/16-00/unity-binary-clock-6587409463-o.jpg)](img/2011/12/28/16-00/unity-binary-clock-6587409463-o.jpg)

Установка доступна для Ubuntu 11.10 и 12.04:

```
 sudo add-apt-repository ppa:markjtully/ppa
 sudo apt-get update
 sudo apt-get install unity-binaryclock-lens
```

После установки новой линзы или области потребуется обязательный **перезаход в систему**, для вступления изменения в силу.

Некоторые не рассмотренные линзы можно найти на данной странице: [askubuntu.com](http://askubuntu.com/questions/38772/what-lenses-for-unity-are-available)
