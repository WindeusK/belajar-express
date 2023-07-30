/**
 * Controller for grouping requests related to one thing
 */
class TestController 
{
    static async testResponse (req, res)
    {
        res.send('hello world!')
    }
}

module.exports = TestController