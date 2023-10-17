FROM ghcr.io/nickorlow/anthracite:main

WORKDIR /site

COPY . .

RUN /bin/bash compile.sh
RUN cp -r ./out/* /www/
