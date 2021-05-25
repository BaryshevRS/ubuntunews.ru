---
title: 'Два новых проекта компания Canonical - Unity и Ubuntu Light '
date: '2010-05-12T13:44:10+04:00'
uri: 'news/dva-novyh-proekta-kompaniya-canonical-unity-i-ubuntu-light'
alias: 
  - 'news/364.html'
tags: 'null'
source: 'http://www.opennet.ru/opennews/art.shtml?num=26538'
unixtime: 1273657450
visits: 2196
---
Несколько месяцев назад компания Canonical и сообщество разработчиков Ubuntu взяли на себя задачу создания версии дистрибутива, отвечающей спросу на рынке dual-boot-систем с мгновенной загрузкой и 10-секундной готовностью к веб-сёрфингу. [Результатом](http://blog.canonical.com/?p=379) этих исследований и разработок стал проект Unity - легковесный интерфейс для нетбуков, а также Ubuntu Light - ветка “лёгких” разновидностей Ubuntu, оптимизированная под сценарии двойной загрузки на обычных ПК, ноутбуках и нетбуках.

Unity

На базе изучения двух сотен скриншотов из пользовательской базы Ubuntu и Kubuntu был сделан вывод, что обычно у пользователей настроено от 3 до 10 кнопок быстрого запуска на панелях. Эта тенденция будет сохранена в свете предположения, что нет нужды делать быстрый доступ для каждого установленного приложения, и что каждый пользователь обычно пользуется лишь ограниченным набором часто вызываемых программ, для которых и следует реализовать возможность быстрого запуска, не забыв про функцию удобного переключения между запущенными приложениями.

Максимальное увеличение доступного рабочего пространства - также одна из целей. В нетбуках, с их тенденцией к широкому экрану, вертикальное пространство на котором более ценно, чем горизонтальное, а основным инструментом ввода станет сенсорный экран. Эти ограничения и необходимости стали рамками, в которых и родились очертания нового десктопа, который станет основным в Ubuntu Netbook Edition 10.10 и последующих релизах:

*   нижняя панель переезжает влево, трансформируясь в колонку, и будет отвечать за быстрый запуск и переключение между запущенными приложениями;
*   новая левая панель сможет управляться через сенсорный экран, и поскольку приложений для быстрого запуска немного, то иконки их быстрого запуска вырастут в размере;
*   верхняя панель поумнеет - на фоне принятия концепции единого меню запуска, которое будет отрисовываться панелью, на ней также будет присутствовать заголовок окна и кнопки управления окном, что в итоге даст значительную экономию пространства для тех случаев, когда внимание пользователя сосредоточено на каком-то одном приложении, особенно если это веб-браузер.

Unity вмещает в себя ключевые технологии Gnome 3: оконный менеджер Mutter и фреймворк для организации работы с документами и пользовательской информацией Zeitgeist. Сам по себе интерфейс построен на Clutter. Unity соответствует стандартам freedesktop.org, на панели используются индикаторы Ayatana, что позволит KDE-приложениям чувствовать себя как дома, при их запуске в окружении Unity.

Для установки Unity в Ubuntu 10.04 подготовлен специальный [PPA-репозиторий](https://edge.launchpad.net/%7Ecanonical-dx-team/+archive/une) (sudo add-apt-repository ppa:canonical-dx-team/une && sudo apt-get update && sudo apt-get install unity).

Ubuntu Light

Dual boot-системы мгновенного запуска - это новый рубеж. За прошедшие два года Ubuntu стала первоклассным вариантом для OEM-производителей оборудования, которые сегодня по всему миру предлагают миллионы ПК с предустановленной Ubuntu. Но традиционно это был только один из вариантов в выборе между Windows - на тех рынках, где предпочитают эту ОС, и Ubuntu - на рынках с другими предпочтениями. Вариант готовой двойной загрузки теперь даёт шанс продвинуть свободное ПО и там, где Windows воспринимается как нечто само собой разумеющееся.

В этой ситуации Ubuntu Netbook Light или Ubuntu Desktop Light даст производителям оборудования возможность выделиться в общей массе, предложив мгновенно загружающийся Linux, привычный для пользователей Ubuntu и удобный для новичков, позволяющий увеличить безопасность выхода в Web из таких незащищённых мест, как аэропорты и отели. Линейка Ubuntu Light сегодня доступна производителям оборудования. Каждый из образов вручную доработан для наиболее быстрого запуска на определённом оборудовании, время загрузки приложений сведено к минимуму. Учитывая требования по настройке Light-версий для конкретного оборудования, на ubuntu.com не будет одного общего образа для загрузки Ubuntu Light.

Unity существует уже сейчас и отлично подходит для минималистичных конфигураций без локальной работы с файлами (stateless), которые требует среда с двойной загрузкой. Но для подготовки его к использованию в качестве интерфейса для нетбуков необходимо будет разработать некоторые новые функции и внедрить их в течение цикла разработки релиза Ubuntu Netbook Edition 10.10. Две основных составляющих будущего развития:

*   поддержка гораздо большего числа приложений и функция их добавления/удаления
*   поддержка работы с файлами, необходимая для основной рабочей среды пользователя, в отличие от транзитного веб-сёрфера.