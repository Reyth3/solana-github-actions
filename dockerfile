FROM projectserum/build:v0.25.0

WORKDIR /usr/src/app

COPY package*.json ./
COPY Cargo.* ./
COPY Anchor.toml ./


COPY ./programs ./programs
COPY ./tests ./tests

CMD [ "anchor", "build"]