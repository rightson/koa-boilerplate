#!/usr/bin/env sh

apt-get update
apt-get install -y curl nodejs npm mongodb redis zsh vim
ln -s /usr/bin/nodejs /usr/bin/node
npm install -g n supervisor bower
n latest
