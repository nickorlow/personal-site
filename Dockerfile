FROM ubuntu as build-env

WORKDIR /site
COPY . .
RUN /bin/bash compile.sh

FROM ghcr.io/nickorlow/anthracite:0.2.1
COPY --from=build-env /site/out/ /www/
