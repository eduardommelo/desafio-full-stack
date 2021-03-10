const { RegisterPOST, UpdatePUT, DropDELETE, FindGET, FindPOST  } = require('../controller/Datas')
const JwTMiddleware = require('../controller/JWT')

module.exports = (app) => {
    
    app.route('/api/register')
    .post(JwTMiddleware , RegisterPOST)

    app.route('/api/update')
    .put(JwTMiddleware, UpdatePUT)

    app.route('/api/delete')
    .delete(JwTMiddleware ,DropDELETE)

    app.route('/api/users')
    .get(JwTMiddleware ,FindGET)
    .post(JwTMiddleware, FindPOST)

}