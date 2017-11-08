#### Install the [Node Inspector Manager](https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj?hl=en) to debug NodeJS in a similar fashion to Ruby on Rails apps.

Debugging this project was painful. I had to use console.log for everything, which is obviously bad. It's 2017, get with the program, me! Yes, I did use node's --inspector with its chrome dev tools extension, however the extension didn't really work. It froze up when I tried to use it, so I gave up on DEM FANCY TOOLZ and resorted to console.log, which probably slowed my development process. Well, I know doing it in Ruby + RoR would have been nicer.

I couldn't find info on the internet at all for bootstrapping the current user, which I eventually figured out how to do with the templating engine [Nunjucks](https://mozilla.github.io/nunjucks/).

Getting the app running on Heroku was painful to say the least. With Ruby on Rails, IT JUST WERKZ. With Express + Knex, it does NOT JUST WERKZ. There's probably over ten commits dedicated just to making the app run on Heroku, if not 20+.

To begin learning how to use express with knex and passport, I referenced this [tutorial](http://mherman.org/blog/2016/09/25/node-passport-and-postgres/#.V-gocpMrJE4) and its code.

+ It was a good introduction to [passport](http://passportjs.org/), however, I did have to further configure passport beyond the tutorial's instructions to work with Express sessions.

+ It also barely introduced [Knex.js](http://knexjs.org/), so I spent the entire development process referencing its documentation. It was pretty satisfying to get migrations working. I eventually started using knex.raw for my queries, as it was easier to write pure SQL than learn any more of knex's methods and API. Thus I used knex mainly for migrations and seeding.

### TODO
- Provide detailed instructions on how to build this server
- Ditch Express and learn KOA and Json Web Tokens
- Learn Sails -- NOT!
