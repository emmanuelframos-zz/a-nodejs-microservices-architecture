FROM node:8.9.1

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/download-microservice/

WORKDIR $HOME/download-microservice

RUN npm install --silence --progress=false

COPY . $HOME/download-microservice

EXPOSE 3000

CMD ["npm","start"]