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
    constructor(nome, marca, quantidade, tipo) {
        this.nome = nome
        this.marca = marca
        this.quantidade = quantidade
        this.tipo = tipo
    }
}

btn_addRoupa.addEventListener('click', () => {
    console.log(f_select.value)
    if (f_select.value == "camisa") {
        console.log("Selecionei camisa")
        const r = new Roupa(f_nome.value, f_marca.value, f_quantidade.value, f_select.value)
        a_roupas.push(r)
    }

    if (f_select.value == "calca") {
        console.log("Selecionei Calça")
        const r = new Roupa(f_nome.value, f_marca.value, f_quantidade.value, f_select.value)
        a_roupas.push(r)
    }

    if (f_select.value == "sapato") {
        console.log("Selecionei sapato")
        const r = new Roupa(f_nome.value, f_marca.value, f_quantidade.value, f_select.value)
        a_roupas.push(r)
    }
    gerenciarExibicaoRoupas()
})

const gerenciarExibicaoRoupas = () => {
    roupas.innerHTML = ""
    a_roupas.forEach((r) => {
        const div = document.createElement('div')
        div.setAttribute("class", "roupa")
        div.setAttribute("data-nome", r.nome)
        div.innerHTML = `Nome: ${r.nome}<br/>`
        div.innerHTML += `Marca: ${r.marca}<br/>`
        div.innerHTML += `Quantidade: ${r.quantidade}<br/>`
        div.innerHTML += `Tipo: ${r.tipo}<br/>`
        roupas.appendChild(div)
    })
}

