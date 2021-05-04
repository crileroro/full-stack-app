FROM node:14.0-alpine3.10 as builder

WORKDIR /app
COPY ./fe-shopping/package.json .
RUN npm install

COPY ./fe-shopping .
RUN npm run build

FROM nginx:1.18-alpine
EXPOSE 3000
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html