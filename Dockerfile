FROM rust:1.86.0 as build

ENV PKG_CONFIG_ALLOW_CROSS=1

WORKDIR .
COPY ./api ./api
COPY ./libseptastic/ ./libseptastic/


RUN cd api && cargo install --path .

ENV RUST_LOG=info
ENV EXPOSE_PORT=80

EXPOSE 80
ENTRYPOINT ["./api/septastic_api"]
