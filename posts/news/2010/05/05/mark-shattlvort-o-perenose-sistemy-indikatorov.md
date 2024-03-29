---
title: 'Марк Шаттлворт о переносе системы индикаторов'
date: '2010-05-05T23:14:59+04:00'
uri: 'news/mark-shattlvort-o-perenose-sistemy-indikatorov'
alias: 
  - 'news/359.html'
tags: 'Марк Шаттлворт'
source: 'http://www.opennet.ru/opennews/art.shtml?num=26472'
unixtime: 1273086899
visits: 1381
---
Продолжая рассказывать об идеях по оптимизации пользовательского интерфейса Ubuntu, Марк Шаттлворт [опубликовал](http://www.markshuttleworth.com/archives/333) в своём блоге заметку с рассказом о прогрессе в проектировании нового меню индикаторов. Марк продемонстрировал план по отмене привязки индикаторов к панели и их перенос в правую часть заголовка окна. Посмотрев макет становится сразу понятно,  зачем в Ubuntu 10.04 понадобилось переносить в левый угол кнопки для закрытия и сворачивания окна. Приложения теперь сами смогут использовать индикаторы, отображая в них конкретный статус какого-то определённого состояния (подключение к сети, управления громкостью и т.п.), а также меню управления индикаторами для изменения этого состояния.

Для разнообразия, Шаттлворт называет это “виндикаторами” (как производное от “window indicators” к “windicators”). Виндикаторы - это те же индикаторы, что и на панели, и ведут они себя так же: иконка, показывающая определённое состояние. Щелчок по иконке вызывает меню. Приложения могут создавать, обновлять состояние и удалять виндикаторы с помощью API, примерно так, как это делает фреймворк AppIndicator, впервые представленный в релизе 10.04 LTS. Как и в случае с верхней управляющей панелью рабочего стола, все виндикаторы располагаются в правой части заголовка окна, а иконки управления окном и сам заголовок окна переехали влево.

Рендеринг темы окна передаётся самому приложению, так что теперь приложение и оконный менеджер не будут заниматься этим по отдельности. Этот подход был назван “client side window decorations”. Один из интересных результатов такого подхода - приложению стало проще что-то прорисовывать на панели заголовка окна, поскольку именно само приложение его и прорисовывает, и как следствие, приложению проще теперь контролировать и правую сторону заголовка окна.

“Во многих приложениях статус-бар находится снизу только потому, что так было ещё в Windows 3.1”. Пространство по вертикали используется недостаточно, особенно это важно для нетбуков. Типичное использование статус-бара (иконки состояний, временные статусные сообщения, некоторые инструменты) можно заменить сочетанием виндикаторов и временных всплывающих статус-баров (вдохновлено подходом к реализации статусных сообщений в Chrome). Следующим шагом будет экономия примерно 5% вертикального пространства под действительно необходимый пользовательский контент в тех приложениях где это возможно.

При удачном стечении обстоятельств некоторые из виндикаторов могут быть реализованы уже в релизе Ubuntu 10.10. Пользователям предлагается выбрать наиболее типичные ситуации:

*   Статусный индикатор “автономная работа/в сети” и возможность его переключения для почтового клиента, чата и тп
*   Индикатор того, что содержимое файла, над которым в данный момент работает пользователь/пользователи, изменилось, а также возможность сохранить его или же настроить режим автосохранения
*   Индикаторы состояния (“прогресс-бары”), ассоциированное меню даст возможность приостановить или отменить процесс, и, возможно, определить необходимое действие по окончании операции.
*   “Корзина” - состояние он-лайн покупок
*   Индикаторы совместно используемого ресурса/документа, дающие возможность настроить конкретные свойства этой совместной работы для конкретного документа
*   Индикаторы громкости звука, дающие возможность настроить его для отдельного приложения

Основной момент - эти индикаторы полностью относятся к одному отдельному приложению, и в идеале - только к тому окну, на которое вы в данный момент смотрите.

При дизайне индикаторов будет применен символизм: монохромные по умолчанию, с семантической окраской (красный - критическая проблема, зелёный - положительные изменения статуса, синий - информация, не относящаяся к состоянию по умолчанию или обычному состоянию).

Виндикаторы максимизированного окна будут перемещаться на верхнюю десктопную панель. Они будут находиться в правой её части и располагаться левее индикаторов самой панели. Экран целиком будет занят одним единственным приложением, но элементы Ayatana будут делать своё дело (будь то системные индикаторы, к примеру, заряд батареи, или же индикаторы именно этого приложения).
