const postRouter = require('./post')

const initWebRoute = (app) => {
    app.use('/api/post', postRouter)
}

module.exports = { initWebRoute }

