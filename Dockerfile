FROM nginx:alpine

WORKDIR /site

COPY . .

RUN apk add bash
RUN /bin/bash compile.sh
RUN cp -r ./out/* /usr/share/nginx/html
