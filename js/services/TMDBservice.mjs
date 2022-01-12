

class TMDBservice {
  constructor() {
    this.accessKey = '6e6901b77acb7c139ac4bb8814c22f9e'
    this.baseUrl = 'https://api.themoviedb.org/3'
  }
  
  get(options) {
    const xhr = new XMLHttpRequest();
    xhr.open(options.method, `${this.baseUrl+options.url}?api_key=${this.accessKey}`)
    xhr.send()
    

    xhr.onload = () => {
      const data = JSON.parse(xhr.responseText)
      options.onSuccess(data.results.map(res => res.title))
    }
  }

}


export default TMDBservice;
