---
title: 'Исправление в Compiz позволило улучшить производительность игр'
date: '2012-11-29T20:52:05+04:00'
uri: 'news/ispravleniye-v-compiz-pozvolilo-uluchshit-proizvoditelnost-igr'
alias: 
  - 'news/ispravleniye-v-compiz-pozvolilo-uluchshit-proizvoditelnost-igr.html'
tags: 'Compiz'
source: 'http://www.omgubuntu.co.uk/2012/11/compiz-fix-bringing-better-gaming-performance-to-ubuntu'
unixtime: 1354207925
visits: 4268
---
В последнюю сборку Compiz 0.9.8.6 была внесена небольшая доработка, позволившая улучшить производительность игр в Ubuntu.

Изменение коснулось включения по умолчанию опции «Unredirect Fullscreen Windows», отвечающей за отмену использования отрисовки окон через Compiz, для программ запущенных в полноэкранном режиме. Ответственный за изменение разработчик [Timo Jyrinki](https://plus.google.com/107379654278574464995) отметил, что это исправление позволило при его тестировании улучшить производительность игр на 18%.

Также он написал, что причиной, по которой эта возможность не была включена сразу, являлось необходимость внесения фиксов в используемые Compiz’ом драйверы, которые на тот момент не были готовы.

Так что в ближайшее время стоит ожидать обновлений для Ubuntu 12.10 и 12.04. Тем же, кому не терпится, могут поставить новую версию из специального [PPA](https://launchpad.net/~unity-team/+archive/sru), содержащего версии пакетов для следующего стабильного релиза.

```
sudo add-apt-repository ppa:unity-team/sru
 sudo apt-get update
 sudo apt-get install сompiz
```
