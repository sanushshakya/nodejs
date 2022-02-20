const {User} = require('../models');
const {renderIndex} = require('./home.controller')
const { generateToken } = require('../utils/jwt.utils')


const renderLogin = async (req, res) => {
    try {
        res.render('login', {
          layout: "./loginLayout.hbs"
        })
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "something went wrong", error });
      }
}

const userLogin = async (req, res) => {
  const { Username, Password } = req.body;
  try {
    const user = await User.findOne({
      raw: true,
      where: {
        Username,
      }
    });
    if(user)
    {
      if (Password == user.Password){
        const payload = { id: user.id, username: user.username}
        const token = generateToken(payload);
        res.cookie("authToken", token, {
          httpOnly: true,
          maxAge: 1200000
      })
      return res.redirect('/')
      }
      else{
        return res.status(500).json({ "message": "Password Incorrect"});
      }
    }
    else {
      return res.status(200).send({
        "message": "Account not created yet."
      })
    }
  } catch (e) {
    return res.status(400).send({ message: e.toString() })
  }
}



const renderSignup = async (req, res) => {
  try {
    res.render('signup', {
      layout: './loginLayout.hbs'
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong", error });
  }
}

const createUser = async (req, res) => {
  const {Name, Username, Password} = req.body;
  try {
    const user = await User.findOne({
      raw: true,
      where: {
        Username
      }
    });
    if (user)
    {
      return res.status(200).send({
        "message": "Email already exists."
      })
    }
    if(!user)
    {
      await User.create({
        Name,
        Username,
        Password
      });
      // const payload = { id: User.id, Username }
      // const token = generateToken(payload);
      // console.log(token);

      return res.status(200).send('Account Created.')
    }
  }catch (e) {
    return res.status(400).send({ message: e.toString() })
  }
}

module.exports = {
    renderLogin,
    userLogin,
    renderSignup,
    createUser
}
