#!/usr/bin/env sh

# abort on errors
set -e

# build
pnpm docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add .
git commit -m 'deploy'
git push origin HEAD:gh-pages

cd -