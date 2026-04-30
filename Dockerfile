FROM nginx:alpine

COPY dist /usr/share/nginx/html

# Fix React Router (important)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
