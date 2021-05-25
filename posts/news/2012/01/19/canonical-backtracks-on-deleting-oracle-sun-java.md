---
title: 'Canonical не будет удалять Oracle Sun Java из пользовательских систем'
date: '2012-01-19T00:45:15+04:00'
uri: 'news/canonical-backtracks-on-deleting-oracle-sun-java'
alias: 
  - 'news/canonical-backtracks-on-deleting-oracle-sun-java.html'
tags: 'Oracle Sun Java,Canonical'
source: 'http://www.h-online.com/open/news/item/Canonical-backtracks-on-deleting-Oracle-s-Sun-Java-1415541.html'
unixtime: 1326919515
visits: 3365
---
Компания Canonical сообщила, что было принято решение не добавлять пустой пакет с Oracle Sun Java JDK в их партнёрский репозиторий для Ubuntu 10.04 LTS, 10.10 и 11.04. Вместо этого пакет будет просто удалён из репозитория. В декабре прошлого года был [анонс с новостью](news/remove-oracle-sun-java-from-users-systems) об замещение пакета с Sun Java на пустой, для последующей установки при обновление системы, что по сути было равноценно полному удалению этой программы с компьютера пользователя.

Сложившаяся ситуация была вызвана тем, что Canonical не могла представить актуальные патчи для устранения критических уязвимостей, так как Oracle в августе 2011 отозвала лицензию на распространение Java на Linux платформах.

Не все в сообществе приняли эту новость положительно в силу того, что некоторые программы требуют для своей стабильной работы именно Java 6 и многие пользователи ради этого были готовы принять имеющиеся риски, связанные с использованием опасного с точки зрения безопасности приложения. Поэтому компания Canonical приняла решение лишь об удаление пакета из репозитория, намеченное на 16 февраля.

В качестве разрешения ситуации рекомендуется поставить JDK с [сайта Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html) или перейти на использование [OpenJDK](http://ru.wikipedia.org/wiki/OpenJDK).

Предварительно нужно проверить установлена ли Java 6 в системе, выполнив следующую команду:

```
dpkg -l '*sun-java6*'
```

Должно вывестись, что-то вроде:

<samp>ii sun-java6-jre</samp>

Флаг «ii» говорит о том, что пакет установлен.

Удалить найденный пакет можно так:

```
sudo apt-get purge sun-java6-jre
```

И установить OpenJDK:

```
sudo apt-get install openjdk-6-jre icedtea6-plugin
```
