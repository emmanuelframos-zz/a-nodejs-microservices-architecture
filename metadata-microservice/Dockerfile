FROM node:8.9.1

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/metadata-microservice/

WORKDIR $HOME/metadata-microservice

RUN npm install --silence --progress=false

COPY . $HOME/metadata-microservice

EXPOSE 3000

CMD ["npm","start"]