#!/usr/bin/env bash

npm run build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy"  &&
git remote add origin https://github.com/zhangxiaolin999/bil-website.git  &&
git push -u origin master -f
cd -