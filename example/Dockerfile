FROM node:16.13.2 as build

RUN useradd --create-home mocker
WORKDIR /home/mocker
USER mocker

COPY . .

RUN yarn build

CMD ["yarn", "start"]