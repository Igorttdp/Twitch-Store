const data = [
    {
        id: 1,
        img: "assets/img/camiseta1.png",
        nameItem: "Twitch Core Glit Preta",
        description:
            "Grande e ousada, esta camiseta clássica da Twitch apresenta um gráfico...",
        value: 112.38,
        addCart: "Adicionar ao carrinho",
        tag: "Camisetas",
    },
    {
        id: 2,
        img: "assets/img/moletom1.png",
        nameItem: "Twitch Moletom com capuz gráfico com zíper",
        description:
            "Nosso moletom super macio com capuz na nossa emblemática cor de gelo com...",
        value: 292.18,
        addCart: "Adicionar ao carrinho",
        tag: "Moletons",
    },
    {
        id: 3,
        img: "assets/img/calca1.png",
        nameItem: "Twitch Calça de moletom tie dye Preta",
        description:
            "Desleixada, mas não desleixada, nossas mais recentes calças de moletom da Twitch...",
        value: 270.71,
        addCart: "Adicionar ao carrinho",
        tag: "Calças",
    },
    {
        id: 4,
        img: "assets/img/acessorio1.png",
        nameItem: "Twitch Cobertor de lã de ovelha",
        description:
            "Estampa vibrante e ultra macia, parte traseira aconchegante forrada de lã de ovelha...",
        value: 205.73,
        addCart: "Adicionar ao carrinho",
        tag: "Acessórios",
    },
    {
        id: 5,
        img: "assets/img/camiseta2.png",
        nameItem: "Twitch Core Glit Roxa",
        description:
            "Grande e ousada, esta camiseta clássica da Twitch apresenta um gráfico...",
        value: 112.38,
        addCart: "Adicionar ao carrinho",
        tag: "Camisetas",
    },
    {
        id: 6,
        img: "assets/img/moletom2.png",
        nameItem: "Twitch Moletom com capuz em V Tie Dye",
        description:
            "Nosso moletom super macio com capuz na nossa emblemática cor de gelo com...",
        value: 320.28,
        addCart: "Adicionar ao carrinho",
        tag: "Moletons",
    },
    {
        id: 7,
        img: "assets/img/calca2.png",
        nameItem: "Twitch Calça de moletom tie dye Rosa Empoeirado",
        description:
            "Desleixada, mas não desleixada, nossas mais recentes calças de moletom da Twitch...",
        value: 270.71,
        addCart: "Adicionar ao carrinho",
        tag: "Calças",
    },
    {
        id: 8,
        img: "assets/img/acessorio2.png",
        nameItem: "Twitch Cadeira do Diretor",
        description:
            "Estampa vibrante e ultra macia, parte traseira aconchegante forrada de lã de ovelha...",
        value: 785.03,
        addCart: "Adicionar ao carrinho",
        tag: "Acessórios",
    },
    {
        id: 9,
        img: "assets/img/camiseta3.png",
        nameItem: "Twitch Core Multicolorido",
        description:
            "Grande e ousada, esta camiseta clássica da Twitch apresenta um gráfico...",
        value: 112.38,
        addCart: "Adicionar ao carrinho",
        tag: "Camisetas",
    },
    {
        id: 10,
        img: "assets/img/moletom3.png",
        nameItem: "Twitch Moletom com capuz bordado",
        description:
            "Nosso moletom com capuz característico para usar em todos os lugares...",
        value: 285.85,
        addCart: "Adicionar ao carrinho",
        tag: "Moletons",
    },
    {
        id: 11,
        img: "assets/img/calca3.png",
        nameItem: "Twitch Adventure Jogger",
        description:
            "Despojadas, mas não desleixadas, nossas calças de moletom de corrida Twitch...",
        value: 270.71,
        addCart: "Adicionar ao carrinho",
        tag: "Calças",
    },
    {
        id: 12,
        img: "assets/img/acessorio3.png",
        nameItem: "Twitch Tampa de canudo para garrafa de água de 947g - Sunset Ombre",
        description:
            "Mantenha sua bebida fria por horas com esta garrafa de água isolada de parede dupla...",
        value: 151.59,
        addCart: "Adicionar ao carrinho",
        tag: "Acessórios",
    },
    {
        id: 13,
        img: "assets/img/camiseta4.png",
        nameItem: "Twitch Core Preta",
        description:
            "Grande e ousada, esta camiseta clássica da Twitch apresenta um gráfico...",
        value: 112.38,
        addCart: "Adicionar ao carrinho",
        tag: "Camisetas",
    },
    {
        id: 14,
        img: "assets/img/moletom4.png",
        nameItem: "Twitch Moletom com gola redonda",
        description:
            "Nosso clássico moletom de gola redonda com estampas da Twitch...",
        value: 285.85,
        addCart: "Adicionar ao carrinho",
        tag: "Moletons",
    },
    {
        id: 15,
        img: "assets/img/calca4.png",
        nameItem: "Twitch Calça de moletom jogger",
        description:
            "Desleixada, mas não desleixada, nossas mais recentes calças de moletom Twitch...",
        value: 252.85,
        addCart: "Adicionar ao carrinho",
        tag: "Calças",
    },
    {
        id: 16,
        img: "assets/img/acessorio4.png",
        nameItem: "Twitch Mochila Roxa Essential",
        description:
            "Projetada para caber em todos os seus itens essenciais, esta mochila Twitch será...",
        value: 270.70,
        addCart: "Adicionar ao carrinho",
        tag: "Acessórios",
    },
    {
        id: 17,
        img: "assets/img/camiseta5.png",
        nameItem: "Twitch Core Roxa",
        description:
            "Grande e ousada, esta camiseta clássica da Twitch apresenta um gráfico...",
        value: 112.38,
        addCart: "Adicionar ao carrinho",
        tag: "Camisetas",
    },
    {
        id: 18,
        img: "assets/img/moletom5.png",
        nameItem: "Twitch Moletom c/ capuz c/ assinatura Tie Dye",
        description:
            "Nosso clássico moletom com capuz de manga comprida é tingido por...",
        value: 309.04,
        addCart: "Adicionar ao carrinho",
        tag: "Moletons",
    },
    {
        id: 19,
        img: "assets/img/calca5.png",
        nameItem: "Twitch Ultrasoft Calça de moletom com forro aconchegante",
        description:
            "Um estilo clássico fica ainda mais aconchegante com forro de lã...",
        value: 270.70,
        addCart: "Adicionar ao carrinho",
        tag: "Calças",
    },
    {
        id: 20,
        img: "assets/img/acessorio5.png",
        nameItem: "Twitch Gorro de pompom - roxo",
        description:
            "Mantenha-se aquecido durante todo o inverno com este clássico gorro de pompom da Twitch...",
        value: 86.62,
        addCart: "Adicionar ao carrinho",
        tag: "Acessórios",
    },
    {
        id: 21,
        img: "assets/img/acessorio6.png",
        nameItem: "Twitch 3 Panel Trucker Hat Purple",
        description:
            "Enrole seu noggin com headgear Twitch de primeira qualidade...",
        value: 108.28,
        addCart: "Adicionar ao carrinho",
        tag: "Acessórios",
    },
    {
        id: 22,
        img: "assets/img/acessorio7.png",
        nameItem: "Twitch 2 Pack Crew Sock - Purple/Black",
        description:
            "Mostre seu amor pela Twitch da cabeça aos pés com nossa coleção de meias...",
        value: 86.63,
        addCart: "Adicionar ao carrinho",
        tag: "Acessórios",
    },
    {
        id: 23,
        img: "assets/img/acessorio8.png",
        nameItem: "Twitch Plush Bear",
        description:
            "Ultramacio e fofinho, aconchegue-se com esta pelúcia Twitch Bear vestindo...",
        value: 270.70,
        addCart: "Adicionar ao carrinho",
        tag: "Acessórios",
    },
];


