const TestController = require('./controllers/TestController')

/**
     * Helper function to assign routes to the Express Router in the main app file.
     * 
     * @param {Router} router - Express Router Object to assign the routes to
     * @returns {undefined | Error}
     * 
*/
function assignRoutes (router)
{
    router.get('/', TestController.testResponse)
}

module.exports = assignRoutes
