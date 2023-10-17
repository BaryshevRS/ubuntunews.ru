---
title: 'Апплет управления многомониторной конфигурацией в Ubuntu с картами NVIDIA'
date: '2011-06-13T13:24:53+04:00'
uri: 'apps/disper-indicator-for-nvidia-cards'
alias: 
  - 'apps/disper-indicator-for-nvidia-cards.html'
tags: 'Nvidia,indicator-applet'
source: ''
unixtime: 1307957093
visits: 5696
---
[Представлен](http://askubuntu.com/questions/30334/list-of-application-indicators/48381#48381) апплет-индикатор [Disper-indicator](https://code.launchpad.net/~nmellegard/disper/disper-indicator), - представляющий из себя простой интерфейс для управления многомониторной конфигурацией в Ubuntu с десктоп окружением Unity. Апплет определяет подключенные к системе мониторы и предлагает необходимые опции для режимов переключения.

![Апплет управления многомониторной конфигурацией в Ubuntu с картами NVIDIA](img/2011/06/13/13-00/disper-indicator-5828167766-o.jpg)

Disper-indicator предназначен для работы с видеокартами NVIDIA, в качестве основы для индикатора используется утилита [Disper](http://willem.engen.nl/projects/disper/).

Утилита Disper предназначена для переключения мониторов на лету, а также для использования на ноутбуках, для проведения презентаций на подключенном проекторе. Утилита автоматически определяет подсоединенные мониторы и может быть использована для управления вывода на них. Пока работает только с графическими картами NVIDIA.

### Установка Disper-indicator

Для установки потребуется выполнить следующие команды:

```
sudo add-apt-repository ppa:disper-dev/ppa
sudo add-apt-repository ppa:nmellegard/disper-indicator-ppa
sudo apt-get update
sudo apt-get install disper disper-indicator
```
