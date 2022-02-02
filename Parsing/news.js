//imports

const apiData = require('./file.utils');
const moment = require('moment');


//async await

const getData = async () => {
    try{
        const getResult = await apiData.getNews();
        const resultData = getResult.data;
        let weekNews1 = [], weekNews2 = [], weekNews3 = [], weekNews4 = [], weekNews5 = [];
        for(let i=0; i<=19; i++){
            let fDate = resultData.articles[i].publishedAt;
            let weekDay = moment(fDate).week();
            if(weekDay == 1){
                weekNews1.push(resultData.articles[i]);
            }
            else if(weekDay == 2){
                weekNews2.push("author:" + " " + resultData.articles[i].author);
                weekNews2.push("title:" + " " + resultData.articles[i].title);
                weekNews2.push("description:" + " " + resultData.articles[i].description);
                weekNews2.push("publishedAt:" + " " + resultData.articles[i].publishedAt);  
            }
            else if(weekDay == 3){
                weekNews3.push(resultData.articles[i].title);
            }
            else if(weekDay == 4){
                weekNews4.push(resultData.articles[i].title);
            }
            else if(weekDay == 5){
                weekNews5.push(resultData.articles[i].title);
            }
            

            //for weeks
            // for(let j=1; j<=7; j++){
            //     if(weekDay==j){
            //         weekNews1.push(resultData.articles[i])
            //         break;
            //     }
            // }
            // for(let j=8; j<=14; j++){
            //     if(weekDay==j){
            //         weekNews2.push(resultData.articles[i])
            //         break;
            //     }
            // }
            // for(let j=15; j<=21; j++){
            //     if(weekDay==j){
            //         weekNews3.push(resultData.articles[i])
            //         break;
            //     }
            // }
            // for(let j=21; j<=27; j++){
            //     if(weekDay==j){
            //         weekNews4.push(resultData.articles[i])
            //         break;
            //     }
            // }
            // for(let j=27; j<=31; j++){
            //     if(weekDay==j){
            //         weekNews5.push(resultData.articles[i])
            //         break;
            //     }
            // }
        }

        console.log("week1:", weekNews1);
        console.log("week2:",weekNews2);
        // console.log("week3:", weekNews3);
        // console.log("week4:", weekNews4);
        // console.log("week5:", weekNews5);
    }catch (error){
        console.log('Error', error);
    }
}


getData();
