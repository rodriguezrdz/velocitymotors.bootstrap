// Dados dos carros
const carros = {
    huracan: {
        nome: "Lamborghini Huracán",
        valor: "R$ 2.890.000",
        descricao: "O Lamborghini Huracán é um superesportivo italiano com motor V10 naturalmente aspirado. Produzido desde 2014, ele combina design arrojado com desempenho extremo. O interior é todo em couro e fibra de carbono, proporcionando uma experiência de condução incrível.",
        motor: "V10 Naturalmente Aspirado",
        potencia: "640 cv",
        velocidade: "325 km/h",
        aceleracao: "0-100 km/h em 3,2s",
        cambio: "7 marchas automático",
        tracao: "4x4",
        imgCard: "img/huracan-card.jpg",
        imgDetalhe: "img/huracan-detalhe.jpg"
    },
    ferrari488: {
        nome: "Ferrari 488 GTB",
        valor: "R$ 3.150.000",
        descricao: "A Ferrari 488 GTB é o símbolo máximo da tradição italiana em carros esportivos. Com motor biturbo V8 desenvolvido pela Scuderia Ferrari, ela foi eleita diversas vezes como o melhor motor do mundo. Cada detalhe do carro é pensado para oferecer máxima performance.",
        motor: "V8 Biturbo 3.9L",
        potencia: "670 cv",
        velocidade: "330 km/h",
        aceleracao: "0-100 km/h em 3,0s",
        cambio: "7 marchas F1 DCT",
        tracao: "Traseira",
        imgCard: "img/ferrari488-card.jpg",
        imgDetalhe: "img/ferrari488-detalhe.jpg"
    },
    porsche911: {
        nome: "Porsche 911 Turbo S",
        valor: "R$ 1.890.000",
        descricao: "O Porsche 911 Turbo S é um ícone que existe há mais de 50 anos. Com motor boxer traseiro e tração integral, ele é capaz de acelerar de 0 a 100 km/h em apenas 2,7 segundos. É um carro que serve tanto para o dia a dia quanto para pistas de corrida.",
        motor: "Boxer 6 cil. Biturbo 3.8L",
        potencia: "650 cv",
        velocidade: "330 km/h",
        aceleracao: "0-100 km/h em 2,7s",
        cambio: "8 marchas PDK",
        tracao: "4x4",
        imgCard: "img/porsche911-card.jpg",
        imgDetalhe: "img/porsche911-detalhe.jpg"
    },
    mclaren720s: {
        nome: "McLaren 720S",
        valor: "R$ 2.650.000",
        descricao: "O McLaren 720S traz tecnologia diretamente das pistas de Fórmula 1. O chassi é feito de fibra de carbono para ser extremamente leve, e o motor biturbo entrega 720 cavalos. As portas dihedral são uma marca registrada da marca britânica.",
        motor: "V8 Biturbo 4.0L",
        potencia: "720 cv",
        velocidade: "341 km/h",
        aceleracao: "0-100 km/h em 2,9s",
        cambio: "7 marchas automático",
        tracao: "Traseira",
        imgCard: "img/mclaren720s-card.jpg",
        imgDetalhe: "img/mclaren720s-detalhe.jpg"
    },
    audir8: {
        nome: "Audi R8",
        valor: "R$ 1.750.000",
        descricao: "O Audi R8 é o superesportivo da marca alemã com motor V10 posicionado no meio do carro. Ele foi inspirado nos carros de corrida Le Mans da Audi. A tração Quattro garante aderência em qualquer situação, tornando-o acessível mesmo para quem não é piloto profissional.",
        motor: "V10 Aspirado 5.2L",
        potencia: "620 cv",
        velocidade: "330 km/h",
        aceleracao: "0-100 km/h em 3,1s",
        cambio: "7 marchas S tronic",
        tracao: "Quattro 4x4",
        imgCard: "img/audir8-card.jpg",
        imgDetalhe: "img/audir8-detalhe.jpg"
    },
    mercedesamg: {
        nome: "Mercedes AMG GT",
        valor: "R$ 1.650.000",
        descricao: "O Mercedes AMG GT foi desenvolvido totalmente pela divisão AMG, a ala esportiva da Mercedes-Benz. Com capô longo e traseira compacta, ele tem o design clássico de um Gran Turismo. O motor V8 biturbo foi desenvolvido à mão pelos engenheiros da AMG em Affalterbach.",
        motor: "V8 Biturbo 4.0L",
        potencia: "630 cv",
        velocidade: "317 km/h",
        aceleracao: "0-100 km/h em 3,2s",
        cambio: "7 marchas DCT",
        tracao: "Traseira",
        imgCard: "img/mercedesamg-card.jpg",
        imgDetalhe: "img/mercedesamg-detalhe.jpg"
    }
};

// Cria os cards na página index.html
function carregarCards() {
    const grid = document.getElementById("grid-carros");
    if (!grid) return;

    for (const id in carros) {
        const c = carros[id];

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${c.imgCard}" alt="${c.nome}">
            <div class="card-corpo">
                <h3 class="card-titulo">${c.nome}</h3>
                <p class="card-texto">${c.descricao.substring(0, 90)}...</p>
                <p class="card-preco">${c.valor}</p>
                <a href="selecionado.html?carro=${id}" class="btn-vermelho">
                    Ver Detalhes
                </a>
            </div>
        `;

        grid.appendChild(card);
    }
}

// Carrega os detalhes na página selecionado.html
function carregarDetalhe() {
    const container = document.getElementById("container-detalhe");
    if (!container) return;

    // Pega o parâmetro ?carro= da URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get("carro");

    if (!id || !carros[id]) {
        container.innerHTML = `
            <p style="color: #ff2d2d; font-size: 1.2rem;">Veículo não encontrado!</p>
            <a href="index.html" class="btn-voltar">Voltar</a>
        `;
        return;
    }

    const c = carros[id];

    // Atualiza o título da aba
    document.title = c.nome + " - Velocity Motors";

    container.innerHTML = `
        <div class="detalhe-grid">

            <!-- Imagem -->
            <div>
                <img src="${c.imgDetalhe}" class="detalhe-img" alt="${c.nome}">
            </div>

            <!-- Informações -->
            <div>
                <h2 class="detalhe-nome">${c.nome}</h2>
                <p class="detalhe-valor">${c.valor}</p>
                <p class="detalhe-descricao">${c.descricao}</p>

                <p class="specs-titulo">Especificações Técnicas</p>

                <div class="spec-item">Motor: <span>${c.motor}</span></div>
                <div class="spec-item">Potência: <span>${c.potencia}</span></div>
                <div class="spec-item">Velocidade Máxima: <span>${c.velocidade}</span></div>
                <div class="spec-item">Aceleração: <span>${c.aceleracao}</span></div>
                <div class="spec-item">Câmbio: <span>${c.cambio}</span></div>
                <div class="spec-item">Tração: <span>${c.tracao}</span></div>
            </div>

        </div>
    `;
}

// Abre/fecha o menu no mobile
function toggleMenu() {
    const links = document.getElementById("navbar-links");
    links.classList.toggle("aberto");
}

// Inicia tudo quando a página carregar
document.addEventListener("DOMContentLoaded", function () {
    carregarCards();
    carregarDetalhe();
});
