FROM node:12.2.0-alpine

WORKDIR /app

EXPOSE 3000

ADD . /app
RUN npm install --silent

CMD ["npm", "start"]
