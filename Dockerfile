FROM nginx:1.18-alpine

COPY ./html /usr/share/nginx/html

COPY ./script.sh /usr/share/nginx/script.sh
RUN ["chmod", "+x", "/usr/share/nginx/script.sh"]

# Default WAS_IP Value
ENV WAS_IP="192.168.111.21"

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
