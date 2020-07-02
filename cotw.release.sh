#!/bin/bash
wget -O release.tar.gz "$1"
sudo rm -r /var/www/cotw.studiolus.com/public_html/*
tar -xzvf release.tar.gz -C /var/www/cotw.studiolus.com/public_html/
rm release.tar.gz