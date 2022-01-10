function countLetter(str){
    let tempArr = str.split('');
    let count = 0;
        for(let i=0; i<tempArr.length;i++)
            if(tempArr[i] == "a"){
                count++;
            }
        return count;
    }
    console.log('Count of Letter is ' + countLetter('chayaporn'));