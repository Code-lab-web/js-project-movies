const url = 'https://api.themoviedb.org/3/authentication';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDY4NDFhZWEwYjhhNzI2OThhYTZlZGZjMDM1MzFkZCIsIm5iZiI6MTc0NzAzNTIzNC42MDA5OTk4LCJzdWIiOiI2ODIxYTQ2MjM3MWFhZDRjM2YyZDFiMzQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TkYQY9-WcRZl8VPIZHWwbkn6DYrhbmAxjEc7TJi1w58'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));