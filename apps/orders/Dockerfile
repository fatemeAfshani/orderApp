FROM node:alpine AS development

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./


RUN yarn install --production=false

COPY . .
EXPOSE 8000

RUN yarn run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/orders/main"]