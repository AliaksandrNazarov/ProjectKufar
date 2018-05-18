const components = {
  ItemsContainer :/*html*/`
  <div class="list_ads list_ads_type_line" id="list_item_thumbs" >
        <Item ui:each="product of data" data="{{product}}"/>
  </div>
  `,
  MainContainer : /*html*/`
  <div class="main_container main_container_li ">  
  <Banner/>
  <Header ui:if="show"/>
  <HeaderSearch/>
  
  <Wrapper/>
  
  <Footer/>
  </div>
  `,  

  Wrapper:/*html*/`
  <div class="wrapper wrapper_type_listing">
    <Breadcrumbs/>  

    <main class="content content_type_listing">
        <div class="content__holder">
            <div class="list list_type_li">
                <ListTagContainer/>
                <FilterFromBar/>
                
                <ItemsContainer data="<- Products"/>
                <Pagination/>
            </div>    
        </div>    
    </main>
  </div>
  `,
  BannerLi: `
  <div id="adfox_150236298017971466"></div>
  `,

  FilterFromBar:`
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
<div class="ui-selectmenu-menu jq_form_selectmenu-menu ui-front"><ul aria-hidden="true" aria-labelledby="ui-id-21-button" id="ui-id-21-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul></div></fieldset>
                        
                    
                
            
        </div>
    </div>
</form>
  `,
  
  Banner:/*html*/ `
  <div class="banner banner_header__wrapp">
    <div id="div-gpt-ad-1484042712123-0">
        <!-- <script type="text/javascript">
            if (window.innerWidth >= 768) {
                googletag.cmd.push(function () {
                    googletag.display('div-gpt-ad-1484042712123-0');
                });
            }
        </script> -->
        <div id="google_ads_iframe_/133764788/NewKufar.by-Top_0__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/133764788/NewKufar.by-Top_0" title="3rd party ad content" name="google_ads_iframe_/133764788/NewKufar.by-Top_0" width="100%" height="0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" srcdoc="" style="border: 0px; vertical-align: bottom;"></iframe></div>
    </div>
    <div id="banner_top"></div>
</div>
  `,
 
ListTagContainer:/*html*/`
<div class="list_tags_container js_sticky_list_tags" style="z-index: auto; position: relative; top: 0px;">
	<div class="list_tags_content js_sticky_list_tags_content">
		<div class="scroll-wrapper list_tags scrollbar-vista" style="position: relative;">
            <div class="list_tags scrollbar-vista scroll-content" style="height: auto; margin-bottom: 0; padding-bottom: 20px; margin-right: 0px; max-height: 30px;">
			    <div class="list_tags_settings" id="settings">				
                    <div class="list_favourite">    
                        <a class="list_tags_item list_tags_item_type_favourite_save list_tags_item_type_unauthorized" click="-> closeContainer"></a>
                        <!-- href="https://www.kufar.by/old/favourites?ca=3&amp;cg=1020&amp;m=9&amp;st=a&amp;cu=BYR&amp;m=9&amp;w=103" -->
        
    
                    </div>


				<a class="list_tags_item  list_tags_item_type_filter js_sticky_list_tags_item_type_filter">
					<i class="list_tags_icon list_tags_item_type_filter_icon"></i>
					<span class="list_tags_text">Фильтры</span>
					<i class="list_tags_icon list_tags_icon_arrow list_tags_icon_filter"></i>
				</a>
				<a class="list_tags_item list_tags_item_type_categories">
					<span class="list_tags_text">
						
							Дома, дачи, коттеджи
						
					</span>
					<i class="list_tags_icon list_tags_icon_arrow list_tags_icon_categories"></i>
				</a>

				<a class="list_tags_item list_tags_item_type_region">
					<i class="list_tags_icon list_tags_item_type_region_icon"></i>
					<span class="list_tags_text">
						
						
							Гродно, Гродненская
						
					</span>
					<i class="list_tags_icon list_tags_icon_arrow list_tags_icon_region"></i>
				</a>
			</div>
			<div class="list_tags_params">	
							
							
						
						
								
										
									
									
										<a class="list_tags_item list_tags_item_type_param" data-id="st">
											<span class="list_tags_text">Тип сделки: Любая cделка
</span>									
		</a>					
		</div>
		</div><div class="scroll-element scroll-x scroll-element_arrows_visible"><div class="scroll-element_corner"></div><div class="scroll-arrow scroll-arrow_less"><span></span></div><div class="scroll-arrow scroll-arrow_more"><span></span></div><div class="scroll-element_outer"><div class="scroll-element_size"></div><div class="scroll-element_inner-wrapper"><div class="scroll-element_inner scroll-element_track"><div class="scroll-element_inner-bottom"></div></div></div><div class="scroll-bar" style="width: 66px;"><div class="scroll-bar_body"><div class="scroll-bar_body-inner"></div></div><div class="scroll-bar_bottom"></div><div class="scroll-bar_center"></div></div></div></div><div class="scroll-element scroll-y scroll-element_arrows_visible"><div class="scroll-element_corner"></div><div class="scroll-arrow scroll-arrow_less"><span></span></div><div class="scroll-arrow scroll-arrow_more"><span></span></div><div class="scroll-element_outer"><div class="scroll-element_size"></div><div class="scroll-element_inner-wrapper"><div class="scroll-element_inner scroll-element_track"><div class="scroll-element_inner-bottom"></div></div></div><div class="scroll-bar" style="height: 66px;"><div class="scroll-bar_body"><div class="scroll-bar_body-inner"></div></div><div class="scroll-bar_bottom"></div><div class="scroll-bar_center"></div></div></div></div></div>
	</div>
</div>
`,
Breadcrumbs:/*html*/`
            <div class="breadcrumbs breadcrumbs_li" itemprop="breadcrumb">
<span class="breadcrumbs__item">
<a class="breadcrumbs__link" href="https://www.kufar.by">
Kufar
</a>
</span>

<span class="breadcrumbs__item">
<b class="breadcrumbs__icon">/</b>
<a class="breadcrumbs__link" href="https://www.kufar.by/беларусь/">
Вся Беларусь
</a>
</span>



<span class="breadcrumbs__item">
<b class="breadcrumbs__icon">/</b>
<a class="breadcrumbs__link" href="https://www.kufar.by/гродненская/">
Гродненская
</a>
</span>




<span class="breadcrumbs__item">
<b class="breadcrumbs__icon">/</b>
<a class="breadcrumbs__link" href="https://www.kufar.by/гродненская/Гродно/">
Гродно
</a>
</span>




<span class="breadcrumbs__item">
<b class="breadcrumbs__icon">/</b>
<a class="breadcrumbs__link" href="https://www.kufar.by/гродненская/Гродно/Дома">
Дома, дачи, коттеджи
</a>
</span>



<span class="breadcrumbs__item">
<b class="breadcrumbs__icon">/</b>
Страница 3
</span>

</div>
`,

Header:/*html*/`
<header class="js_header scroll-to-fixed-fixed" style="z-index: 105; position: fixed; top: 0px; margin-left: 0px; width: 1573px; left: 0px;">
<div class="header">
          <a class="header__logo js_header__logo" href="https://www.kufar.by"></a>
          <a class="header__menu_btn" id="js_menu_btn" href="#office_menu">
              <i class="header__office_counter" data-show="unreadMessages" style="display: none;"></i>
          </a>
                <div class="header__search_block js_header__search_block">
                    <form class="header__search" method="get" id="js_header_form" action="https://www.kufar.by/гродненская/Гродно/">
                        <input id="js_header_search" type="text" autocomplete="off" name="make teq" value="" class="js_header__search ui-autocomplete-input"/>
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
                    Готово
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
        <nav class="popup_office__nav">
            <a class="popup_office__link popup_office__link_type_new_buildings" href="https://www.kufar.by/гродненская/Гродно/продается?spec=1">
                <i class="popup_office__icon popup_office__icon_new_buildings"></i>
                Новостройки
            </a>
            <a class="popup_office__link popup_office__link_type_all_ads" href="https://www.kufar.by">
                <i class="popup_office__icon popup_office__icon_all_ads"></i>
                Все объявления
            </a>
            <a class="popup_office__link popup_office__link_type_new_ad  login_popup_init" href="#">
                 <i class="popup_office__icon popup_office__icon_new"></i>
                Подать объявление
            </a>
             <a href="http://rekordy.kufar.by/" class="popup_office__link popup_office__link_type_rekordy" target="_blank" onclick="return xt_click(this, 'C', '255', 'recordi_kufara', 'N')">
            <i class="popup_office__icon popup_office__icon_rekordy"></i>
            Рекорды Куфара
            </a>
        </nav>
    </div>
</div>
<div class="popup__overlay popup__overlay_type_account"></div>

</div>
  <div class="list_filter_bar_view">
    <div class="list_view__item list_view__item_type__list list_view__item_type_active" title="Список">
</div>
    <a class="list_view__item list_view__item_type__grid" id="list_view__gallery" title="Галерея" href="https://www.kufar.by/гродненская/Гродно/Дома?cu=BYR&amp;o=3" onclick="set_md('li','180','.kufar.by'); xt_click(this, 'C', '255', 'AB_TO_G_01020', 'A');">
    </a>
</div>
        <a class="header__button_add login_popup_init" id="add" href="#" title="Подать объявление" click="-> message">
</a>
</div>
</header>
<div style="display: block; width: 1573px; height: 66px; float: none;"></div>

`,
HeaderSearch:/*html*/`
<div class="header__search_result_overlay js_header__search_result_overlay ">
    <div class="header__search_result_wrapper js_header__search_result_wrapper" style="top: 0px;">
        <ul class="header__search_result js_header__search_result"></ul>
        <div class="header__search_empty_result js_header__search_empty_result">По вашему запросу ничего не найдено</div>
    </div>
</div>
`,



Item :/*html*/ `
<article class="list_ads__item " itemscope="" itemtype="http://schema.org/Product">
                <div class="list_ads__image_container">
                    <a lang="" data-images="/78/7853599330.jpg,/78/7802563560.jpg,/78/7829221359.jpg" class="list_ads__link list_ads__image js_list_ads__image_thumb brazzers-daddy" itemprop="url" href="https://www.kufar.by/Гродно/Дома/Дом_в_Лососно_35463711.htm" name="35463711">
                            <div class="tmb-wrap">
                                <div class="tmb-wrap-table">
                                  <!-- <div class=""></div>
                                  <div class=""></div>
                                  <div class="active"></div> -->
                                </div>
                            </div>
                            <div class="image-wrap">
                                <!-- <img src="/line_thumbs/78/7853599330.jpg" style="display: none;">
                                <img src="/line_thumbs/78/7802563560.jpg" style="display: none;">
                                <img src="/line_thumbs/78/7829221359.jpg" style="display: block;"> -->
                            </div>
                    </a>
                </div>
                <div class="list_ads__info_container">
                          <a class="list_ads__title" itemprop="name" href="https://www.kufar.by/Гродно/Дома/Дом_в_Лососно_{{data.id}}.htm">
                              {{data.name}}
                          </a>
                        <div class="list_ads__date_location">
                               <time class="list_ads__date" itemprop="releaseDate" datetime="2018-05-10T12:10:18">10 май, 12:10</time>
                                <a class="list_ads__location" href="https://www.kufar.by/гродненская/Дома-продается"> / Дома, дачи, коттеджи / Гродненская, Гродно</a>
                        </div>
                        <ul class="list_ads__params_block">
                            <li>Площадь: <b>310.1</b></li>
                            <li>Состояние: <b>:title</b></li>
                        </ul>

                           <b class="list_ads__favorite list_ads__favorite_unauthorized list_ads__favorite" title="Добавить в избранное" href="https://www.kufar.by/old/favourites?aid=35463711" rel="nofollow" data-id="{{data.id}}" data-name="{{data.name}}" click="-> addToFavorites"></b>

                           <b ui:if="data.price" class="list_ads__price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                                                      <span dir="ltr">$ {{data.price}}</span>
                                <div class="converter">
                                    <!-- <ul class="converter__currency">
                                        <li class="converter__value">399 000 $</li>
                                        <li class="converter__value">334 980 €</li>
                                    </ul> -->
                                    <input type="text" name="priceInput" placeholder="insert value" autofocus="true" enter="-> message" />
                                </div>
                            </b>
                </div>
            
            </article>

`,
FooterLink :/*html*/ `
<a class="footer__link" href="{{data.url}}">
    <i class="{{data.clas}}"></i>
    {{data.phrase}}
</a>
`,
Footer:/*html*/`
<footer class="footer">
	<nav class="footer__nav">
        <FooterLink ui:each="link of :FooterLinks" data="{{link}}"/>    

		<!-- <a class="footer__link" href="https://www2.kufar.by/support/form/0?id=2">
			<i class="footer__icon footer__icon_help"></i>
			Помощь
		</a>

		<a class="footer__link" href="https://www.kufar.by/Куфар_в_телефоне.htm">
			<i class="footer__icon footer__icon_mobile"></i>
			Приложения
		</a>

		<a class="footer__link" href="  " target="_blank">
			<i class="footer__icon footer__icon_advertisement"></i>
			Реклама
		</a>

		<a class="footer__link" href="https://www.kufar.by/rules.htm">
			<i class="footer__icon footer__icon_rules"></i>
			Правила
		</a>

		<a class="footer__link" href="https://dostavka.kufar.by/" target="_blank">
			<i class="footer__icon footer__icon_delivery"></i>
			Доставка
		</a> -->
    </nav>
    

	<div class="footer__copyright">
        © Kufar - крупнейшая площадка объявлений Беларуси по данным gemiusAudience, март 2017. 
        <br/>Использование ресурса Kufar означает согласие с <a href="javascript:void(0);" onclick="window.open('https://www.kufar.by/Пользовательское_соглашение.htm?ca=3','Rules','toolbar=yes, location=yes, status=yes, scrollbars=yes, resizable=yes, width=980, height=600')">Пользовательским соглашением</a> и <a href="javascript:void(0);" onclick="window.open('https://www.kufar.by/Политика_конфиденциальности.htm?ca=3','Rules','toolbar=yes, location=yes, status=yes, scrollbars=yes, resizable=yes, width=980, height=600')">Политикой конфиденциальности</a>.
			
		<br/>
        Собственник ресурса – SCM Ventures AB, адрес: Västra Järnvägsgatan 21, 111 64, Стокгольм, Швеция. Представитель в Республике Беларусь: 
        <nobr>ООО «Шибстед Клэссифайд Медиа»,</nobr> 
        УНП 191767445, 220030, г. Минск, ул. Интернациональная, д. 36, к. 1, офис 422. Режим работы: 10.00 - 18.00, Пн-Пт.
	</div>
	<div class="footer__copyright footer_mobile">
		© Kufar. Использование ресурса Kufar, в том числе и подача объявлений, означает согласие с <a href="javascript:void(0);" onclick="window.open('https://www.kufar.by/Пользовательское_соглашение.htm?ca=3','Rules','toolbar=yes, location=yes, status=yes, scrollbars=yes, resizable=yes, width=980, height=600')">Пользовательским соглашением</a> и <a href="javascript:void(0);" onclick="window.open('https://www.kufar.by/Политика_конфиденциальности.htm?ca=3','Rules','toolbar=yes, location=yes, status=yes, scrollbars=yes, resizable=yes, width=980, height=600')">Политикой конфиденциальности</a>.
			
		
	</div>
	
		<a class="footer__scroll" style="display: block;"></a>
	
</footer>
`,
Pagination:/*html*/`
<div class="pagination account_ads__pagination">
     <nav class="pagination__nav">
         
         <a href="https://www.kufar.by/гродненская/Гродно/Дома?cu=BYR&amp;o=2" class="pagination__item">Пред. </a>
                <a href="https://www.kufar.by/гродненская/Гродно/Дома?cu=BYR&amp;o=1" class="pagination__item">1 </a>
                <a href="https://www.kufar.by/гродненская/Гродно/Дома?cu=BYR&amp;o=2" class="pagination__item">2 </a>
                <span class="pagination__item pagination__item_type_active">3 </span>
                <!-- <a href="https://www.kufar.by/гродненская/Гродно/Дома?cu=BYR&amp;o=4" class="pagination__item">4 </a>
                <a href="https://www.kufar.by/гродненская/Гродно/Дома?cu=BYR&amp;o=5" class="pagination__item">5 </a>
                <a href="https://www.kufar.by/гродненская/Гродно/Дома?cu=BYR&amp;o=6" class="pagination__item">6 </a>
                <a href="https://www.kufar.by/гродненская/Гродно/Дома?cu=BYR&amp;o=7" class="pagination__item">... </a>
        <a href="https://www.kufar.by/гродненская/Гродно/Дома?cu=BYR&amp;o=4" class="pagination__item">След. </a> -->
        <PaginationLink ui:each="link of :PaginationLinks" data="{{link}}"/>
    </nav> 
</div>
`,
PaginationLink:/*html*/`
            <a ui:if="data.name" href="https://www.kufar.by/гродненская/Гродно/Дома?cu=BYR&amp;o={{data.url}}" class="pagination__item">{{data.name}} </a>
` 

}
export default [
  ...Object.keys(components).map(name => ({NAME: name, TEMPLATE: components[name]}))
]
