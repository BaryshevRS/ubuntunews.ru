---
title: 'Unity 2D удалена из Ubuntu 12.10'
date: '2012-08-15T22:15:28+04:00'
uri: 'news/unity-2d-removed'
alias: 
  - 'news/unity-2d-removed.html'
tags: 'Unity 2D,llvmpipe,12.10'
source: ''
unixtime: 1345054528
visits: 6251
---
В [последнем](https://launchpad.net/ubuntu/quantal/+source/unity/6.2.0-0ubuntu2) обновлении Ubuntu Quantal Quetzal была удалена десктоп оболочка Unity 2D. Событие не стало неожиданностью, такое решение было принято ещё на [прошедшем саммите](news/uds-q-summary) разработчиков UDS-Q.

[![](img/2012/08/15/22-00/5240972689.jpg)](img/2012/08/15/22-00/5240972689.jpg)

В репозиторий был загружен пустой пакет с Unity 2D, инсталляция которого при обновлении удаляет уже установленную версию. Поэтому поставить Unity 2D из репозитория в Ubuntu 12.10 больше будет нельзя.

Удаление Unity 2D не означает, что разработчики Ubuntu отказываются от запуска дистрибутива на устаревших системах. Вместо этого пользователям будет представлена Unity 3D, запущенная с помощью специального видеодрайвера [llvmpipe](http://www.mesa3d.org/llvmpipe.html).

Также не стоит беспокоиться и пользователям Ubuntu 12.04, работающим с данной десктоп оболочкой, поддержка Unity 2D будет по-прежнему осуществляться в течение всего жизненного цикла дистрибутива до апреля 2017 года.

Мотивация подобного решения очевидна, это было необходимо, чтобы не распылять усилия разработчиков на поддержку двух рабочих столов, а сконцентрироваться на разработке только одного, тем самым устраняя больше ошибок и внося больше улучшений.