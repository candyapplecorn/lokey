bundle && \
npm i && \
bundle exec figaro install && \
curl https://raw.githubusercontent.com/candyapplecorn/write-it-up/master/Rakefile > Rakefile && \
secret=`rails secret` && \
cp config/development_secrets.yml config/secrets.yml && \
cd backend-nodejs && \
npm i && \
npm i -g knex && \
cd .. && \
rails db:setup
