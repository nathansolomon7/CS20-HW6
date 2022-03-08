
//checks if two values are amicable on click of the submit button
 $("#submitButton").click(function() {
     var value1 = $("#val1").val();
     var value2 = $("#val2").val();
     factorsOfval1 = calculateFactors(value1);
     factorsOfval2 = calculateFactors(value2);
     isAmicableString = isAmicable(factorsOfval1, factorsOfval2, value1, value2);
     displayResults(value1, value2, isAmicableString);
     displayFactors(factorsOfval1, factorsOfval2, value1, value2);
 });
 
//sums all the values stored in an array and returns the sum
function sumUpArrayValues(factorsOfval1){
    partialSum = 0;
    sumofVal1 = factorsOfval1.reduce((partialSum, a) => partialSum + a, 0);
    return sumofVal1;
}

//displays the results of the program to a div
function displayResults(value1, value2, isAmicableString) {
    let resultsHTML = `The numbers ${value1} and ${value2} ${isAmicableString} amicable`; 
     resultsDiv.innerHTML = resultsHTML;
 };
     
// displays the factors of a value to a div
function displayFactors(factorsOfval1, factorsOfval2, value1, value2) {
    let factorsVal1String = `Factors of ${value1}: ${factorsOfval1} <br>
    Factors of ${value2}: ${factorsOfval2}`; 
     displayFactorsDiv.innerHTML = factorsVal1String;
};
//returns an array of factors for a specfic inputted value
function calculateFactors(val) {
    var factors = new Array();
    
    for (let i = 1; i < val; i++) {

        //checking if any of the values up to the inputted value is a factor
        if (isAFactor(val, i)) {
            factors.push(i);
        }
    }
    return factors;

};

function isAmicable(factorsOfval1, factorsOfval2, value1, value2) {
    var isAmicable;
    sumofVal1 = sumUpArrayValues(factorsOfval1);
     sumofVal2 = sumUpArrayValues(factorsOfval2);

    if(sumofVal1 == value2 && sumofVal2 == value1) {
        isAmicableString = "are";
        return isAmicableString;
    }
    
    isAmicableString = "are not";
    return isAmicableString;
    
};

// check if a value is a potential factor of another value that is inputted 
//into the program
function isAFactor(val, potentialFactor) {
    if (val % potentialFactor == 0) {
        return true;
    }
    return false;
}



