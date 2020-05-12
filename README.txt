
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

Webview:
android:
https://tiagoaguiar.co/webview-android-tutorial
ios:
http://agenciadac.com.br/blog-ios/criando-um-web-view-no-iphone/

 
# script para iniciar parse-server, parse-dashboard e graphql
var fs = require('fs');
var http = require('http');
var https = require('https');
var express = require('express');
//var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
var app = express();
var port = 1337;
const { default: ParseServer, ParseGraphQLServer } = require('parse-server');

var options = {
    key: fs.readFileSync('./key.pem', 'utf8'),
    cert: fs.readFileSync('./server.crt', 'utf8'),
};

//databaseURI: 'mongodb://localhost:27017/test22',

const parseServer = new ParseServer({
  databaseURI: 'postgres://postgres:apirest@localhost:5432/api',
  appId: 'aulaparse',
  masterKey: 'aulaparse',
  serverURL: 'http://localhost:1337/parse',
  publicServerURL: 'http://localhost:1337/parse'
});
;

var dashboard = new ParseDashboard({
    "apps": [{
        "serverURL": "https://aws.magnani.ind.br:1337/parse",
        "graphQLServerURL": "https://aws.magnani.ind.br:1337/graphql",
        "appId": "aulaparse",
        "masterKey": "aulaparse",
        "appName": "aulaparse"
    }],
    "users": [{
        "user": "admin",
        "pass": "aulaparse"
    }]
});

const parseGraphQLServer = new ParseGraphQLServer(
  parseServer,
  {
    graphQLPath: '/graphql',
    playgroundPath: '/playground'
  }
);

//app.use('/parse', parse);
app.use('/parse', parseServer.app);
app.use('/dashboard', dashboard);

parseGraphQLServer.applyGraphQL(app); // Mounts the GraphQL API
parseGraphQLServer.applyPlayground(app); // (Optional) Mounts the GraphQL Playground - do NOT use in Production


var server = https.createServer(options, app).listen(port, function() {
    console.log("server listening on port " + port);
});

#fim script para iniciar



igor, Lucas, Teilor, Tiago B -> CSS Grid: 

Sass/Scss: emanuel, daniel, thiago, leonardo, gabriel - SCSS

Axel, Jonathan, Gabriel Turati, Filipe - FlexBox



https://docs.parseplatform.org/graphql/guide/



sudo add-apt-repository ppa:ondrej/php
apt update
apt-cache search php |grep server
apt  install apache2 php7.4 mysql-server
 
/etc/init.d/apache2 start
 
 
cd /var/www/
 
 
wget https://download.moodle.org/download.php/direct/stable38/moodle-latest-38.tgz
 
tar xzvf moodle-latest-38.tgz
 
chown www-data.www-data moodle -R
 
mkdir moodledata
chown www-data.www-data moodledata/ -R
 
cd www/html/
 
cd moodle/
 
 
apt install php7.4-curl
apt install php7.4-zip
apt install php7.4-mysql
apt install php7.4-xml
apt install php7.4-gd
apt install php7.4-intl

/etc/init.d/apache2 restart
 
mysql -p root
mysql -p


create database moodle;
create user moodle@localhost identified by 'Senha@123'; 
grant all on moodle.* to moodle@localhost;

 
 

/etc/init.d/apache2 restart


WebDesign@2020



