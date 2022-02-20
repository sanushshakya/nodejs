const jwt = require('jsonwebtoken');

const secret = "2mI5z99SXwrOGo3hPxeA";

const generateToken = (payload) => {
    return jwt.sign(payload, secret, { expiresIn: '1h'  })
}

const validateToken = (token) => {
    try { 
        return {
            data: jwt.verify(token, secret)
        };
    }catch(e) {
        return {
            error: "Invalid Token"
        };
    }
}

module.exports = {
    generateToken,
    validateToken
}