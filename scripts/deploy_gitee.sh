#!/usr/bin/env bash

npm run build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy"  &&
git remote add origin https://gitee.com/zhang19980107/bil-website.git  &&
git push -u origin master -f
cd -