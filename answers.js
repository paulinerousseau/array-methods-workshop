
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

var str = 'I am hungry';
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

//vowels
var str = "I am hungry";
function countVowels (str) {
    return str.split("").reduce(function(a,b){
    return a + ('aeiouyAEIOUY'.indexOf(b)>-1);
},0);
};

countVowels(str);

// infinity 

function highLow (arr){
     var arr = [1, -10, 20, 40, 5];
     return arr.reduce(function(a,b){
     if (b > a.highest){
         a.highest=b;
     }
     if (b < a.lowest) {
         a.lowest=b;
     }
         
     return a;      
    },{highest: -Infinity, lowest: Infinity});
}



//countChars

var str = "hello world";

function countChars(str) {
  return str.split("").reduce(function(letterCount, letter) {

    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
    return letterCount;
  }, {});
};

countChars(str);





