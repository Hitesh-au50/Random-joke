const dogbtn = document.getElementById("dogbtn");
function getDog() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // showdata(data.value);
            // var joke = data.value
            // console.log('joke', joke)
            document.getElementById("dog").innerHTML = data.value
        })
        .catch();
}
getDog();

// function showdata(joke) {
//     document.getElementById("dog").innerHTML = `${joke}`
// }
dogbtn.addEventListener("click", () => {
    getDog();
});