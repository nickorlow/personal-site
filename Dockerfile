FROM nginx:alpine

WORKDIR /site

COPY . .

RUN ls
RUN /bin/sh compile.sh
RUN cp -r ./out/* /usr/share/nginx/html