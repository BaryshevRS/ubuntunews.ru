---
title: 'InfraLinux дистрибутив Ubuntu от компании “Ифра-Ресурс”'
date: '2009-02-05T01:28:01+03:00'
uri: 'news/infralinux-distributiv-ubuntu-ot-kompanii-ifra-resurs'
alias: 
  - 'news/31.html'
tags: 'OpenOffice.org,InfraLinux,дистрибутивы'
source: 'http://www.pcweek.ru/themes/detail.php?ID=117589'
unixtime: 1233786481
visits: 1479
---
Программа OpenOffice.org традиционно считается одной из самых востребованных любым пользователем, в том числе и российским. Однако, в последнем случае возникают некоторые проблемы. Связаны они с тем, что наиболее адаптированной к отечественным условиям является сборка этого приложения, созданная компанией “Инфра-Ресурс”. Но в репозитории многих популярных дистрибутивов Linux она не входит.

Например, российские пользователи Ubuntu сперва должны удалить ту копию OpenOffice.org, которая входит в стандартную комплектацию, а потом установить пакет от “Инфра-Ресурс”. Конечно, задача эта нетрудная, но требует времени, которого вечно не хватает. А стало быть, лучше обойтись без нее.

По всей видимости, именно такие мотивы двигали компанией “Инфра-Ресурс” при принятии решения о свободном распространении дистрибутива InfraLinux, который создавался для внутреннего использования в качестве платформы для разработки и отладки OpenOffice.org pro. Кстати, ситуация достаточно распространенная в мире свободного ПО — сперва продукт делается “для себя”, а потом предлагается другим.

“Инфра-Линукс” можно установить с компакт-диска, образ которого доступен для свободной загрузки. Если же у пользователя уже установлена система Ubuntu, то достаточно просто подключить дополнительный репозиторий и импортировать GPG-ключ. Для этого нужно набрать в терминале две команды:

```

sudo wget http://archive.infralinux.org/infralinux/intrepid.list -O /etc/apt/sources.list.d/infralinux.list;

sudo apt-get update && sudo apt-get install infralinux-keyring && sudo apt-get update.
```

Установка компонентов производится при помощи штатного менеджера обновлений. Для полного перехода на InfraLinux следует инсталлировать пакет infralinux-desktop.

С точки зрения пользователя, InfraLinux — это Ubuntu, в котором заменены некоторые пакеты. Система полностью русифицирована и работа с ней не должна вызвать затруднений даже у новичка, ведь Ubuntu — образец дружелюбия.
