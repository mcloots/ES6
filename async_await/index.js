//Async await fetch promises
const apiUrl = 'https://darts-node-api.herokuapp.com/api/players/Micha%C3%ABl/1989/throws';

//Fetch promises
function getThrows() {
    fetch(apiUrl)
    .then((r) => r.json())
    .then((json) => {
        console.log(json[0])
    }).catch((error) => {
        console.error('failed');
    });
}

getThrows();

//Async await
async function getThrowsAsync() {
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json[0]);
}

getThrowsAsync();

function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 3000);
    });
}

resolveAfter3Seconds().then((data) => {
    console.log(data);
})

async function getAsyncData() {
    const result = await resolveAfter3Seconds();
    console.log(result);
}

getAsyncData();