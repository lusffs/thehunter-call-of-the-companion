#!/bin/bash
wget -O release.tar.gz https://github.com/lusffs/thehunter-call-of-the-companion/releases/download/$1/build.tar.gz
sudo rm -r /var/www/cotw.studiolus.com/public_html/*
tar -xzvf release.tar.gz -C /var/www/cotw.studiolus.com/public_html/
rm release.tar.gz