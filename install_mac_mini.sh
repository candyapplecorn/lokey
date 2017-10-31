<<<<<<< HEAD
=======
# CHANGE THESE IF YOU'RE NOT JOE
git config user.email "candyapplecorn@gmail.com"
git config user.name "Joseph Burger"

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash;
nvm install 8.8.1;

>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
bundle && \
npm i && \
bundle exec figaro install && \
curl https://raw.githubusercontent.com/candyapplecorn/write-it-up/master/Rakefile > Rakefile && \
secret=`rails secret` && \
cp config/development_secrets.yml config/secrets.yml && \
cd backend-nodejs && \
<<<<<<< HEAD
npm i && \
npm i -g knex && \
=======
cp dummy_dotenv .env && \
npm i && \
npm i -g knex gulp && \
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
cd .. && \
rails db:setup
