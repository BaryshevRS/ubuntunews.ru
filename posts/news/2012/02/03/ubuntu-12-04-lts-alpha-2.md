---
title: 'Релиз второй альфа Ubuntu 12.04 Precise Pangolin'
date: '2012-02-03T01:09:22+04:00'
uri: 'news/ubuntu-12-04-lts-alpha-2'
alias: 
  - 'news/ubuntu-12.04-lts-alpha-2.html'
tags: 'альфа,12.04'
source: 'http://www.webupd8.org/2012/02/ubuntu-1204-lts-precise-pangolin-alpha.html'
unixtime: 1328216962
visits: 11903
---
Вышла вторая и последняя альфа версия Ubuntu 12.04 Precise Pangolin, включающая различные улучшения пользовательского интерфейса и обновлённые версии программ.

<iframe width="500" height="369" src="http://www.youtube.com/embed/IEPTgZBDS68" frameborder="0" allowfullscreen=""></iframe>

**Рассмотрим нововведения:**

## Unity

В состав дистрибутива была включена новая версия Unity 5.0, в которой была улучшена отзывчивость интерфейса и добавлен ряд новых характеристик.

### Dash

Одним из самых заметных изменений стало удаление больших значков из окна домашней линзы. Теперь вместо них выводятся часто используемые программы, отсутствующие на панели Unity, а также файлы и произведённые загрузки.

[![удаление больших значков из окна домашней линзы](img/2012/02/03/01-00/ubuntu-1204-5-6808581907-o.jpg)](img/2012/02/03/01-00/ubuntu-1204-5-6808581907-o.jpg)

Следующем изменением стала возможность изменения цвета и прозрачности интерфейса Dash, вместо ранее используемого адаптивного метода на основе цветовой гаммы установленных обоев. Настройка доступна из менеджера [CCSM](apt://compizconfig-settings-manager).

[![изменения цвета и прозрачности интерфейса Dash](img/2012/02/03/01-00/ubuntu-1204-6-6808582451-o.jpg)](img/2012/02/03/01-00/ubuntu-1204-6-6808582451-o.jpg)

Также появилась возможность удаления рекомендуемых для загрузки программ из линзы приложений. Для этого потребуется установить из центра приложений утилиту [dconf-tools](apt://dconf-tools).

После чего запустить dconf-editor и снять галочку напротив опции *«display-available-apps»* в *«desktop>unity>lenses>applications»*.

[![dconf-tools ubuntu](img/2012/02/03/01-00/ubuntu-1204-8-6808583503-o.jpg)](img/2012/02/03/01-00/ubuntu-1204-8-6808583503-o.jpg)

### Quicklist

Для иконки запуска Dash на панели Unity появилось новое контекстное меню, позволяющее получить быстрый доступ ко всем установленным линзам.

[![контекстное меню иконки запуска Dash](img/2012/02/03/01-00/ubuntu-1204-1-6808579965-o.jpg)](img/2012/02/03/01-00/ubuntu-1204-1-6808579965-o.jpg)

Обновлённое контекстное меню также получил файловый менеджер Nautilus. Меню теперь поддерживает динамический вывод всех имеющихся закладок (комбинация клавиш <kbd>Ctrl</kbd> + <kbd>D</kbd>).

![контекстное меню Nautilus](img/2012/02/03/01-00/ubuntu-1204-2-6808580215-o.jpg)

### Панель Unity

Панель Unity обзавелась новым переключателем между иконками приложений, активируемый с помощью горячих клавиш <kbd>SUPER+TAB</kbd> и <kbd>SHIFT+SUPER+TAB</kbd> для обратного направления.

### Прочие

Среди других изменений стоит отметить постепенное скрытие меню приложений, после запуска окна программы. Нововведение было сделано для того, чтобы новоприбывшим пользователям было более очевидно где располагается меню.

Ещё одним изменением для помощи пользователям стало добавление всплывающей подсказки содержащей список горячих клавиш для Unity в Ubuntu 12.04 (нажать и удерживать клавишу <kbd>SUPER</kbd>(WIN)).

[![список горячих клавиш для Unity в Ubuntu 12.04](img/2012/02/03/01-00/ubuntu-1204-7-6808583201-o.jpg)](img/2012/02/03/01-00/ubuntu-1204-7-6808583201-o.jpg)

Также теперь появилась возможность частичной настройки интерфейса Unity, а именно:

*   Настройка размера панели Unity

[![Настройка размера панели Unity](img/2012/02/03/01-00/ubuntu-1204-3-6808580885-o.jpg)](img/2012/02/03/01-00/ubuntu-1204-3-6808580885-o.jpg)

*   Сброс настроек по умолчанию
*   Регулирование скрытия панели Unity

[![Сброс настроек по умолчанию unity В ubuntu](img/2012/02/03/01-00/ubuntu-1204-4-6808581391-o.jpg)](img/2012/02/03/01-00/ubuntu-1204-4-6808581391-o.jpg)

## Приложения

### Центр приложений Ubuntu

В центре приложений Ubuntu добавлена возможность отключения вывода значков, появляющихся при установке новых приложений на панель Unity, через соответствующую опцию из меню.

Также реализована автоматическая инсталляция языкового пакета, без необходимости запуска менеджера поддержки языка.

### Unity Greeter

Unity Greeter – тема оформления для дисплейного менеджера LightDM обзавелась поддержкой пользовательских обоев. Теперь при переключение пользователей из меню в LightDM меняется и фон на используемые ими обои рабочего стола.

[![Unity Greeter](img/2012/02/03/01-00/ubuntu-1204-9-6808584309-o.jpg)](img/2012/02/03/01-00/ubuntu-1204-9-6808584309-o.jpg)

### Rhythmbox

Хоть Rhythmbox и был утверждён как аудиоплеер по умолчанию в Ubuntu 12.04, но ввиду того, что Banshee всё-таки был портирован на GTK3, то снова возник вопрос о том какой из них оставить в составе дистрибутива. Окончательное прояснение ситуации будет видно только после обсуждения перед выходом первой бета версии.

Другие приложения включенные во второю альфа Ubuntu 12.04 Precise Pangolin : браузер Firefox 10, почтовый клиент Thunderbird 10, Nautilus 3.3.4, плеер Rhythmbox 2.95, текстовый редактор Gedit 3.3.2, офисный пакет LibreOffice 3.5.0 beta 2, Totem 3.0.1, Empathy 3.3.4, Shotwell 0.11.91, Gwibber 3.3.3, торрент клиент Transmission 2.42, Deja Dup 21.2, ядро 3.2.0-12.21 и Xorg server 1.11.3.

### PAE по умолчанию для 32 битных систем

Начиная со второй альфа Ubuntu Precise будет использовать PAE ядро по умолчанию, которое позволяет адресовать до 64 ГБ физической памяти (вместо 4 ГБ поддерживаемых для 32-разрядных систем).

Следующий тестовый бета релиз стоит ожидать 1 марта, а финальная версия намечена на 26 апреля.

[**Скачать Ubuntu 12.04 Precise Pangolin**](https://wiki.ubuntu.com/PrecisePangolin/TechnicalOverview/Alpha2)