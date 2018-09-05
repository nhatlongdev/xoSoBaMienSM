const apiGetDataFromServer = 'http://api.xoso98.com/logicandroid.php?id=lotteryresultlist&from_date=2018-01-01%2000:00:00';

async function getDataLottery() {
    try {
        let response = await fetch(apiGetDataFromServer);
        let responseJson = await response.json();
        return responseJson.bodyitems;
    } catch (error) {
        console.log(error)
    }
}

export {getDataLottery};