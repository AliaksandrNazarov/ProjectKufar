export class Header {
  TEMPLATE() {
    return /* html */ `
        <header class="js_header scroll-to-fixed-fixed" style="z-index: 105; position: fixed; top: 0px; margin-left: 0px; width: 1573px; left: 0px;">
            <div class="header">
                <a class="header__logo js_header__logo" ></a>
                <a class="header__menu_btn" id="js_menu_btn" href="#office_menu">
                <i class="header__office_counter" data-show="unreadMessages" style="display: none;"></i>
                </a>

                <div class="header__search_block js_header__search_block">
                    <form class="header__search" method="get" id="js_header_form" >
                        <input id="js_header_search" type="text" autocomplete="off" class="js_header__search ui-autocomplete-input" enter="-> add"/>
                        <i class="header__search_icon js_header__search_icon"></i>
                        <input class="header__find hidden" type="submit" value=""/>
                        <div class="header__search_in_title">
                            <input class="form_checkbox" autocomplete="off" id="search_in_title" type="checkbox" name="ot" value="1"/>
                            <label class="form_label" for="search_in_title">
                            <span><span></span></span>Искать по заголовкам
                            </label>
                        </div>
                        <ul id="ui-id-1" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style="display: none;"></ul>
                    </form>
                    <span class="header__search_result_loading js_header__search_result_loading"></span>
                </div>

                <span class="header__search_result_overlay_close js_header__search_result_overlay_close"></span>

                <div class="header__title_block">
                    <div class="heading__title">
                        отово
                    </div>
                </div>
                
                <div class="header__settings_block">
                         <a class="header__switcher" href="javascript:setCookie('lang', 'by', 365, '/', '.kufar.by'); location.reload();">
                        Бел
                        </a>
                        <a class="header__sign_in login_popup_init" href="https://www.kufar.by/account/login">Вход</a>
                        <div class="popup popup_type_account">
                        <div class="popup_office" id="js_popup_office">
                            <div class="popup_office__user">
                                <a class="popup_office__icon_type_user  login_popup_init">
                                    <span class="popup_office__icon_sign_in"></span>
                                </a>
                                <a class="popup_office__name login_popup_init">Вход или <br> Регистрация </br> </a>
                            </div>
                        <div class="popup_office__lang_switcher">
                        <span class="popup_office__lang_switcher_item">Рус</span>
                        <a class="popup_office__lang_switcher_item" href="javascript:setCookie('lang', 'by', 365, '/', '.kufar.by'); location.reload();">Бел</a>
                        </div>
                    
                        </div>
                    </div>
                    <div class="popup__overlay popup__overlay_type_account"></div>

                </div>

                <div class="list_filter_bar_view">
                    <div class="list_view__item list_view__item_type__list list_view__item_type_active" title="Список"></div>
                    <a class="list_view__item list_view__item_type__grid" id="list_view__gallery" title="Галерея" href="https://www.kufar.by/гродненская/Гродно/Дома?cu=BYR&amp;o=3" onclick="set_md('li','180','.kufar.by'); xt_click(this, 'C', '255', 'AB_TO_G_01020', 'A');">
                    </a>
                </div>
                <a class="header__button_add login_popup_init" id="add" value="hhhh" title="Подать объявление"></a>
            </div>
        </header>
        <div style="display: block; width: 1573px; height: 66px; float: none;"></div>

        `;
  }
}
