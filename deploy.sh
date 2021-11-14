#!/usr/bin/env sh
# abort on errors
set -e

git add -A
git commit -m 'code push'
git push -f git@github.com:naseradd/arthur-coach.git

# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:naseradd/arthur-coach.git master:gh-pages
cd -



