---
title: 'Новый стабильный релиз GIMP 2.8'
date: '2012-05-04T11:27:54+04:00'
uri: 'apps/novyi-stabilnyi-reliz-gimp-2-8'
alias: 
  - 'apps/2012/05/gimp-2.8.html'
tags: 'GIMP'
source: 'http://www.webupd8.org/2012/05/gimp-28-stable-finally-available-for.html'
unixtime: 1336116474
visits: 7679
---
После трёх лет разработки представлена новая стабильная версия графического редактора GIMP 2.8.

[![](img/2012/05/04/11-00/gimp-2-8-7141256683-o.jpg)](img/2012/05/04/11-00/gimp-2-8-7141256683-o.jpg)

### Основные улучшения:

*   Новый одноконный режим работы, включающийся из меню «Окна».
*   Для ввода текста больше не требуется открытие дополнительного диалогового окна
*   Добавлена группировка слоёв, выводимая в виде древовидной структуры
*   Новый многоколоночный интерфейс для прикрепления дополнительных окон
*   Можно помечать кисти и шаблоны
*   Новый набор кистей и пресетов по умолчанию
*   Кисти теперь можно вращать
*   Поддержка для JPEG2000 и загрузки RAW данных в 16bit (RGB565).
*   Экспорт значения цвета в CSS, PHP, Java, Python или текстовый файл
*   Экспорт в PDF
*   Новые инструменты и множество [других изменений](http://www.gimp.org/release-notes/gimp-2.8.html).

## Установка GIMP 2.8 в Ubuntu

Перед обновлением нужно удалить ранее установленный пакет GIMP Plugin Registry, во избежание проблем с совместимостью.

```
sudo apt-get remove gimp-plugin-registry 
```

Установка доступна для Ubuntu 12.04 Precise Pangolin и Ubuntu 11.10 из PPA, используя команды ниже:

```
sudo add-apt-repository ppa:otto-kesselgulasch/gimp
 sudo apt-get update
 sudo apt-get install gimp
```

Для возврата к старой версии надо выполнить следующие команды:

```
sudo apt-get install ppa-purge
 sudo ppa-purge ppa:otto-kesselgulasch/gimp
 sudo apt-get dist-upgrade
```

<button>[Скачать GIMP 2.8](http://www.gimp.org/downloads/)</button>
