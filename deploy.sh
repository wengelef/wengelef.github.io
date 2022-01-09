echo build...
npm run build
echo done

cd dist

echo deploy...
git init
git add -A
git commit -m "deploy"
git push -f https://github.com/wengelef/wengelef.github.io.git master
echo done
