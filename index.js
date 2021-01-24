//inputs
let form = document.querySelector('#form')
let keywordIn = document.querySelector('#keyword')
let locations = document.querySelector('#location')
let search = document.querySelector('#submit')
let searchMenu = document.querySelector('#searchPage')
let jobListing = document.querySelector('#display')


//array
let jobList = []

let error = []
function errorMsg() {

    console.log('1', keywordIn.value)
    console.log('11', locations.value)

    error.innerText = "Invalid"
    console.log('2', error[0].value)

    jobListing.appendChild(error[0])
    console.log('22', jobListing.value)

    error.push({
        keyword: keywordIn.value,
        locations: locations.value

    })
    errorMsg.forEach = document.createElement("div")
    errorMsg.innerText = "Invalid"
    console.log('2', errorMsg.value)

    jobListing.appendChild(errorMsg)
    console.log('22', jobListing.value)
}
let saveInput =[]
function input(){
    error.innerText="Invalid"
    console.log('2', errorMsg.value)

    jobListing.appendChild(errorMsg)
    console.log('22', jobListing.value)
}


// const MAX_CAPACITY = 2

search.addEventListener('submit', function (e) {
    e.preventDefault()
    keywordIn.value = ""
    locations.value = ""
    console.log('3',keywordIn.value)
    if (keywordIn.value===''||locations.value===''){
        // length < MAX_CAPACITY) {
        errorMsg.className = 'bg-red-500 text-white'
        search.className = 'disabled bg-gray-500 rounded cursor-not-allowed'
        console.log('33',keywordIn.value)
        return errorMsg

    } else {
        return jobList[10]
    }
})

// function displayError(){
//
// }

async function getJobs() {
    const url = 'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id={d9bee79e}&app_key={a8eea83bb5dbb169da71decb4c8cac85}'
    const searchResult = await fetch(url)
    const dataReturned = await searchResult.json()

    console.log(dataReturned)

    // const i = [10]
    const jobDetails = {

        job:`${dataReturned[0]}`
        // Job:`${dataReturned.results[0].title}
        //      ${dataReturned.results[0].description}
        //       ${dataReturned.results[0].location}`

    }
    jobList.push(jobDetails)
}
jobList.forEach(showResult)
function showResult(){
    searchMenu.nextElementSibling.classList.remove("hidden")
    jobListing.innerHTML=`${jobList[0]}`
}