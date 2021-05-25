---
title: 'Устанавливаем шутер Alien Arena 7.53 в Ubuntu'
date: '2011-12-31T12:28:02+04:00'
uri: 'apps/install-alien-arena-7-53-ubuntu'
alias: 
  - 'apps/install-alien-arena-7-53-ubuntu.html'
tags: 'Alien Arena,Шутер,Игра'
source: 'http://www.ubuntuvibes.com/2011/12/alien-arena-753-released-with-new-maps.html'
unixtime: 1325320082
visits: 10040
---
Alien Arena – кроссплатформенный шутер от первого лица с открытым исходным кодом. Игра обладает Quake-подобным геймлеем и позволяет играть в одно- и многопользовательских режимах. В новой версии 7.53 были добавлены различные улучшения и множество новых характеристик.

[![](img/2011/12/31/12-00/alien-arena-6605430537-o.jpg)](img/2011/12/31/12-00/alien-arena-6605430537-o.jpg)

[![](img/2011/12/31/12-00/alien-arena-1-6605430729-o.jpg)](img/2011/12/31/12-00/alien-arena-1-6605430729-o.jpg)

## Что нового

*   Расширенное использование VBO (OpenGL Vertex Buffer Objects) для ещё большего увеличения производительности
*   Улучшение ИИ ботов
*   Добавлена серверная опция «Dm Lights»
*   Улучшение меню
*   Улучшение алгоритмов ведения статистики
*   Оптимизирована и улучшена отрисовка растительности
*   Различные багофиксы и чистка кода
*   Две новые карты
*   Оптимизация IQM и MD2 рендеринга
*   Новый скил «Ultra»
*   Улучшенное определение «Speed hack»

## Установка Alien Arena в Ubuntu

Скачиваем и распаковываем архив с игрой или выполняем следующие команды в терминале:

```
wget http://red.planetarena.org/files/alienarena-7.53-linux20111227.tar.gz 
```

```
tar xvfz alienarena-7.53*.tar.gz
```

Ставим зависимости:

```
sudo apt-get install build-essential libx11-dev libgl1-mesa-dev libxxf86vm-dev libxxf86dga-dev libopenal-dev libjpeg8-dev libvorbis-dev libcurl4-gnutls-dev libode-dev libfreetype6-dev
```

Устанавливаем игру:

```
cd ~/alienarena-7.53 
./configure 
make 
sudo make install
```

Для запуска нажимаем <kbd>ALT</kbd>+<kbd>F2</kbd> и вводим команду:

```
crx
```
