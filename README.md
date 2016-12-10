# Koa Boilerplate

Yet another Koa boilerplate for Koa 2 with async/await syntax sugar.

# Dependencies

    - Node.js (6.x+)
    - Yarnpkg (or npm)
    - Mongodb

# Install Dependencies

    make install

or

    yarn global add nodemon pm2
    yarn

or

    npm install -g nodemon pm2
    npm install


# Run Development Server

    make dev
or

    nodemon

# Run Staging Server

    make staging


# Run Production Server

    make production


# Watch Production Processes

    pm2 list

# Environment Variables for Development

    PORT        - server port, default is 3000
    NODE_ENV    - environment mode, 'production' for production, otherwise for others
    LOG         - log file name, default is koa-boilerplate.log
