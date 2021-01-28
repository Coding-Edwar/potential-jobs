const searchForm = document.querySelector('#search-form')
const jobType = document.querySelector('#job-type')
const resultSection = document.querySelector('#result-section')

const SEARCH_COUNTRY = 'us'

// see we added "async" to the function
// because we are call the dynamic "searchJobs"
searchForm.addEventListener('submit', async function (e) {
  e.preventDefault()

  const jobName = jobType.value

  // we get the results from the API
  let jobResults = await searchJobs(jobName)

  // note the content we get back from that function
  // console.log(jobResults) // this is an Object, check and see
  let jobs = jobResults.results // this is an Array

  // there are things on the object too
  let jobsFound = jobResults.count

  resultSection.innerHTML = `
<div id="result-section" class="p-4 divide-solid divide-y-2 divide-black">
<div>You searched for: <strong>${jobName}</strong> in <strong>${SEARCH_COUNTRY.toUpperCase()}</strong> found:${jobsFound}</div>
</div>`
  jobs.forEach(function (job) {
    const div = document.createElement('div')
    div.innerHTML = `<div class="p-4 divide-solid divide-y-2 divide-black"><p>${job.title}</p> | ${job.location.display_name}</div> <p class="p-4 divide-solid divide-y-2 divide-black">${job.description}</p>`
    resultSection.appendChild(div)
  })
})
// href="${job.redirect_url}"
async function searchJobs (jobString, jobsCount = 3, country = SEARCH_COUNTRY) {

  // see https://gist.github.com/imdeletosh/f13c339b5f8e0a62ebe973a4ac86c3c0 for a breakdown of this
  const url = `https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=a7547f34&app_key=92b62ee9bfd90c11c097004b51438beb&results_per_page=${jobsCount}&what=${jobString}&content-type=application/json`
  console.log(url)

//   https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=a7547f34&app_key=92b62ee9bfd90c11c097004b51438beb&results_per_page=20&what=javascript%20developer&content-type=application/json
  
  const result = await fetch(url)
  const data = await result.json()

  return data
}