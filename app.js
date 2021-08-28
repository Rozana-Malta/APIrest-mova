const bandeiras = document.getElementById('bandeiras')

/* Consumo da API */
document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async() => {
    try{
        const res = await fetch('api.json')
        const data = await res.json()
        bandeiraspaises(data)
        filtros(data)
        informespaises(data)
    } catch (error) {
        console.log(error)
    }
}

const bandeiraspaises = data => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <article class="card">
            <p>
                <a href="pais.html?name=${item.name}"> 
                <img src="${item.flag}" alt="" class="img-fluid"> </a>
            </p>
        </article>
        `
    });
    bandeiras.innerHTML = elementos
}
