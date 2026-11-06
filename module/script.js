import { livrosPorArray } from '../module/dados.js'


const primeiroContato = document.querySelector('div#primeiroContato')
const cardLista = document.querySelector('div#livroListaItem')
const tituloCatalogo = document.querySelector('h2#tituloCatalogo')
const descricaoCatalogo = document.querySelector('p#descricaoCatalogo')
const proximo = document.querySelector('button#proximo')
const anterior = document.querySelector('button#anterior')


let cards = []
let inicio = 0


function mostrarCards() {

    for (let i = 0; i < cards.length; i++) {

        if (i >= inicio && i < inicio + 3) {
            cards[i].classList.remove('escondido')
        } else {
            cards[i].classList.add('escondido')
        }

    }

}

proximo.addEventListener('click', function () {
    if (inicio + 3 < cards.length) {
        inicio = inicio + 3
        mostrarCards()
    }
})

anterior.addEventListener('click', function () {
    if (inicio - 3 >= 0) {
        inicio = inicio - 3
        mostrarCards()
    }
})


function gerandoLivrosPorArray(livrosPorArray, primeiroContato) {


    for (let i = 0; i < livrosPorArray.length; i++) {

        let card = document.createElement('div')
        card.classList.add('livroCard')

        const imagem = document.createElement('img')
        imagem.src = livrosPorArray[i].imagem
        card.appendChild(imagem)

        const titulo = document.createElement('h3')
        titulo.textContent = livrosPorArray[i].titulo
        card.appendChild(titulo)

        const autor = document.createElement('p')
        autor.textContent = `Autor: ${livrosPorArray[i].autor}`
        card.appendChild(autor)

        const editora = document.createElement('p')
        editora.textContent = `Editora: ${livrosPorArray[i].editora}`
        card.appendChild(editora)

        const paginas = document.createElement('p')
        paginas.textContent = `${livrosPorArray[i].numeroPaginas} páginas`
        card.appendChild(paginas)

        const codigoISBN = document.createElement('p')
        codigoISBN.textContent = `ISBN: ${livrosPorArray[i].ISBN}`
        card.appendChild(codigoISBN)


        const botaoReserva = document.createElement('button')
        botaoReserva.classList.add('botaoReserva')
        botaoReserva.textContent = `Reservar`
        botaoReserva.addEventListener('click', reservar)

        // seu hover, agora dentro do for: todo botão novo já nasce com ele
        botaoReserva.addEventListener('mouseover', mudarCorBotao)
        function mudarCorBotao() {
            botaoReserva.style.backgroundColor = '#87fb67';
            botaoReserva.style.color = '#0c1a0f';
        }

        botaoReserva.addEventListener('mouseout', voltarNormal)
        function voltarNormal() {
            botaoReserva.style.backgroundColor = '#0c1a0f';
            botaoReserva.style.color = '#f8f8f8';
        }

        card.appendChild(botaoReserva)

        const status = document.createElement('p')
        status.textContent = `Disponível para Reserva`
        card.appendChild(status)

        primeiroContato.appendChild(card)


    }
    cards = primeiroContato.querySelectorAll('.livroCard')
    inicio = 0
    mostrarCards()

}
gerandoLivrosPorArray(livrosPorArray, primeiroContato)



const destaques = document.querySelector('button#categoriasBotao')
destaques.addEventListener('click', alteraDestaque)
function alteraDestaque() {
    tituloCatalogo.textContent = ''
    descricaoCatalogo.textContent = ''

    tituloCatalogo.textContent = 'Destaques'
    descricaoCatalogo.innerHTML = 'Confira nossa seleção de livros em destaque, reunindo títulos favoritos, histórias que conquistaram leitores.<br> Um espaço de boas recomendações para ajudar você a encontrar sua próxima leitura.'
    const destaqueCategoria = livrosPorArray.filter(livro => livro.categoria.includes("Destaques"))
    primeiroContato.textContent = ''

    gerandoLivrosPorArray(destaqueCategoria, primeiroContato)
    cards = primeiroContato.querySelectorAll('.livroCard')
    inicio = 0
    mostrarCards()

}

const marketing = document.querySelector('button#marketingBotao')
marketing.addEventListener('click', alteraMarketing)

function alteraMarketing() {

    tituloCatalogo.textContent = ''
    descricaoCatalogo.textContent = ''

    tituloCatalogo.textContent = 'Marketing'
    descricaoCatalogo.innerHTML = 'Para quem deseja  compreender novas ferramentas e descobrir referências que conectam ideias.<br>Reunindo obras que abordam comunicação visual, identidade de marca, posicionamento estratégico e criatividade.'

    const marketingCategoria = livrosPorArray.filter(livro => livro.categoria.includes("Marketing"))
    primeiroContato.textContent = ''
    gerandoLivrosPorArray(marketingCategoria, primeiroContato)
    cards = primeiroContato.querySelectorAll('.livroCard')
    inicio = 0
    mostrarCards()


}

