'use strict';

// YOU KNOW WHAT TO DO //
(function() {
    

/**
identity: Designed to return the same value that is used as the argument.

@param {value} value to be both to be passed and returned when the function 
is called. This will be the result of the function when is called.
@return {value} is the value that will inside the function that will be returned
*/
function identity (value){
    return value;
};

module.exports.identity = identity;

/**
 * typeOf: This accept one parameter, a <value>, and return (as a string)
 * which type of Javascript component the <value> is. For example, if a a array
 * is passed, it will return 'array'. This is to supplement the native
 * function 'typeof' which does not disnguish between and array or object. The 
 * function 'typeof' also does not specifically identify null values or Dates as
 * such. 
 * 
 * @param {value} is the value to be evaluated and it's type identified
 * @return {typeof(value)} returns the type of any value that is not a 'null', 
 * 'Date', or 'array'
*/

function typeOf (value){
    if(value === null) return 'null';
    if(value instanceof Date) return 'Date';
    if(Array.isArray(value)) return 'array';
    return typeof(value);
};

module.exports.typeOf = typeOf

/** 
 * first: Returns the first element of an <array> OR the first <n> elements of the 
 * array. Takes two parameter: 'array' and 'n' and if no number(<n>) returns the 
 * first <n> number of elements in the array. 
 * 
 * If no <n> is provided, it will return the first number. This will return an 
 * empty list if numerical argument is not a positive number. This function is 
 * the reverse of the function 'last'
 * 
 * @param {array} is the array from which a number or set of numbers will be 
 * pulled from
 * @param {n} is the amount of numbers to extract from the array, starting at the 
 * FIRST elements
 * @return {return array.slice(0, n);} returns the number values from the first
 * number in the array to the 'nth' number
 * 
*/

function first (array, n) {
    if(!Array.isArray(array) || n < 0 ) return[];
    if(n === undefined || typeof n !== 'number' || n === 1) return array[0];
    return array.slice(0, n);
};

module.exports.first = first

/** 
 * last: Returns the last element of an <array> OR the last <n> elements of the 
 * array. Takes two parameter: 'array' and <n> and if no number(<n>) returns the 
 * last <n> number of elements in the array. 
 * 
 * If no <n> is provided, it will return the last number. This will return an 
 * empty list if numerical argument is not a positive number. This function is 
 * the reverse of the function 'first'
 * 
 * @param {array} is the array from which a number or set of numbers will be 
 * pulled from
 * @param {n} is the amount of numbers to extract from the array, starting at the 
 * LAST elements
 * @return {return array.slice(array.length - n);} returns the number values from
 * the last number in the array to the 'nth' number
*/
function last (array, n){
    if(!Array.isArray(array) || n < 0) return [];
    if(n === undefined || typeof n !== 'number' || n === 1) return array[array.length -1];
    if(n > array.length) return array
    return array.slice(array.length - n);
};

module.exports.last = last

/**
 * each: Designed to loop over a collection, Array or Object, and applies the action 
 * Function to each value in the collection.
 * 
 * @param {Array or Object} collection The collection over which to iterate.
 * @param {Function} action The Function to be applied to each value in the 
 * collection
 */
function each (collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
};

module.exports.each = each;

/**
 * indexOf: Will return the index of an <array> at which a specific <value> can 
 * be found. This will return the index of the first occurance of a matching <value> 
 * and no others. If the value doesn't exist in the array, indexOf will 
 * return -1.
 * 
 * @param {array} is the array over which to iterate
 * @param {value} is the value to match and return the index of
 * @return {-1} returns -1 if no value is passed
 */ 
function indexOf (array, value) {
    for(var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
};

module.exports.indexOf = indexOf

/**
 * _.fiter: Looks through each value in an <array>, returning an array of 
 * all the values that pass a <test>. The <test> as a function pass the 
 * arguments: an element, it's index, <array>
 * 
 * @param {array} is the array over which to iterate
 * @param {test} is a function used to evaluate 
 * @return {output} returns the array of values that passed the test
 */
function filter (array, test) {
    var output = [];
    for(var i = 0; i < array.length; i++){
        if(test(array[i], i, array)) {
            output.push(array[i])
        }
    }
    return output;
};

module.exports.filter = filter

/**
 * _.reject: Looks through each value in an <array>, returning an array of 
 * all the values that DO NOT pass a <test>. The <test> as a function pass the 
 * arguments: an element, it's index, <array>
 * 
 * @param {array} is the array over which to iterate
 * @param {test} is a function used to evaluate 
 * @return {output} returns the array of values that failed the test
 */
function reject (array, test) {
    var output = [];
    for(var i = 0; i < array.length; i++){
        if(test(array[i], i, array) === false) {
            output.push(array[i]);
        }
    }
    return output;
};

module.exports.reject = reject

/**
 * _.partition: Looks through each value in an <array> and returns two separate
 * arrays: 
 *  1. In which all the values that pass a <test>.
 *  2. In which all the values that DO NOT pass a <test>.
 * 
 * This function leverages the functions _.filter AND _.reject to produce the 
 * two test results and corresponding arrays.
 * 
 * @param {array} is the array over which to iterate
 * @param {test} is a function used to evaluate 
 * @return {output} returns two arrays: one of values that passed AND one of 
 * values that failed the test
 */ 
function partition (array, test) {
    var output = [];
    output.push(filter(array, test));
    output.push(reject(array, test));
    return output;
};

module.exports.partition = partition;

/**
 * _.unique: Will evaluate an <array> and return an <array> with any duplicate
 * values removed.
 * @param {array} is the array to be evaluated
 * @return {output} returns the array with duplicates removed
 */ 
function unique (array) {
    var output = filter(array, function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    return output;
};

module.exports.unique = unique;

/**
 * _.map: Will iterate over an array or object and <transform> it into a new, 
 * distinct array. The <transform> function will take the values of the 
 * collection and create a new array without changing the original collection or 
 * it's values. It uses the function _.each to map through both objects and 
 * arrays.
 * 
 * @param {collection} is the collection (array or object) over which to iterate
 * @param {transform} is the function which 'maps' over the collection and pushes
 * the new values into the resulting array.
 * @return {transformed} returns the resulting new array after passing the variables
 */ 
function map (array, transform){
    const transformed = [];
    each(array, function(value, i, array) {
        transformed.push(transform(value, i, array));
    });
    return transformed;
};

module.exports.map = map;

/**
 * _.pluck: Will pluck properties out of a list of objects. This function uses
 * _.map to loop over a collectiona and return its properties.
 * 
 * @param {array} is the array or object over which to iterate and extract from
 * @param {property} is the property that will be returned 
 * @return {_.map} calls the map function to loop over the array
 * @return {return object[property];} returns the property that has been 'plucked'
 */
function pluck (array, property) {
       return map(array, function (object, i, array) {
           return object[property];
       });
   };

module.exports.pluck = pluck;

/**
 * _.contains: Will take an <value> and determine if it exists as part of an
 * <array>. If no value is given it will return 'false'
 * 
 * @param {array} is the array to over which to iterate
 * @param {value} is the value that will be evaluated and determined to exist
 * @return {true} returns true if any values are true
 * @return {false} returns false if any values are false
 */
function contains (array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
};

module.exports.contains = contains;

/**
 * _.every: Will call a <function> for every element of <collection> and return 
 * true when all iterations are true. It return false when not all iterations 
 * are true. It will return true for truthy results when no function is passed 
 * in. It will return false for falsy results when no function is passed in.
 * 
 * @param {collection} is the array or object to over which to iterate
 * @param {test} is a function that will evaluate the collection  
 * @return {true} returns true if every element is truthy and no <function> is passed
 * @return {false} returns false if every element is falsey and no <function> is passed
 * @return {false} returns false if the collection is an array and even one value
 * is false
 * @return {false} returns false if the collection is an object and even one value
 * is false
 * @return {true} returns true if all values are true
 */
function every (collection, test) {
    if(!test) {
        for(var i = 0; i < collection.length; i++) {
            if(collection[i] === true){
                return true
            }
        }
        return false;
    }
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++) {
            if(test(collection[i], i, collection) === false){
                return false;
            }
        }
    } else {
        for(var key in collection) {
          if(test(collection[key],  key, collection) === false) {
              return false;
          }
        }
    }
    return true;
};

module.exports.every = every;

/**
 * _.some: Will call a <function> for every element of <collection> and return 
 * true when at least one of the iterations are true. It return false when none 
 * of the iterations are true. It will return true for truthy results when no 
 * function is passed in. It will return false for falsy results when no function 
 * is passed in.
 * 
 * @param {collection} is the array or object to over which to iterate
 * @param {test} is a function that will evaluate the collection  
 * @return {true} returns true if some element is truthy and no <function> is passed
 * @return {false} returns false if some element is falsey and no <function> is passed
 * @return {true} returns true if the collection is an array and at least one value
 * is false
 * @return {true} returns true if the collection is an object and at least one value
 * is false
 * @return {false} returns true if all values are false
 */
function some (collection, test) {
    if(!test) {
        for(var i = 0; i < collection.length; i++) {
            if(collection[i] === true){
                return true
            }
        }
        return false;
    }
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++) {
            if(test(collection[i], i, collection) === true){
                return true;
            }
        }
    } else {
        for(var key in collection) {
          if(test(collection[key],  key, collection) === true) {
              return true;
          }
        }
    }
    return false;
};

