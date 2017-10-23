FROM node:8.7.0-alpine as builder

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn

COPY . /app/

RUN yarn build



FROM node:8.7.0-alpine

WORKDIR /app
ENV HOST 0.0.0.0
ENV DEBUG 'nuxt:*'

COPY package.json yarn.lock /app/
RUN yarn --prod

COPY --from=builder /app/build /app/build
COPY --from=builder /app/.nuxt /app/.nuxt

EXPOSE 3000

CMD yarn start
