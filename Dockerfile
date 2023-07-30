FROM nginx:stable

WORKDIR /site

COPY . .

RUN /bin/bash compile.sh
RUN cp -r ./out/* /usr/share/nginx/html
