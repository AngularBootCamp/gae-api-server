FROM node:8
WORKDIR /app

COPY package.json /app
RUN yarn --production
COPY . /app

EXPOSE 80

CMD ["yarn", "start"]
