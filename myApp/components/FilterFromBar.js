export class FilterFromBar {
  TEMPLATE () {
    return /* html */`
            <form class="filter__form_bar">
                <div class="list_filter_bar ">
                    <div class="list_filter_bar_view">
                        <div class="list_view__item list_view__item_type__list list_view__item_type_active" title="Список">
                    </div>
                        <a class="list_view__item list_view__item_type__grid" id="list_view__gallery" title="Галерея" href="https://www.kufar.by/гродненская/Гродно/Дома?cu=BYR&amp;o=3" onclick="set_md('li','180','.kufar.by'); xt_click(this, 'C', '255', 'AB_TO_G_01020', 'A');">
                        </a>
                    </div>
                    <div class="list_filter_bar_items js_sort_items">
                        <fieldset class="filter ui-front" id="sort_price">
                            <select class="form_select" name="sp" id="ui-id-21" style="display: none;">
                                <option value="">Сортировать по дате</option>
                                <option value="1">Сортировать по цене</option>
                            </select><span tabindex="0" id="ui-id-21-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="ui-id-21-menu" aria-haspopup="true" class="ui-selectmenu-button jq_form_select ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">Сортировать по дате</span></span>
                            <div class="ui-selectmenu-menu jq_form_selectmenu-menu ui-front"><ul aria-hidden="true" aria-labelledby="ui-id-21-button" id="ui-id-21-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul></div>
                        </fieldset>                                
                    </div>
                </div>
            </form>
        `
  }
}
