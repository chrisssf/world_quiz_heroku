// const baseURL = 'http://localhost:3000/api/capitals'
const baseURL = 'api/capitals/'

export default {
  getCapitals() {
    return fetch(baseURL)
    .then(res => res.json())
    // .then(res => res.text())
    // .then(text => console.log(text))
  }
}
