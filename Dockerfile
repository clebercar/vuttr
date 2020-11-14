FROM node:14.15

ENV HOME=/app

WORKDIR $HOME

COPY package.json yarn.lock $HOME/

RUN yarn && yarn cache clean

EXPOSE 3000

CMD [ "yarn", "dev" ]
