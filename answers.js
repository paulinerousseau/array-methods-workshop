
// printPositives
var myNumArr = [1,-2,3,-6];

function printPositives(num){
    if (num>0){
        console.log(num)
    }
}
   myNumArr.forEach(printPositives);
   
   // getPositives
   
var myNumArr = [1,-2,3,-6];

function getPositives(num){
    return num>0; 
    }
    myNumArr.filter(getPositives);
      
// exo 2B

var myNumArr = [1,-2,3,-6];

function returnPositives(num){
    if (num>0){
        return (num);
    }
};
function printPositives(num){
    if (num>0){
        console.log(num);
    }
}

myNumArr.filter(returnPositives).forEach(printPositives); 
       
// filterArray
function filterArray(arr,fct){
    return arr.filter(fct);
};

// longestWord

var str = 'uuhirueg wjgwrk wrgunrkrgnw';
function longestWord(str) {
var words = str.split(' ');
     return words.reduce(function(a,b){
        if(a.length > b.length){
            return a;
        } else {
            return b;
        }
      })
};

longestWord(str)
