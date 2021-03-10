const { RequestPOST, RequestGET } = require('../controller/Authorization')
const JwTMiddleware = require('../controller/JWT')
module.exports = (app) => {

    app.route('/api/login')
    .post(RequestPOST)
    .get(JwTMiddleware, RequestGET)

}