function navMenu() {
    const menuBtn = document.querySelector('#menu-btn');
    const linksContainer = document.querySelector(".links-container")
    const linkList = document.querySelector('.link-list');
    const storeContainer = document.querySelector('.store');

    menuBtn.onclick = () => {
        if (!linkList.classList.contains('active')) {
            linkList.classList.add('active');
            setTimeout(() => {
                linksContainer.style.zIndex = '0'
            }, 500)
            storeContainer.style.zIndex = '-2'
        } else {
            linksContainer.removeAttribute('style')
            linkList.classList.remove('active');
            setTimeout(() => {
                storeContainer.removeAttribute('style')
            }, 500);
        }
    }
}
navMenu();

function createLi() {
    return document.createElement('li');
}

function createImg() {
    return document.createElement('img');
}

function createDiv() {
    return document.createElement('div');
}

function createH2() {
    return document.createElement('h2');
}

function createH3() {
    return document.createElement('h3');
}

function createP() {
    return document.createElement('p');
}

function createA() {
    return document.createElement('a');
}

function createBtn() {
    return document.createElement('button');
}

function abreviate(str) {
    if (str.length >= 47) {
        let newStr;
        newStr = `${str.slice(0, 47)}...`
        return newStr;
    } else return str;
}

const productContainer = document.querySelector('.products-container')

function productsShowcase(data) {
    for (i in data) {
        const li = createLi();
        const img = createImg();
        const tag = createA();
        const div = createDiv();
        const h2 = createH2();
        const description = createP();
        const price = createP();
        const btn = createBtn();

        img.setAttribute('src', data[i].img);
        img.setAttribute('alt', data[i].nameItem);
        tag.innerText = data[i].tag;
        h2.classList.add('name-item');
        h2.innerText = abreviate(data[i].nameItem);
        description.innerText = data[i].description;
        price.innerText = `R$ ${data[i].value.toFixed(2)}`;
        btn.setAttribute('id', data[i].id);
        btn.innerText = data[i].addCart;
        btn.classList.add('add');

        div.classList.add('product-info');
        div.appendChild(tag);
        div.appendChild(h2);
        div.appendChild(description);
        div.appendChild(price);
        div.appendChild(btn);

        li.classList.add('card');
        li.appendChild(img);
        li.appendChild(div)

        productContainer.appendChild(li)
    }
}