module.exports.some = some;

/**
 * _.reduce: Will 'reduce' a list of values into a single value. It will call a 
 * <function> for every element in <collection> and pass the arguments: previous
 * result, element, index. It will It produces a result based on a <test> 
 * function. On the very first iteration, it will use <seed> as the "previous 
 * result". If no <seed> is given, it will use the first element of the 
 * <collection> as the value for <seed>. Finally, after the last iteration, it 
 * will return the return value of the last call of <function>.
 * 
 * @param {arr} is the array or object to over which to iterate
 * @param {test} is a function that will evaluate the collection 
 * @param {seed} is the 'previous result' that is passed in for each iteration 
 * over the collection.
 * @return {seed} returns the result of the test fucntion which has been set as 
 * the value of 'seed'
 * @return {seed} returns the result of the test fucntion which has been set as 
 * the value of 'seed'
 */
function reduce(arr, test, seed) {
    if (seed === undefined) {
           seed = arr[0];
        for (var i = 1; i < arr.length; i++) {
           test(seed, arr[i], i);
           seed = test(seed, arr[i], i);
       }
       return seed;
    }

    for(var i = 0; i < arr.length; i++) {
        test(seed, i, arr[i]); 
        seed = test(seed, i, arr[i]); 
    }
    return seed;
};

module.exports.reduce = reduce;

/**
 * extend: Will take and <object> and any number of other objects that are 
 * passed in and copy their properties to <object 1> as well, in the order they 
 * are passed in. It will extend an object and overwright its existing properties.
 *  
 * @param {object1} is the object that all the properties will be copied to
 * @param {... objectN} represents the variable number of objects that can be passed
 * @return {object1} returns the 'copy to' object with its new values
 */
function extend (object1, ... objectN){ // REFERENCE README Document
    for(var i = 0; i < objectN.length; i++) {
        for(var key in objectN[i])
            object1[key] = objectN[i][key];
    }
        return object1;
};

module.exports.extend = extend;

}());

