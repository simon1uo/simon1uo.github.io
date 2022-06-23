#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
currentDate=$(date +%Y-%m-%d-%H:%M)

# 生成静态文件
npm run generate

# 进入生成的文件夹
cd dist

# deploy to github pages
msg='deployed: '
githubUrl=git@github.com:simon1uo/simon1uo.github.io.git
git init
git add -A
git commit -m "${msg} 📣 gh-pages generated:${currentDate}"
git push -f $githubUrl main:gh-pages # 推送到github gh-pages分支

cd -
rm -rf dist
