---
title: 'Интегрируем Transmission с панелью Unity'
date: '2011-09-06T19:45:45+04:00'
uri: 'apps/integrate-transmission-with-unity'
alias: 
  - 'apps/integrate-transmission-with-unity.html'
tags: 'Transmission,Unity'
source: 'http://www.webupd8.org/2011/09/integrate-transmission-with-unity.html'
unixtime: 1315323945
visits: 4315
---
«[Transmission-Unity-Launcher](https://github.com/kriomant/transmission-unity-launcher)» – скрипт написанный на python, предназначенный для интеграции панели Unity с торрент клиентом Transmission. Скрипт показывает число закачек, а также прогрессбар с общим прогрессом загружаемых файлов. Функционал пока небольшой, но в будущем возможно будет расширен за счет добавления управляющих опций (настройки скорости, старта или остановки торрентов) в контекстное меню.

[![Интегрируем Transmission с панелью Unity](img/2011/09/06/19-00/transmission-6120240003-o.jpg)](img/2011/09/06/19-00/transmission-6120240003-o.jpg)

## Установка

Скрипт работает только под Ubuntu 11.04 и для установки достаточно последовательно выполнить ряд команд через терминал:

```
sudo apt-get install python-gobject python-transmissionrpc git-core
```

```
cd
```

```
git clone https://github.com/kriomant/transmission-unity-launcher.git
```

```
sudo cp transmission-unity-launcher/transmission-unity-launcher.py /usr/local/bin/
```

```
sudo chmod +x /usr/local/bin/transmission-unity-launcher.py
```

```
mkdir -p ~/.local/share/applications
```

```
cp /usr/share/applications/transmission-gtk.desktop ~/.local/share/applications/
```

```
sed -i 's/^Exec=transmission-gtk/Exec=\/usr\/local\/bin\/transmission-unity-launcher.py transmission-gtk/' ~/.local/share/applications/transmission-gtk.desktop 
```

```
chmod +x ~/.local/share/applications/transmission-gtk.desktop
```

Теперь заходим в Transmission → Правка → Настройки и выбираем «Включить веб интерфейс» и закрываем окно.

Завершающим штрихом перетаскиваем иконку Transmission из папки «~/.local/share/applications» (нажимаем CTRL + H для отображения скрытых папок)на панель Unity.
