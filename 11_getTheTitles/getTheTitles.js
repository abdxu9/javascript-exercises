const getTheTitles = function(bookArray) {
    /* SOLUTION 1
    let bookTitles=[];
    bookArray.forEach((element) => {
        bookTitles.push(element.title);       
    });
    return bookTitles; */

    /* SOLUTION 2 */
    return bookArray.map((book)=>book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
