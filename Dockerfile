FROM node:latest

COPY . .

RUN yarn install

EXPOSE 5001

CMD [ "yarn", "dev" ]