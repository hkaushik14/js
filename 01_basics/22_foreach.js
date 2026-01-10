const coding = ["JavaScript", "Python", "C++", "Java", "Go"]
coding.forEach(function(lang){
    console.log(lang);
});

coding.forEach((lang) => {
    console.log(lang);
});

const numbers = [10,20,30,40,50]
numbers.forEach((num, index) => {
    console.log(`Index is ${index} and number is ${num}`);
});

const myCoding = [{
    name: "JavaScript",
    languageFilename: "js"

},
{
    name: "Python",
    languageFilename: "py"
},
{
    name: "C++",
    languageFilename: "cpp"
}]
myCoding.forEach((lang) => {
    console.log(`Language name is ${lang.name} and file extension is .${lang.languageFilename}`);
});