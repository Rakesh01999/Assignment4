function calculateMoney(ticketSale) {
    if(ticketSale<0){
        return 'Invalid Number';
    }
    const remainingMoney = (ticketSale*120) - (500 + (8*50)) ;
    return remainingMoney ;
}


function checkName(name) {
    if(typeof name != 'string'){
        return 'invalid' ;
    }
    name = name.toLowerCase();
    const nameSize = name.length;
    if(name[nameSize-1]=='a' || name[nameSize-1]=='y' || name[nameSize-1]=='i' || name[nameSize-1]=='e' || name[nameSize-1]=='o' || name[nameSize-1]=='u' || name[nameSize-1]=='w'){
        return 'Good Name';
    }
    else{
        return 'Bad Name';
    }
}


function deleteInvalids(array) {
    if(Array.isArray(array) == false){
        return 'Invalid Array';
    }
    let newArr = [];
    for(let i=0;i<array.length;i++){
        if(typeof array[i] == 'number'){
            if(!isNaN(array[i])){
                newArr.push(array[i]);
            }
        }
    }
    return newArr;
}


function password(obj) {
    const propertyLength = Object.keys(obj).length;
    if(propertyLength != 3){
        return 'invalid';
    }
    const brStr = obj.birthYear.toString();
    if(brStr.length != 4){
        return 'invalid';
    }
    let WebsiteName = obj.siteName[0].toUpperCase()+'';
    for(let i=1;i<obj.siteName.length;i++){
        WebsiteName+=obj.siteName[i];
    }

    const result = WebsiteName+'#'+obj.name+'@'+obj.birthYear;    
    return result ;
}


function monthlySavings(arr , livingCost) {
    if(Array.isArray(arr)==false || typeof livingCost!='number'){
        return 'invalid input';
    }
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=3000){
            sum+=arr[i]-(arr[i]*20/100);
            continue ;
        }
        sum+=arr[i];
    }
    const savings = sum - livingCost ;
    if(savings >= 0){
        return savings;
    }
    else{
        return 'earn more';
    }
}

// Assignment4
