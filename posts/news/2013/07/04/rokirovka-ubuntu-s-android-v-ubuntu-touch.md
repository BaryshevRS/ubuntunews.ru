---
title: 'Рокировка Ubuntu с Android в Ubuntu Touch'
date: '2013-07-04T19:37:04+04:00'
uri: 'news/rokirovka-ubuntu-s-android-v-ubuntu-touch'
alias: 
  - 'news/rokirovka-ubuntu-s-android-v-ubuntu-touch.html'
tags: 'Ubuntu Touch'
source: ''
unixtime: 1372952224
visits: 5151
---
[В списке рассылки](https://lists.ubuntu.com/archives/ubuntu-devel/2013-July/037443.html) Ubuntu появилась статья о новом механизме загрузки Ubuntu Touch, содержанием которой поделился разработчик Oliver Grawert.

> Ранее Ubuntu запускалась в [chroot-окружении](http://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%80%D1%82%D1%83%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F_%D0%BD%D0%B0_%D1%83%D1%80%D0%BE%D0%B2%D0%BD%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B) и по факту являлась обычной оболочкой над Android, сейчас я могу с уверенностью сказать, что теперь это больше не так, с этого момента мы переключаемся на новую модель сборки дистрибутива.
 
Суть изменения сводится к тому, что если раньше Ubuntu запускалась после загрузки Android, то теперь ведущей системой стала Ubuntu, а Android выполняется параллельно в изолированном [LXC-контейнере](http://ru.wikipedia.org/wiki/LXC). То есть произошла своеобразная рокировка с перераспределением ролей ответственных за запуск Ubuntu Touch.

Новая модель – это серьёзный шаг в преодолении зависимости в области использования ключевых компонентов от сторонних платформ и создании уникальной, самодостаточной операционной системы.
