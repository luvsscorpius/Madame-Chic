const f_nome = document.querySelector('#f_nome')
const f_marca = document.querySelector('#f_marca')
const f_quantidade = document.querySelector('#f_quantidade')
const f_imagem = document.querySelector('#f_imagem')
const roupas = document.querySelector('#roupas')

const f_select = document.querySelector('#f_select')
const f_camisa = document.querySelector('#f_camisa')
const f_calca = document.querySelector('#f_calca')
const f_cropped = document.querySelector('#f_cropped')

const btn_addRoupa = document.querySelector('#btn_addRoupa')

let a_roupas = []

class Roupa { // Classe PAI/BASE
    constructor(nome, marca, quantidade, foto, tipo) {
        this.nome = nome
        this.marca = marca
        this.quantidade = quantidade
        this.foto = foto
        this.tipo = tipo
    }
}

btn_addRoupa.addEventListener('click', () => {
    console.log(f_select.value)
    if (f_select.value == "camisa") {
        console.log("Selecionei camisa")
        const r = new Roupa(f_nome.value, f_marca.value, f_quantidade.value, f_imagem.src, f_select.value)
        a_roupas.push(r)
    }

    if (f_select.value == "calca") {
        console.log("Selecionei Calça")
        const r = new Roupa(f_nome.value, f_marca.value, f_quantidade.value, f_imagem.src, f_select.value)
        a_roupas.push(r)
    }

    if (f_select.value == "cropped") {
        console.log("Selecionei cropped")
        const r = new Roupa(f_nome.value, f_marca.value, f_quantidade.value, f_imagem.src, f_select.value)
        a_roupas.push(r)
    }

    gerenciarExibicaoRoupas()
})

const h2 = document.createElement('h2')
h2.innerHTML = "Camisa"
roupas.appendChild(h2)

const roupaItem = document.createElement('div')
roupaItem.setAttribute("class", "roupaItem")
roupas.appendChild(roupaItem)

const gerenciarExibicaoRoupas = () => {
    a_roupas.forEach((r) => {
        const camisa = document.createElement('div')
        camisa.setAttribute("class", "roupa")
        camisa.innerHTML = `Nome: ${r.nome}</br>`
        camisa.innerHTML += `Marca: ${r.marca}</br>`
        camisa.innerHTML += `Quantidade: ${r.quantidade}</br>`
        camisa.innerHTML += `Tipo: ${r.tipo}`
        roupaItem.appendChild(camisa)
    })
}
