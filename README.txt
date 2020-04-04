
mkdir nomeprojeto
npm init -y
npm i rxjs webpack webpack-dev-server typescript ts-loader
npm i  webpack-cli --dev

adicionar no package.json:
"scripts": {
    "start" : "webpack-dev-server --mode development",

criar :
webpack.config.js
tsconfig.json
index.html !
npm  start


npm install --save esm

O Node ainda não suporta importações do ES6. 
A solução chama-se esm, o carregador de módulo JavaScript brilhantemente simples, sem babel e sem pacote.
Instale o esm em seu projeto: npm install --save esm
Execute seu código com esm: node -r esm arquivo.js
E deve funcionar sem nenhuma modificação de código. 
Também é possível usando o babel.



Referências:
https://rxjs.dev/
https://rxmarbles.com/
https://reactive.how/



APIs JSON
https://developer.github.com/v3/
https://developer.github.com/v3/search
https://api.github.com/search/users?q=cassioseffrin
https://api.crossref.org/works?rows=50&query.author=seffrin
https://developer.apple.com/documentation/applemusicapi/get_a_catalog_album

SCSS + RXJS
https://css-tricks.com/animated-intro-rxjs/


Google fonts
https://kinsta.com/blog/best-google-fonts/


criamos uma instancia na amazon free tier.->https://aws.amazon.com/pt/ec2/
alternativas aws : godady, MS Azure, google
criamos um subdomínio e apanhamos para IP da AWS

Wordpress:
mysql -p -u root mysql> create database wordpress; 
mysql> create user 'wordpress'@'%' identified by ‘Senha@123'; 
mysql> grant all on wordpress.* to ‘wordpress'@'%';

login wordpress cassio
senha admin: Pets@Concordia