# Заглушка о проведении работ

## Установка

git clone https://github.com/malyhov/maintenance-page.git maintenance-page

cd maintenance-page

npm install -g pm2

## Использование

Перед началом работ выполнить maintenence_on.sh

- Выключится nginx и apache
- Запустится приложение для прослушивания порта 8443 - нужно для балансировщика
- Запустится приложение для прослушивания порта 443


После выполнения работ запусть maintenence_off.sh

- Остановятся процессы, которые слушают порты 443 и 8443
- Запустится apache и nginx
