FROM node

COPY . /app

WORKDIR /app

RUN npm install -g pm2 && \
    npm install

EXPOSE 3000

CMD [ "pm2","start","index.js","--no-daemon" ]