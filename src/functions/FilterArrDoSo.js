function filterArrDoSo(data, numberFilter, soLanQuay){
    var mangData = [];
    console.log('CHAY DYYYY: ' + data.length)
    for(var i=0; i<soLanQuay ; i++){
        if(data[i] == null) break;
        for(j =0; j<data[i].length;j++){
            console.log('CHAY FOR: ')
            var sub = data[i][j].number.substr(data[i][j].number.length -2,2);
            if(sub == numberFilter){
                mangData.push(data[i][j]);
            }
        }
    }
    return mangData;
};

export {filterArrDoSo};