#!/bin/bash

pm2 stop maintenance.js

systemctl start apache2
systemctl start nginx

echo ""
echo "--- Заглушка выключена. Сервис запущен. ---"
echo ""
