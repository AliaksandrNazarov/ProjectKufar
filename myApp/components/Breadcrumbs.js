export class Breadcrumbs {
  TEMPLATE () {
    return /* html */ `
        <div class="breadcrumbs breadcrumbs_li" itemprop="breadcrumb">
             <BreadcrumbsItem ui:each="element of :BreadcrumbsLinks" data="{{element}}"/>     
        </div>
        `
  }
}
