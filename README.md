# allekurierpl

To run e2e tests:
```
...\allekurierpl> npm install 

...\allekurierpl> npm run cy:firefox
```

To run e2e tests in Docker (PowerShell):
```
...\allekurierpl> npm install

...\allekurierpl> docker run --rm -v ${PWD}:/e2e -w /e2e cypress/included:12.8.1 --browser firefox
```