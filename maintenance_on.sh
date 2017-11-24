#!/bin/bash

systemctl stop nginx
/opt/apache2/bin/apachectl stop

pm2 start maintenance.js

echo ""
echo "--- Сервис выключен. Заглушка включена ---"
echo ""
