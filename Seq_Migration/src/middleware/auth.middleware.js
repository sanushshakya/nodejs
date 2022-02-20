const { validateToken } = require('../utils/jwt.utils');

const checkAuthenticate = async (req, res, next) => {
    if (req.cookies["authToken"]) {
        const token = req.cookies.authToken;
        const decoded = await validateToken(token);
        if (decoded.error) {
            return res.status(404).send(decoded);
        }
        req.user = decoded.data;
        return next();
    }
    else {
        return res.status(401).send(
            {
                "message": 'You are not authorized.'
            }
        )
    }
}

module.exports = {
    checkAuthenticate
}