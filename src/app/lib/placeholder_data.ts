import { MdHome } from "react-icons/md";
const cartoes = [
    {
        nome: "Cartão 1",
        limite: 1500.00,
        fechamento: 3,
        vencimento: 10,
        conta_pagamento: "Santander",
        cor: 'dark',
        icone: '1'
    },
    {
        nome: "Cartão 2",
        limite: 5000.15,
        fechamento: 24,
        vencimento: 5,
        conta_pagamento: "Itaú",
        cor: 'emphasis',
        icone: '2'
    },
    {
        nome: "Cartão 3",
        limite: 2000.12,
        fechamento: 12,
        vencimento: 18,
        conta_pagamento: "Caixa",
        cor: 'dark',
        icone: '3'
    },
]


const contas = [
    {
        nome: "Conta 1",
        valorInicial: 150.00,
        saldo: 1050.00,
        cor: 'dark',
        icone: '1'
    },
    {
        nome: "Conta 2",
        valorInicial: 50.00,
        saldo: 2489.76,
        cor: 'emphasis',
        icone: '2'
    },
    {
        nome: "Conta 3",
        valorInicial: 20.00,
        saldo: 1263.21,
        cor: 'dark',
        icone: '3'
    },
    {
        nome: "Conta 4",
        valorInicial: 0.00,
        saldo: 25663.21,
        cor: 'emphasis',
        icone: '4'
    },
]

const categorias = [
    {
        nome: 'Alimentação',
        tipo: 'despesa',
        cor: 'dark',
        icone: 'a'
    },
    {
        nome: 'Moradia',
        tipo: 'despesa',
        cor: 'emphasis',
        icone: 'm'
    },
    {
        nome: 'Mercado',
        tipo: 'despesa',
        cor: 'dark',
        icone: 'm'
    },
]

const linksMenuNavegacao = [
    {
        nome: 'Início',
        href: '/pages/inicio',
        modal: 'categorias'
    }, {
        nome: 'Lançamentos',
        href: '/pages/lancamentos',
        modal: 'contas'
    }, {
        nome: 'Relatórios',
        href: '/pages/relatorios',
        modal: 'cartoes'
    }, {
        nome: 'Limites de Gastos',
        href: '/pages/limites-gastos',
        modal: 'cartoes'
    }
]

const linksMenuConfig = [
    {
        nome: 'Categorias',
        href: '/pages/configuracoes/categorias',
        modal: 'categorias'
    }, {
        nome: 'Contas',
        href: '/pages/configuracoes/contas',
        modal: 'contas'
    }, {
        nome: 'Cartões de Crédito',
        href: '/pages/configuracoes/cartoes-de-credito',
        modal: 'cartoes'
    }
]


const linksMenuConfigApp = [
    {
        nome: 'Preferências',
        href: '/pages/configuracoes/preferencias',
        modal: 'preferencias'
    }, {
        nome: 'Plano',
        href: '/pages/configuracoes/plano',
        modal: 'plano'
    }, {
        nome: 'Tags',
        href: '/pages/configuracoes/tags',
        modal: 'tags'
    }, {
        nome: 'Alertas',
        href: '/pages/configuracoes/alertas',
        modal: 'alertas'
    }, {
        nome: 'Atividades',
        href: '/pages/configuracoes/atividades',
        modal: 'atividades'
    }
]

export { cartoes, contas, categorias, linksMenuNavegacao, linksMenuConfig, linksMenuConfigApp,  }