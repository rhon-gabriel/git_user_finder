FROM node:16-slim

ADD . /react_app
WORKDIR /react_app
RUN npm install