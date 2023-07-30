/**
 * Controller for grouping requests related to one thing.
 * All methods should be done in the following manners:
 * @static
 * @async
 */
class TestController 
{
    static async testResponse (req, res)
    {
        res.send('hello world!')
    }
}

module.exports = TestController