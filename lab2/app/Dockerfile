FROM node

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 3000

HEALTHCHECK --interval=60s --timeout=30s --start-period=5s --retries=3 CMD ["curl", "--fail", "http://localhost:3000/healthcheck", "||", "exit 1"]

CMD [ "node","index.js" ]