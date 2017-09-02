const { uid } = require('./uid')
module.exports.task = () => ({ id: uid() })
