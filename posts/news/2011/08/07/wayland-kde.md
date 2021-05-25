---
title: 'Планы интеграции Wayland в KDE в 2012 году'
date: '2011-08-07T17:45:53+04:00'
uri: 'news/wayland-kde'
alias: 
  - 'news/wayland-kde.html'
tags: 'Wayland,KDE,12.04,12.10'
source: ''
unixtime: 1312724753
visits: 4113
---
На проходящем на этой неделе «Desktop Summit» в Берлине, Martin Gräßlin, являющимся ведущим разработчиком композитного оконного менеджера Kwin, были представлены планы об поддержке дисплейного сервера Wayland для рабочего стола KDE, как альтернативы использованию X11, начальную поддержку которого для пользователей KDE планируется осуществить в 2012 году.

[![Desktop Summit](img/2011/08/07/17-00/desktop-summit-6018025928-o.jpg)](img/2011/08/07/17-00/desktop-summit-6018025928-o.jpg)

Мартином были рассмотрены: текущее состояние дел между проектами KDE/KWin и X, возможное использование Wayland и планы к его адаптации. Среди отмеченных им проблем, что c X11/X.Org Server нет прямого взаимодействия, оконному менеджеру требуются фиксы недостатков X, нет поддержки перенаправления ввода и X11 ориентирован на не композитное десктоп окружение.

Также была отмечена достаточно медленная разработка API и Мартин думает, что вряд ли будет шанс увидеть что-нибудь полезное из композитной поддержки в X . Разработчики Compiz высылали множество патчей, которые так и не были объединены. Wayland же не должен иметь этих ограничений и проблем, а также предлагать новые возможности такие, как вложенные Wayland серверы.

Обнадеживает, что Wayland будет развиваться при возможной поддержке Intel, MeeGo и Qt и некоторыми другими заинтересованными лицами, но остается большая проблема в том, что Wayland практически не используется, и в процессе его эксплуатации могут выявиться различные непредвиденные проблемы, а также необходима поддержка проприетарных графических драйверов NVIDIA и ATI / AMD.

## Планы внедрения Wayland в KDE

Внедрение поддержки Wayland запланировано в три последовательных этапа:

*   Запуск Wayland под X с KWin
*   Запуск KWin прямо на Wayland без X
*   Окончательный запуск Wayland, где X11 имеет поддержку работы под Wayland.

Сроки развития не определены и зависят от множества факторов, таких как сторонняя помощь, развитие драйверов и поддержка необходимых зависимостей. Помимо KWin в поддержке также нуждаются и другие компоненты KDE, что может потребовать годы напряженной работы, но первый этап (Wayland под X) планируется завершить уже к зимнему релизу KDE 4.8, намеченному на январь следующего года, а второй этап летом с выходом KDE SC 4.9.

Что касается третьего этапа, то он возможен только после полной совместимости с KDE и выходом необходимых графических драйверов.

Стоит отметить работу Canonical над поддержкой десктоп оболочки Unity для работы в Wayland, намеченную на 2012, развитие которой планируется в течение нескольких циклов релизов: Ubuntu 11.10 и Ubuntu 12.04, выходящего с длительным периодом поддержки так, что ожидать включение по умолчанию стоит только к октябрю в Ubuntu 12.10.