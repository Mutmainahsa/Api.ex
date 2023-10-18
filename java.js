const githubURL = 
"https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";

let myBox = document.getElementById("root");

async function showData() {
    let res = await fetch(githubURL);
    let data = await res.json();
    console.log(data);
    myBox.innerHTML = data
    .map((item) =>{
        return `<div class="card">
        <img src= ${item.author.avatar_url} alt="avatar">
        <p class="para">${item.author.login}</p>
        <a href= ${item.author.html_url} target="_blank">Go to ${item.author.login} profile </a>
    </div>`;
    }) 
    .join("");
}
showData();


// function getData(){
//     fetch(githubURL)
//     .then((res) => {
//         if (res) {
//             let data = res.json;
//             return data;
//         }
//     })
//     .catch((err) => console.log(err));
// }
// getData();

// async function getData() {
//     let res = await fetch(githubURL);
//     let data = await res.json();
//     return data;
// }

// console.log (getData());

// let myPara = document.getElementById("para");
// myPara.innerHTML = "Hello";
// myPara.style.backgroundColor = "red";
// function ChangeBG() {
//     myPara.style.backgroundColor ="blue";
// }

//myPara.addEventlistener("click",ChangeBG);