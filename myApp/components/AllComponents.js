import { Pagination } from './Pagination.js';
import { Item } from './Item.js';
import { Header } from './Header.js';
import { FilterFromBar } from './FilterFromBar.js';
import { Banner } from './Banner.js';
import { ListTagContainer } from './ListTagContainer.js';
import { Breadcrumbs } from './Breadcrumbs.js';
import { Footer } from './Footer.js';
import { BreadcrumbsItem } from './BreadcrumbsItem.js';


const components = {

    MainContainer: /*html*/ `
    <div class="main_container main_container_li ">  
    <Banner/>
    <Header/>
    <HeaderSearch/>
    <Wrapper/>
    <Footer/>
    </div>
  `,

    Wrapper: /*html*/ `
    <div class="wrapper wrapper_type_listing">
        <Breadcrumbs/>  
        <main class="content content_type_listing">
            <div class="content__holder">
                <div class="list list_type_li">
                    <ListTagContainer/>
                    <FilterFromBar/>                
                    <ItemsContainer data="<- shownItems"/>
                    <Pagination/>
                </div>    
            </div>    
        </main>
    </div>
  `,
    ItemsContainer: /*html*/ `
    <div class="list_ads list_ads_type_line" id="list_item_thumbs" >
            <Item ui:each="product of data" data="{{product}}"/>
    </div>
    `,
    BannerLi: `
    <div id="adfox_150236298017971466"></div>
     `,
    HeaderSearch: /*html*/ `
    <div class="header__search_result_overlay js_header__search_result_overlay ">
        <div class="header__search_result_wrapper js_header__search_result_wrapper" style="top: 0px;">
            <ul class="header__search_result js_header__search_result"></ul>
            <div class="header__search_empty_result js_header__search_empty_result">По вашему запросу ничего не найдено</div>
        </div>
    </div>
    `,
    FooterLink: /*html*/ `
    <a class="footer__link" href="{{data.url}}">
        <i class="{{data.clas}}"></i>
        {{data.phrase}}
    </a>
    `,


    PaginationLink: /*html*/ `
    <a ui:if="data.name" href="https://www.kufar.by/гродненская/Гродно/Дома?cu=BYR&amp;o={{data.url}}" class="pagination__item">{{data.name}} </a>
    `
}
export default [
    BreadcrumbsItem, Footer, Breadcrumbs, ListTagContainer, Banner, FilterFromBar, Header, Item, Pagination, ...Object.keys(components).map(name => ({ NAME: name, TEMPLATE: components[name] }))
]