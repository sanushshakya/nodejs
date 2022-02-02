//axios

const axios = require('axios');

//promise concept

const getNews = () => {
    return axios.get("https://newsapi.org/v2/everything?q=apple&from=2022-01-01&to=2022-01-30&sortBy=popularity&apiKey=01c09a2e8b8b4d23ac69b4b6120df59d")
}

module.exports={
    getNews,
  }