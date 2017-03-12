FROM nginx:latest
ADD . /code
WORKDIR /code
RUN apt-get -y update
RUN apt-get -y install nodejs-legacy
RUN apt-get -y install npm
RUN npm install  --silent
COPY config/nginx/default.conf /etc/nginx/nginx/conf.d

