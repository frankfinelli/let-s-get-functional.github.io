// #!/usr/bin/env node

'use strict';


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // get this array and establish counter
    let m = 0
    // iterate through the array for the objects
    for (let x = 0; x < array.length; x++) {
        if (array[x]['gender'] === 'male') {
            m++
        }
    }


    // find the key for gender
    // verify if the value is M or Male or whichever variation(s) wanted
    // count the number of males found
    // spit out the number

    return m
};

var femaleCount = function(array) {
    let f = 0

    for (let x = 0; x < array.length; x++) {
        if (array[x]['gender'] === 'female') {
            f++
        }
    }

    return f
};

var oldestCustomer = (array) => {
    let old = ''
    let age = 0

    for (let x = 0; x < array.length; x++) {
        if (array[x]['age'] > age) {
            old = array[x]['name']
            age = array[x]['age']
        }
    }

    return old
};

var youngestCustomer = (array) => {
    let you = ''
    let age = Infinity //probably better way than to hardcode a large number like this
    //and there is...Enter Infinity (cue infinity remix - guru josh project)

    for (let x = 0; x < array.length; x++) {
        if (array[x]['age'] < age) {
            you = array[x]['name']
            age = array[x]['age']
        }
    }

    return you
};

var averageBalance = (array) => {
    //let bln = 0 //sum of balances
    let cnt = 0 //amount of customers w. balances 
    //let mean = (bln, cnt) => bln/cnt 
    let s2n = [] //conversion of strings to numbers


    for (let x = 0; x < array.length; x++) {
        if (typeof array[x]['balance'] !== 'number') {//balances seem to mostly be strings
            s2n.push(array[x]['balance'])
        }/* else if (typeof array[x]['balance'] === 'number') {
            blc += blc
            cnt++
        } we're assuming ALL balances are strings*/
    }

    //conversion time
    for (let x = 0; x < s2n.length; x++) {
        s2n[x] = Number(s2n[x].replace('$', '').replace(',', ''))
    }
    
    //reduce, sum, calc     
    cnt = s2n.length
    let sumstr = s2n.reduce((x, n) => x + n, 0)
    
    return sumstr / cnt
};

var firstLetterCount = (array, char) => {
    let f = 0

    for (let x = 0; x < array.length; x++) {
        if (array[x]['name'][0].toUpperCase() === char || array[x]['name'][0].toLowerCase() === char) {
            f++
        }
    }

    return f
};

var friendFirstLetterCount = (arr, cust, char) => {
    let f = 0

    for (let x = 0; x < arr.length; x++) {
        if (arr[x]['name'] === cust) {
            for (let y = 0; y < arr[x]['friends'].length; y++) {
                if (arr[x]['friends'][y]['name'][0].toUpperCase() === char || arr[x]['friends'][y]['name'][0].toLowerCase() === char) {
                    f++
                }
            }
        }
    }

    return f
};

var friendsCount = (arr, friend) => {
    let mutual = []

    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr[x]['friends'].length; y++) {
            if (arr[x]['friends'][y]['name'] === friend || arr[x]['friends'][y]['name'] === friend) {
                mutual.push(arr[x]['name'])
            }
        }
    }

    return mutual
};

var topThreeTags = (arr) => {
    let top3 = []
    
    //gathering all the tags
    let arrtag = []
    
    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr[x]['tags'].length; y++) {
            arrtag.push(arr[x]['tags'][y])
        }
    }

    //need to count uniques
    let objtag = {}

    for (let x = 0; x < arrtag.length; x++) {
        if (objtag[arrtag[x]]) {
            objtag[arrtag[x]]++
        } else {
            objtag[arrtag[x]] = 1            
        } 
    }

    //sorting hat
    top3 = Object.entries(objtag) //turns object kvps into array items
        .sort((i, j) => j[1] - i[1]) //sort method found, need to get back to it
        .slice(0, 3) //at index 0, return only the next 3
        .map(k => k[0]) //need to really learn map too

    //also, chaining like this is possible with this format, looks nice and clean, too


    
   
    return top3 //eventually returns top 3
};

var genderCount = (arr) => {
    let gend = {
        male: 0,
        female: 0,
        'non-binary': 0
    }

    let n = 0
    for (let x = 0; x < arr.length; x++) {
        if (arr[x]['gender'] === 'non-binary') {
            n++
        }
    }
    
    gend.male = maleCount(arr)
    gend.female = femaleCount(arr)
    gend['non-binary'] = n
    
    return gend;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
