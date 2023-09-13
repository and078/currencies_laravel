FROM node:18-alpine

WORKDIR /var/www

COPY public/ /var/www/frontend/public
COPY src/ /var/www/frontend/src
COPY package.json /var/www/frontend/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]