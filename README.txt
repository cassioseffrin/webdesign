
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



apt install postgresql-10 
psql
create database apirest

passwd postgres
  su - postgres
psql -c "ALTER USER postgres WITH PASSWORD 'apirest';"


Node.js v12.x:


curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
 
Node.js v13.x:

curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs

apt install npm
criar os certificados e montar o script js
https://stackoverflow.com/questions/58193944/parse-server-running-with-postgres-parse-error-error-column-rperm-does-not?rq=1


npm init 
npm install express
npm install parse-server
npm install parse-dashboard
node iniciaParseServer.sh

Referencias:
https://github.com/parse-community/parse-server
https://github.com/parse-community/parse-dashboard

https://parseplatform.org/

https://www.youtube.com/watch?v=o522ovITvW4
https://www.youtube.com/watch?v=Em5grOlQNFQ


#apt install -y mongodb

#mongo

#db.createUser(
  {
    user: "Cassio",
    pwd: "123",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

npm install -g parse-server mongodb-runner parse-dashboard express
mongodb-runner start

query{
  objects{
    findCliente (where: { idade: {_gte:20}}){
      count
      results {nome}
    }
  }
}


##link para estudar o graphql
http://apis.guru/graphql-apis/



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



