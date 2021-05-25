---
title: 'Запуск плазмоидов KDE в Unity'
date: '2011-05-04T22:25:47+04:00'
uri: 'apps/run-kde-plasma-widgets-in-ubuntu-unity'
alias: 
  - 'apps/run-kde-plasma-widgets-in-ubuntu-unity.html'
tags: 'KDE,Интерфейс,Плазмоиды,Ubuntu Linux'
source: 'http://www.omgubuntu.co.uk/2011/05/how-to-run-kde-plasma-widgets-in-ubuntu-unity/'
unixtime: 1304533547
visits: 6256
---
Пользователи [Ubuntu](ubuntu/) 11.04 могут использовать KDE плазмоиды, без необходимости отказа от GNOME, Unity или Nautilus, выполнив ряд простых действий , рассмотренных ниже.

[![Запуск плазмоидов KDE в Unity](img/2011/05/04/22-00/plasma-desktop-5688019896-o.jpg)](img/2011/05/04/22-00/plasma-desktop-5688019896-o.jpg)

Для включения плазмоидов потребуется замена рабочего стола (только места где расположены иконки, файлы, значки приложения и.т.д) на «Plasma Desktop», который немного отличается от привычного:

[![меню опций plasma-desktop](img/2011/05/04/22-00/plasma-menu-5688019074-o.jpg)](img/2011/05/04/22-00/plasma-menu-5688019074-o.jpg)

меню опций, появляющийся по нажатию правой кнопкой мыши и использованием собственных обоев, при этом панель Unity и остальные элементы будут работать как и раньше.

### Установка плазмоидов в Ubuntu 11.04

Для добавления плазмоидов в Ubuntu 11.04 c Unity или Unity 2D, в первую очередь потребуется уставить «plasma-desktop» со всеми зависимостями, загрузить которые можно из центра приложений нажав на ссылку:

[Установить plasma-desktop](apt://plasma-desktop,plasma-scriptengine-python)

### Создадим кнопку запуска

*   Кликаем правой кнопкой мыши по пустому месту на рабочем столе и выбираем опцию «Создать кнопку запуска»

[![Создать кнопку запуска](img/2011/05/04/22-00/create-button-5687451895-o.jpg)](img/2011/05/04/22-00/create-button-5687451895-o.jpg)

*   Называем панель «Plasma Desktop»
*   Вводим команду «plasma-desktop»

[![Создать кнопку запуска plasma-desktop](img/2011/05/04/22-00/plasma-button-5687656215-o.jpg)](img/2011/05/04/22-00/plasma-button-5687656215-o.jpg)

### Кнопка переключения

Создаем кнопку переключения к стандартному рабочему столу, для этого повторяем процесс, только называем - «Закрыть Plasma Desktop» и пишем команду «killall plasma-desktop».

### Настраиваем оформление

Для того что бы плазмоиды смотрелись как «родные», выполним два действия:

Во-первых включим GTK+ стиль для Qt приложений:

*   System Settings > Application Appearance > Widget Style > GTK+

[![plasma-desktop GTK+ стиль](img/2011/05/04/22-00/plasma-settings-1-5687452245-o.jpg)](img/2011/05/04/22-00/plasma-settings-1-5687452245-o.jpg)

Теперь установим стиль «Ambiance»:

*   System Settings > Workspace Appearance > Desktop theme > Get new theme
*   Ищем «Ambiance»
*   Устанавливаем
*   Выбираем её на вкладке «Desktop theme»

[![стиль Ambiance Plasma desktop](img/2011/05/04/22-00/plasma-settings-2-5688019464-o.jpg)](img/2011/05/04/22-00/plasma-settings-2-5688019464-o.jpg)

Дополнительно выключим, не нужную для наших целей панель «Plasma desktop», нажав по свободному месту правой кнопкой мыши и выбрав опцию «Remove this Panel».

[![Plasma desktop выключение](img/2011/05/04/22-00/plasma-desktop-remove-5687452027-o.jpg)](img/2011/05/04/22-00/plasma-desktop-remove-5687452027-o.jpg)
