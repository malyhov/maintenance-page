#!/bin/bash

pm2 stop maintenance.js

/opt/apache2/bin/apachectl start
systemctl start nginx

echo ""
echo "--- Заглушка выключена. Сервис запущен. ---"
echo ""
