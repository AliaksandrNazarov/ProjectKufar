export class BreadcrumbsItem{
    TEMPLATE(){
        return/*html*/ `
        <span class="breadcrumbs__item">
            <b class="breadcrumbs__icon">/</b>
            <a class="breadcrumbs__link">{{data.name}}</a>
        </span>
        ` 
    }
}