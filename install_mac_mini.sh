# To set up your configs just type
# bash thisscript.sh "your name" "your@email.com"

if [[ $1 && $2 ]]; then
	git config user.email "$2"
	git config user.name "$1"
else
	git config user.email "candyapplecorn@gmail.com"
	git config user.name "Joseph Burger"
fi;

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash;
nvm install 8.8.1;
nvm use 8.8.1;

bundle && \
npm i && \
bundle exec figaro install && \
curl https://raw.githubusercontent.com/candyapplecorn/write-it-up/master/Rakefile > Rakefile && \
secret=`rails secret` && \
cp config/development_secrets.yml config/secrets.yml && \
cd backend-nodejs && \
cp dummy_dotenv .env && \
npm i && \
npm i -g knex gulp && \
cd .. && \
rails db:setup && \

cd backend-nodejs && \
npm rebuild node-sass --force && \
createdb passport_local_knex;
npm run knex:reset && \
atom ..
