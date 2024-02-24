FROM node:19

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm i --frozen-lockfile

COPY . .
EXPOSE 8080
CMD [ "npm","start" ]