productsShowcase(data);

function onlyTagProduct(data) {
    const cards = document.querySelectorAll('.card')
    const all = document.querySelector('#all');
    const tShirts = document.querySelector('#t-shirts');
    const sweatshirt = document.querySelector('#sweatshirt');
    const legs = document.querySelector("#legs");
    const accessories = document.querySelector('#accessories');

    all.onclick = () => {
        for (i in data) {
            cards[i].removeAttribute('style');
        }
    };

    tShirts.onclick = () => {
        productContainer.classList.remove('notFound')

        for (i in data) {
            cards[i].removeAttribute('style');

            if (data[i].tag !== 'Camisetas') {
                cards[i].style.display = 'none';
            }
        }
    }

    sweatshirt.onclick = () => {
        productContainer.classList.remove('notFound')

        for (i in data) {
            cards[i].removeAttribute('style');

            if (data[i].tag !== 'Moletons') {
                cards[i].style.display = 'none';
            }
        }
    }

    legs.onclick = () => {
        productContainer.classList.remove('notFound')

        for (i in data) {
            cards[i].removeAttribute('style');

            if (data[i].tag !== 'Calças') {
                cards[i].style.display = 'none';
            }
        }
    }

    accessories.onclick = () => {
        productContainer.classList.remove('notFound')

        for (i in data) {
            cards[i].removeAttribute('style');

            if (data[i].tag !== 'Acessórios') {
                cards[i].style.display = 'none';
            }
        }
    }
}

onlyTagProduct(data)

function search() {
    const form = document.querySelector('#search');

    form.addEventListener('keyup', (e) => {
        e.preventDefault()

        let input = document.querySelector("input").value
        input = input.toLowerCase();
        const cards = document.querySelectorAll('.card')
        const nameItems = document.querySelectorAll('.name-item');

        for (let i = 0; i < nameItems.length; i++) {
            if (nameItems[i].innerText.toLowerCase().includes(input)) {
                cards[i].style.display = 'grid';
            } else {
                cards[i].style.display = 'none'
            }
        }

    })
}

search();

function cart(data) {
    let totalValue = 0;
    let count = 0;

    const amount = document.querySelector("#amount");
    const total = document.querySelector("#total");

    document.addEventListener('click', function addRemoveCart(e) {
        let btn = e.target
        let id = btn.getAttribute('id');

        const cartList = document.querySelector('#cart-list');

        let cartId;
        let productName;
        let productPrice;
        let productImg;

        if (btn.classList.contains('add')) {

            for (let i = 0; i < data.length; i++) {
                if (id == data[i].id) {
                    productName = data[i].nameItem;
                    productPrice = parseFloat(data[i].value);
                    productImg = data[i].img;
                    cartId = `cart${id}`;
                }
            }

            const li = createLi();
            const img = createImg();
            const divImg = createDiv();
            const div = createDiv();
            const h3 = createH3();
            const price = createP();
            const btn = createBtn();

            btn.setAttribute('id', cartId);

            h3.classList.add('cart-product-name')
            h3.innerText = productName;
            price.innerText = `R$ ${productPrice.toFixed(2)}`;
            btn.classList.add('remove');
            btn.innerText = 'Remover produto'
            div.classList.add('cart-product-info');

            div.appendChild(h3);
            div.appendChild(price);
            div.appendChild(btn);

            img.setAttribute('src', productImg);

            divImg.classList.add('cart-img')
            divImg.appendChild(img);

            li.appendChild(divImg);
            li.appendChild(div);

            li.classList.add('cart-product')

            cartList.appendChild(li)
        }

        if (btn.classList.contains('remove')) {
            let remove = btn.parentElement.parentElement
            remove.remove()
        }
    })


    document.addEventListener('click', function resume(e) {
        const btn = e.target
        let id = btn.getAttribute('id');

        if (btn.classList.contains('add')) {
            let productPrice
            for (let i = 0; i < data.length; i++) {
                if (id == data[i].id) {
                    productPrice = data[i].value;
                }
            }

            totalValue += parseFloat(productPrice)

            count++;
            amount.innerText = count;
            total.innerText = `R$ ${totalValue.toFixed(2)}`;
        }

        if (btn.classList.contains('remove')) {
            let minus = 0;
            let idRemove = btn.getAttribute('id');
            idRemove = idRemove.slice(4);

            for (let i = 0; i < data.length; i++) {
                if (idRemove == data[i].id) {
                    minus = parseFloat(data[i].value.toFixed(2));
                }
            }

            total.innerText = `R$ ${parseFloat(totalValue -= minus).toFixed(2)}`
            count--;
            amount.innerText = count;
        }
    })

}

cart(data);