#!/bin/bash

systemctl stop nginx
systemctl stop apache2

pm2 start maintenance.js

echo ""
echo "--- Сервис выключен. Заглушка включена ---"
echo ""
