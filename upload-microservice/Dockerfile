FROM node:8.9.1

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/upload-microservice/

WORKDIR $HOME/upload-microservice

RUN npm install --silence --progress=false

COPY . $HOME/upload-microservice

EXPOSE 3000

CMD ["npm","start"]