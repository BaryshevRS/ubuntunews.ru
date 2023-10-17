---
title: 'Запуск приложений в Ubuntu 11.04 из Ubuntu Software Center без установки'
date: '2011-03-29T01:55:33+04:00'
uri: 'news/ubuntu-software-center-test-apps'
alias: 
  - 'news/ubuntu-software-center-test-apps.html'
tags: '11.04,Ubuntu Software Center,NX,Weblive'
source: ''
unixtime: 1301349333
visits: 4356
---
В [Ubuntu](ubuntu/) 11.04 для Ubuntu Software Center [появилась](http://www.stgraber.org/2011/03/27/more-on-weblive-and-the-software-center-integration/) возможность запуска приложений без необходимости их установки на жесткий диск, это стало возможным за счет использования протокола «NX» , предоставляющего графический интерфейс для работы с удаленным сервером, и набора пакетов и плагинов [Weblive](https://launchpad.net/weblive) для реализации дистанционного доступа к виртуальным машинам.

Для того что бы потестировать новую характеристику, нужно установить пакет **«qtnx»**:

```
sudo apt-get install qtnx
```

После запуска Ubuntu Software Center под скриншотом выбранного приложения будет кнопка «test drive». Искомое приложение будет запущено на удаленном сервере, вполне стабильно функционирующее даже при медленном интернет соединение, к сожалению опция пока доступна только для ограниченного списка приложений, но в будущем можно надеяться на расширение списка поддерживаемых приложений.

Посмотреть в действие можно из следующего видео:

<iframe title="YouTube video player" width="500" height="405" src="https://www.youtube.com/embed/DGvJHuhknbk" frameborder="0" allowfullscreen=""></iframe>
