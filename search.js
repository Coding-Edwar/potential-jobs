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
<div id="result-section" class="m-2 p-2">
  <div class="pr-12 md:flex justify-center">
    <p class="w-max pr-4 text-left">You searched for: 
      <strong class="capitalize px-2">${jobName}
      </strong>
    </p>
    
    <p class="w-max px-6 md:border-l-2 md:border-r-2 border-black">Location: 
      <strong class="px-2">${SEARCH_COUNTRY.toUpperCase()}
      </strong>
    </p>
  
    <p class="px-6">Found: <strong>${jobsFound}<strong></p>
  </div>
</div>
`
  jobs.forEach(function (job) {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="ml-10 mr-10 p-4">
      <a href="/details.html" class="flex flex-col">
        <div class="flex items-center border-t-2 border-black">
          <p class="w-96 m-2 p-2 text-xl">
            ${job.title}
          </p>
          <div class="flex border-2 border-black">
            <img src="map-marker.png" alt="location-icon" class="w-5 h-6 self-center">
            <p class="-mb-1 p-2 flex jsutify-evenly">
                ${job.location.display_name}
            </p>
          </div>
        </div>

        <p class="text-justify text-lg">${job.description}</p>
      </a>
    </div> `

    resultSection.appendChild(div)
  })
})
// href="${job.redirect_url}"
async function searchJobs (jobString, jobsCount, country = SEARCH_COUNTRY) {

  // see https://gist.github.com/imdeletosh/f13c339b5f8e0a62ebe973a4ac86c3c0 for a breakdown of this
  const url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=8662d781&app_key=508ffbd2b7030c6d6615b21bd0aa002d&results_per_page=5&what=${jobString}&what_exclude=it&sort_by=date&salary_min=40000&salary_max=200000&salary_include_unknown=1&full_time=1&permanent=1&content-type=application/json`
  console.log(url)

// https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=8662d781&app_key=508ffbd2b7030c6d6615b21bd0aa002d&results_per_page=20&what=${jobString}&what_exclude=java&sort_by=date&salary_min=40000&salary_max=200000&salary_include_unknown=1&full_time=1&permanent=1&content-type=application/json

//   https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=a7547f34&app_key=92b62ee9bfd90c11c097004b51438beb&results_per_page=${jobsCount}&what=${jobString}&content-type=application/json
  
  const result = await fetch(url)
  const data = await result.json()

  return data
}