const programacao = document.querySelector('button#programacaoBotao')
programacao.addEventListener('click', alteraProgramacao)

function alteraProgramacao() {
    tituloCatalogo.textContent = ''
    descricaoCatalogo.textContent = ''
    tituloCatalogo.textContent = 'Programação'
    descricaoCatalogo.innerHTML = 'Nossa seção de livros sobre desenvolvimento e tecnologia da informação, voltado ao ensino de novas ferramentas e habilidades. <br>Reunindo obras sobre programação, requisitos, banco de dados, cybersegurança e inovação tecnológica.'
    const programacaoCategoria = livrosPorArray.filter(livro => livro.categoria.includes("Programacao"))
    primeiroContato.textContent = ''
    gerandoLivrosPorArray(programacaoCategoria, primeiroContato)
    cards = primeiroContato.querySelectorAll('.livroCard')
    inicio = 0
    mostrarCards()
}

const frances = document.querySelector('button#francesBotao')
frances.addEventListener('click', alteraFrances)

function alteraFrances() {
    tituloCatalogo.textContent = ''
    descricaoCatalogo.textContent = ''
    tituloCatalogo.textContent = 'Frances'
    descricaoCatalogo.innerHTML = 'Nossa seção de livros sobre desenvolvimento e tecnologia da informação, voltado ao ensino de novas ferramentas e habilidades. <br>Reunindo obras sobre programação, requisitos, banco de dados, cybersegurança e inovação tecnológica.'
    const francesCategoria = livrosPorArray.filter(livro => livro.categoria.includes("Frances"))
    primeiroContato.textContent = ''
    gerandoLivrosPorArray(francesCategoria, primeiroContato)
    cards = primeiroContato.querySelectorAll('.livroCard')
    inicio = 0
    mostrarCards()
}


const espanhol = document.querySelector('button#espanholBotao')
espanhol.addEventListener('click', alteraEspanhol)

function alteraEspanhol() {
    tituloCatalogo.textContent = ''
    descricaoCatalogo.textContent = ''
    tituloCatalogo.textContent = 'Espanhol'
    descricaoCatalogo.innerHTML = 'Nossa seção de livros sobre desenvolvimento e tecnologia da informação, voltado ao ensino de novas ferramentas e habilidades. <br>Reunindo obras sobre programação, requisitos, banco de dados, cybersegurança e inovação tecnológica.'
    const espanholCategoria = livrosPorArray.filter(livro => livro.categoria.includes("Espanhol"))
    primeiroContato.textContent = ''
    gerandoLivrosPorArray(espanholCategoria, primeiroContato)
    cards = primeiroContato.querySelectorAll('.livroCard')
    inicio = 0
    mostrarCards()
}



function reservar(evento) {
    const botao = evento.currentTarget
    const card = botao.parentElement

    adicionarNaLista(card)

    botao.textContent = 'Reservado'
    botao.disabled = true
}

function adicionarNaLista(card) {
    const titulo = card.querySelector('h3').textContent
    const autor = card.querySelector('p').textContent.replace('Autor: ', '')

    const jaReservados = cardLista.querySelectorAll('h3')
    for (let i = 0; i < jaReservados.length; i++) {
        if (jaReservados[i].textContent === titulo) {
            return
        }
    }

    const item = document.createElement('div')

    const itemTitulo = document.createElement('h3')
    itemTitulo.textContent = titulo
    item.appendChild(itemTitulo)

    const itemAutor = document.createElement('h4')
    itemAutor.textContent = autor
    item.appendChild(itemAutor)

    const botaoExcluir = document.createElement('button')
    botaoExcluir.textContent = 'Cancelar Pedido'

    botaoExcluir.addEventListener('click', excluirReserva)
    function excluirReserva() {
        item.remove()
    }


    item.appendChild(botaoExcluir)
    const adendo = document.createElement('p')
    adendo.innerHTML = '*Sua reserva é válida por até 3 dias úteis.* <br> Retirada na Biblioteca fisica da Escola.'
    item.appendChild(adendo)


    cardLista.appendChild(item)


}




const buscaInput = document.querySelector('input#buscaRapidaInput')
const buscaBotao = document.querySelector('button#buscaRapidaBotao')

buscaBotao.addEventListener('click', buscaRapida)

function buscaRapida() {
    const termo = buscaInput.value.trim().toLowerCase()

    if (termo === '') {
        alert('Digite o título ou o autor do livro.')
        return
    }

    const resultado = livrosPorArray.filter(livro =>
        livro.titulo.toLowerCase().includes(termo) ||
        livro.autor.toLowerCase().includes(termo)


    )

    if (resultado.length === 0) {
        alert('Nenhum livro encontrado.')
        return
    }

}
