---
title: 'Инструмент отслеживания патчей Patchtracker от компании Canonical'
date: '2010-05-23T00:35:51+04:00'
uri: 'news/instrument-otslejivaniya-patchei'
alias: 
  - 'news/379.html'
tags: 'null'
source: 'http://www.opennet.ru/opennews/art.shtml?num=26673'
unixtime: 1274560551
visits: 1084
---
Стив Конклин (Steve Conklin) из компании Canonical [представил](http://www.ubuntu-user.com/content/view/full/1109) новый проект Patchtracker, созданный для упрощения поддержки пакета с Linux ядром в Ubuntu и позволяющий находить идентичные патчи в разных репозиториях и ответвлениях Git. Patchtracker написан на языке Python с использованием фреймворка Django, исходные тексты проекта распространяются под лицензией GPL.

В качестве практического примера полезности нового инструмента приводится ситуация с обнаружением проблемы с работой bluetooth-модуля ядра, которая наблюдается в дистрибутиве, но отсутствует в последней версии “ванильного” ядра. При помощи Patchtracker можно наглядно проследить все связанных с данным модулем патчи, внесенные в промежуток времени между разными версиями ядра и с учетом дополнительных патчей, добавленных только для дистрибутивного пакета с ядром.