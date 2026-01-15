const coding = ["JavaScript", "Python", "C++", "Java", "Go"]

const values = coding.forEach((item) =>{
    // console.log(item);
    return item;
})




const mynumbers = [10,20,30,40,50]

// const newNumber =mynumbers.filter((num) => {
//     return num > 10;
// })

// console.log(newNumber);


const books = [
    {title: "Book One", author: "Author A", year: 2001},
    {title: "Book Two", author: "Author B", year: 1999},
    {title: "Book Three", author: "Author C", year: 2010},
    {title: "Book Four", author: "Author D", year: 2005}
]   

const recentBooks = books.filter((book) => {
    return book.year > 2000;
})

console.log(recentBooks);   