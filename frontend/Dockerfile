FROM node:12.2.0-alpine

WORKDIR /app

EXPOSE 8081

ADD . /app
RUN npm install --silent

CMD ["npm", "start"]
