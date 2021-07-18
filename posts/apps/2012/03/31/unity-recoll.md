---
title: 'Линза Unity для утилиты полнотекстового поиска Recoll'
date: '2012-03-31T21:15:32+04:00'
uri: 'apps/unity-recoll'
alias: 
  - 'apps/unity-recoll.html'
tags: 'Recoll,Линзы,Unity'
source: 'http://www.webupd8.org/2012/03/recoll-lens-full-text-search-unity-lens.html'
unixtime: 1333214132
visits: 4098
---
Recoll – десктоп утилита для [полнотекстового поиска](http://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D0%BD%D0%BE%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D0%BE%D0%B8%D1%81%D0%BA), позволяющая искать среди множества форматов файлов, включая OpenOffice, PostScript, MS Office, MP3, JPEG и т. п. Кроме того, может выполнять и обычный поиск, а также поддерживает использование различных операторов, таких как автор, размер файла, тип файла и «AND» или «OR».

[![](img/2012/03/31/21-00/recoll-6886349742-o.jpg)](img/2012/03/31/21-00/recoll-6886349742-o.jpg)

## Линза Unity Recoll

Линза Unity Recoll позволяет использовать возможности утилиты из Dash, без необходимости запуска дополнительного окна программы. Линза включает ряд фильтров, таких как Text, Spreadsheet, Presentation, Media или Message, а также поддерживает использование специфичных запросов, к примеру:

*   **author:"john doe"** – будет искать автора c полным вхождением слова «john doe», если указать без кавычек, то найдёт файлы как с именем «john», так и «doe».
*   **metallica OR megadeth** – равнозначно запросу «metallica или megadeth»
*   **/2007** – найдёт все файлы от 2007 года
*   **dir:/path/to/dir** – будет искать только в указанной директории

Узнать больше об операторах Recoll можно тут.

[![](img/2012/03/31/21-00/recoll-2-7032446999-o.jpg)](img/2012/03/31/21-00/recoll-2-7032446999-o.jpg)

## Установка линзы Unity Recoll

Установка доступна из PPA для Ubuntu 12.04, 11.10 и 11.04, используя команды ниже:

```
 sudo add-apt-repository ppa:recoll-backports/recoll-1.15-on
 sudo apt-get update
 sudo apt-get install recoll-lens recoll
```

После установки потребуется запустить Recoll и проиндексировать файлы, а затем перезайти в сессию, чтобы в Dash появилась вкладка линзы. Также стоит отметить, что утилита обладает прекрасным русифицированным интерфейсом с множеством настроек.
