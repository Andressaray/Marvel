export default async function getPersonajes({ keyword = '' } = {}) {
    let apiUrl = ''
    if(keyword === ''){
        apiUrl    = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=02ea3fbe59aa6b4d0fa2ae6bade539eb&hash=3e753058c56ce2596f8fc0cd0ded6b51'
    }else{
        apiUrl    = `https://gateway.marvel.com/v1/public/characters?name=${keyword}&ts=1&apikey=02ea3fbe59aa6b4d0fa2ae6bade539eb&hash=3e753058c56ce2596f8fc0cd0ded6b51`
    }
    const res       = await fetch(apiUrl)
    const response  = await res.json()
    const data      = response
    return data 
}