const KEY = "TODO:1";
// filters metadata
const FILTERS = [
  {
    id: "favorites",
    values: [true]
  }
];
// pure actions:
const ACTIONS = {
  inverse: ({ items, favoritesIds }, { id }) => ({
    items: items.map(e => {
      if (e.id === id) {
        e.favorites = !e.favorites;
        favoritesIds[id] = e.favorites;
      }
      return e;
    })
  }),
  toggleFilter: st => ({ favoritesOnly: !st.favoritesOnly }),
  add: ({ items, nextId }, { value }) =>
    !value
      ? null
      : {
          nextId: nextId + 1,
          items: [].concat(
            {
              id: nextId,
              name: value,
              favorites: false
            },
            items
          )
        }
};

// static resources
const R = {
  filters: FILTERS,
  place:
    "Kрупнейшая площадка объявлений Беларуси по данным gemiusAudience, март 2017.",
  owner: "ООО «Собственник ресурса»",
  Products: [
    {
      name: "Дом в Лососно",
      id: 1111,
      price: 10000
    },
    {
      name: "Дом в Гродно",
      id: 2222,
      price: 99999
    },
    {
      name: "Дом в Минске",
      id: 3333,
      price: 88888
    }
  ],
  FooterLinks: [
    {
      url: "https://www2.kufar.by/support/form/0?id=2",
      phrase: "Помощь2",
      clas: "footer__icon footer__icon_help "
    },
    {
      url: "https://www.kufar.by/Куфар_в_телефоне.htm",
      phrase: "Приложения",
      clas: "footer__icon footer__icon_mobile"
    },
    {
      url: "http://business.kufar.by/",
      phrase: "Реклама",
      clas: "footer__icon footer__icon_advertisement"
    },
    {
      url: "https://www.kufar.by/rules.htm",
      phrase: "Правила",
      clas: "footer__icon footer__icon_rules"
    },
    {
      url: "https://dostavka.kufar.by/",
      phrase: "Доставка",
      clas: "footer__icon footer__icon_delivery"
    }
  ],
  PaginationLinks: [
    {
      url: "4",
      name: "4"
    },
    {
      url: "5",
      name: "5"
    },
    {
      url: "6",
      name: "6"
    },
    {
      url: "7",
      name: "..."
    },
    {
      url: "4",
      name: "След."
    }
  ],
  BreadcrumbsLinks: [
    {
      name: "Kufar"
    },
    {
      name: "Вся Беларусь"
    },
    {
      name: "Гродненская<"
    },
    {
      name: "Гродно"
    },
    {
      name: "Дома, дачи, коттеджи"
    },
    {
      name: "Страница 3"
    }
  ]
};

// placeholders pipes
const PIPES = {
  upper: s => ("" + s).toUpperCase(),
  capital: s => (!s ? "" : s[0].toUpperCase() + s.slice(1))
};

export class MyApplication {
  TEMPLATE() {
    return `  
    <MainContainer />       
    `;
  }

  constructor() {
    // https://script.google.com/macros/s/AKfycbxAW7WvT5VE3_5N_haw3KvDBcnRy3aUo_OgAICl9g2DjZGP27fC/exec

    this.subscribers = new Map();
    this.data = JSON.parse(window.localStorage.getItem(KEY) || "null") || {
      items: [],
      nextId: 1,
      favoritesIds: {}
    };
    this.res = key =>
      R[key] ||
      (R[key] = key
        .split("_")
        .map(s => s.slice(0, 1).toUpperCase() + s.slice(1))
        .join(" "));
    this.pipes = PIPES;
  }

  loadData(cb) {
    var app =
      "https://script.google.com/macros/s/AKfycbxAW7WvT5VE3_5N_haw3KvDBcnRy3aUo_OgAICl9g2DjZGP27fC/exec";
    // var output = ''
    var xhr = new XMLHttpRequest();
    xhr.open("GET", app);
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return;

      if (xhr.status === 200) {
        try {
          var r = JSON.parse(xhr.responseText),
            result = r["result"];
          cb(null, result);
        } catch (e) {
          cb(e);
        }
      } else {
        cb(new Error("something wrong"));
      }
    };
    xhr.send();
  }
  sendToSpreadsheet(obj, cb) {
    const xhrP = new XMLHttpRequest();
    const app =
      "https://script.google.com/macros/s/AKfycbxAW7WvT5VE3_5N_haw3KvDBcnRy3aUo_OgAICl9g2DjZGP27fC/exec";
    xhrP.open("POST", app);
    xhrP.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhrP.withCredentials = true;
    xhrP.onreadystatechange = function() {
      // Вызывает функцию при смене состояния.
      if (xhrP.readyState === XMLHttpRequest.DONE) {
        // Запрос завершен. Здесь можно обрабатывать результат.
        console.log(xhrP.status);
        cb();
      }
    };
    xhrP.send(JSON.stringify(obj));
  }

  update(delta) {
    Object.assign(this.data, delta);
    window.localStorage.setItem(KEY, JSON.stringify(this.data));
    this.assign({}); /* force render */
    this.subscribers.forEach(({ cb, key }) => cb(null, this.get(key)));
    // console.log(this.data)
  }
  // emit actions
  dispatch(key, payload) {
    if (key === "add") {
      this.sendToSpreadsheet(
        {
          name: payload.value,
          id: this.data.nextId,
          flag: false
        },
        () => {
          this.update(ACTIONS[key](this.data, payload));
        }
      );
    }

    if (key !== "add") {
      this.update(ACTIONS[key](this.data, payload));
    }
  }
  // allows data access
  subscribe(key, target, cb) {
    this.subscribers.set(target, { cb, key });
    if (!this.subscribers.has(target)) {
      target.defer(() => this.subscribers.delete(target));
    }
    if (key === "shownItems") {
      this.loadData((error, data) => {
        this.update({
          items: data
            ? data.map(e => ({ ...e, favorites: this.data.favoritesIds[e.id] }))
            : this.data.items,
          error
        });
        cb(null, this.get(key));
      });
    }
  }
  // properties:
  get(key) {
    const getter = this["get" + PIPES.capital(key)];
    return getter
      ? getter.call(this)
      : key.split(".").reduce((r, k) => (!r ? null : r[k]), this.data);
  }
  getShownItems() {
    const { favoritesOnly, items } = this.data;
    return favoritesOnly ? items.filter(e => e.favorites) : items;
  }
  getFlag() {
    return this.data.favoritesOnly;
  }
}
