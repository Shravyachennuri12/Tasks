//fetch API

//JSON=>JavaScript Object notation
const userInfo = {
    name: "shravya",
    age: 23,
    isGraduated: true,
    sayHi() {
        console.log("Hii")
    }
}

console.log(userInfo)
const JsonInfo = JSON.stringify(userInfo)
console.log(JsonInfo)

console.log(JSON.parse(JsonInfo))


async function getDataFromDB() {
    let response;
    try {
        const result = fetch("https://fakestoreapi.com/products");
        response = (await result).json();
        // console.log(response)
    } catch (e) {
        console.log(e);
    }
    return response;
}
getDataFromDB().then((data) => {
    console.log(data);
    const name = data[0].title;
    console.log(name)
})

