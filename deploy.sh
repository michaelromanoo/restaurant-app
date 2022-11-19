#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'feat: deploy to github pages'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:michaelromanoo/restaurant-app.git master:gh-pages

cd -