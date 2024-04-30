sed -i "s/WAS_IP = '192.168.111.21';/WAS_IP = '${WAS_IP}';/g" /usr/share/nginx/html/config/config.js

nginx -g "daemon off;"
