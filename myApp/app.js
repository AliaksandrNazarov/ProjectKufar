const R = {
  title:'Вторичное жилье 1',
  hint:'Double-click to edit a todo',
  new_todo_hint:'What needs to be done?',
  Products: [
    {name: "Дом в Лососно", id:1111, price: 10000},
    {name: "Дом в Гродно", id:2222, price: 99999},
    {name: "Дом в Минске", id:3333, price: 88888},
    ],
    FooterLinks: [
      {url: "https://www2.kufar.by/support/form/0?id=2", phrase: "Помощь2", clas: "footer__icon footer__icon_help "},
      {url: "https://www.kufar.by/Куфар_в_телефоне.htm", phrase: "Приложения", clas: "footer__icon footer__icon_mobile"},
      {url: "http://business.kufar.by/", phrase: "Реклама", clas: "footer__icon footer__icon_advertisement"},
      {url: "https://www.kufar.by/rules.htm", phrase: "Правила", clas: "footer__icon footer__icon_rules"},
      {url: "https://dostavka.kufar.by/", phrase: "Доставка", clas: "footer__icon footer__icon_delivery"}
      
    ],
    PaginationLinks: [
      {url:"4",name:"4"},
      {url:"5",name:"5"},
      {url:"6",name:"6"},
      {url:"7",name:"..."},
      {url:"4",name:"След."}
    ]
}
let counter=1;
let flag = true;
const ACTIONS = {
  message : (text)=> {console.log(text)},
  closeContainer : () => {flag = !flag;}
  
}





export class MyApplication {
  TEMPLATE(){
    return `  
    <MainContainer show="{{show}}"/>       
    `
   }

  constructor(){
    this.show;
  }
 
  res (key) {
    return R[key];
  } 
  subscribe (key, tar, cb) {
    cb(null,R[key]) ;
  } 


  dispatch(key,payload) {
    this.show = flag;
    ACTIONS[key]();  

    // console.log(key);
    // this.show = !this.show;
    // console.log(this.show);
    this.assign({});
  }
  //closeContainer(){ return !this.show}
  
 }
