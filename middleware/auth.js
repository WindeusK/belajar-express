const auth = (req,res,next) => {
    require('dotenv').config()
    const bearerToken = req.headers['bearer-token']
    if (!bearerToken || (bearerToken != process.env.BEARER_TOKEN))
    {
        res.status(401)
        res.send('sorry, unauthorised')
    }
    next()
}

module.exports = auth
