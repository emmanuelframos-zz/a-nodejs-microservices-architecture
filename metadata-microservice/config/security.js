const logger = require('winston');

const securityCheck = async ()=>{
    logger.info('Security checked.')
}

module.exports = {
    securityCheck:securityCheck
}