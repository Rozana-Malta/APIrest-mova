const bandeiras = document.getElementById('bandeiras')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)


document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async() => {
    try{
        const res = await fetch('api.json')
        const data = await res.json()
        const filtroData = data.filter(item => item.name === params )
        
        bandeiraspaises(filtroData)
        
    } catch (error) {
        console.log(error)
    }
}

const bandeiraspaises = data => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <article class="card">
            <img src="${item.flag}" alt="" class="img-fluid">
        </article>
        `
    });
    bandeiras.innerHTML = elementos
}
