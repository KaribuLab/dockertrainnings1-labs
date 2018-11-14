FROM node AS lab1.build

COPY . /app

WORKDIR /app

RUN npm install && \
    npm install -g nexe && \
    nexe -i index.js -o /usr/bin/lab1

FROM buildpack-deps:stretch

COPY --from=lab1.build /usr/bin/lab1 /usr/bin/lab1

EXPOSE 3000

CMD [ "/usr/bin/lab1" ]