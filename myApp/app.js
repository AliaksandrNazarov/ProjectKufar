const KEY = 'TODO:1'
    // filters metadata
const FILTERS = [
        { id: 'favorites', values: [true] }
    ]
    //pure actions:
const ACTIONS = {
        inverse: ({ items }, { id }) => ({ items: items.map(e => { if (e.id === id) { e.favorites = !e.favorites }; return e }) }),
        toggleFilter: (st) => ({ favoritesOnly: !st.favoritesOnly }),
        add: ({ items, nextId }, { value }) => !value ? null : { nextId: nextId + 1, items: [].concat({ id: nextId, name: value, favorites: false }, items) }
    }
    // static resources
const R = {
        filters: FILTERS,
        place: "Kрупнейшая площадка объявлений Беларуси по данным gemiusAudience, март 2017.",
        owner: "ООО «Собственник ресурса»",
        Products: [
            { name: "Дом в Лососно", id: 1111, price: 10000 },
            { name: "Дом в Гродно", id: 2222, price: 99999 },
            { name: "Дом в Минске", id: 3333, price: 88888 },
        ],
        FooterLinks: [
            { url: "https://www2.kufar.by/support/form/0?id=2", phrase: "Помощь2", clas: "footer__icon footer__icon_help " },
            { url: "https://www.kufar.by/Куфар_в_телефоне.htm", phrase: "Приложения", clas: "footer__icon footer__icon_mobile" },
            { url: "http://business.kufar.by/", phrase: "Реклама", clas: "footer__icon footer__icon_advertisement" },
            { url: "https://www.kufar.by/rules.htm", phrase: "Правила", clas: "footer__icon footer__icon_rules" },
            { url: "https://dostavka.kufar.by/", phrase: "Доставка", clas: "footer__icon footer__icon_delivery" }

        ],
        PaginationLinks: [
            { url: "4", name: "4" },
            { url: "5", name: "5" },
            { url: "6", name: "6" },
            { url: "7", name: "..." },
            { url: "4", name: "След." }
        ],
        BreadcrumbsLinks: [
            { name: "Kufar" },
            { name: "Вся Беларусь" },
            { name: "Гродненская<" },
            { name: "Гродно" },
            { name: "Дома, дачи, коттеджи" },
            { name: "Страница 3" },
        ]

    }
    // placeholders pipes 
const PIPES = {
    upper: s => ('' + s).toUpperCase(),
    capital: s => !s ? '' : s[0].toUpperCase() + s.slice(1)
}


export class MyApplication {
    TEMPLATE() {
        return `  
    <MainContainer />       
    `
    }

    constructor() {
        this.subscribers = new Map()
        this.data = JSON.parse(localStorage.getItem(KEY) || 'null') || { items: [], nextId: 1 }
        this.res = (key) => R[key] || (R[key] = key.split('_').map(s => s.slice(0, 1).toUpperCase() + s.slice(1)).join(' '))
        this.pipes = PIPES
    }

    update(delta) {
            Object.assign(this.data, delta)
            localStorage.setItem(KEY, JSON.stringify(this.data))
            this.assign({}) /* force render */
            this.subscribers.forEach(({ cb, key }) => cb(null, this.get(key)))
            console.log(this.data)
        }
        // emit actions
    dispatch(key, payload) {
            this.update(ACTIONS[key](this.data, payload))

        }
        // allows data access 
    subscribe(key, target, cb) {
            this.subscribers.set(target, { cb, key });
            if (!this.subscribers.has(target)) {
                target.defer(() => this.subscribers.delete(target))
            }
            cb(null, this.get(key))
        }
        // properties:
    get(key) {
        const getter = this['get' + PIPES.capital(key)]
        return getter ? getter.call(this) : key.split('.').reduce((r, k) => !r ? null : r[k], this.data)
    }
    getShownItems() {
        const { favoritesOnly, items } = this.data
            //const values = !filterId ? [] : FILTERS.find(e=>e.id===filterId).values
        return favoritesOnly ? items.filter(e => e.favorites) : items
    }

}