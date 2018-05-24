export class Pagination{
    TEMPLATE(){
        return /*html*/ `  
            <div class="pagination account_ads__pagination">
                <nav class="pagination__nav">         
                    <a href="https://www.kufar.by/гродненская/Гродно/Дома?cu=BYR&amp;o=2" class="pagination__item">Пред. </a>
                            <a href="https://www.kufar.by/гродненская/Гродно/Дома?cu=BYR&amp;o=1" class="pagination__item">1 </a>
                            <a href="https://www.kufar.by/гродненская/Гродно/Дома?cu=BYR&amp;o=2" class="pagination__item">2 </a>
                            <span class="pagination__item pagination__item_type_active">3 </span>
                            
                    <PaginationLink ui:each="link of :PaginationLinks" data="{{link}}"/>
                </nav> 
            </div>
        `
       }
}