export class ListTagContainer {
    TEMPLATE() {
        return /*html*/ `
        <div class="list_tags_container js_sticky_list_tags" style="z-index: auto; position: relative; top: 0px;">
		  <div class="list_tags_content js_sticky_list_tags_content">
		    <div class="scroll-wrapper list_tags scrollbar-vista" style="position: relative;">
              <div class="list_tags scrollbar-vista scroll-content" style="height: auto; margin-bottom: 0; padding-bottom: 20px; margin-right: 0px; max-height: 30px;">
			    <div class="list_tags_settings" id="settings">				
                    <div class="list_favourite">    
                        <a class="list_tags_item list_tags_item_type_favourite_save list_tags_item_type_unauthorized" click="-> toggleFilter"></a>                        
					</div>


				<a class="list_tags_item ">
					<i class="list_tags_icon "></i>
					<span class="list_tags_text">Фильтры</span>
					<i class="list_tags_icon "></i>
				</a>
				<!-- <a class="list_tags_item  list_tags_item_type_filter js_sticky_list_tags_item_type_filter">
					<i class="list_tags_icon list_tags_item_type_filter_icon"></i>
					<span class="list_tags_text">Фильтры</span>
					<i class="list_tags_icon list_tags_icon_arrow list_tags_icon_filter"></i>
				</a> -->

				<a class="list_tags_item list_tags_item_type_categories">
					<span class="list_tags_text">Дома, дачи, коттеджи</span>
					<i class="list_tags_icon list_tags_icon_arrow list_tags_icon_categories"></i>
				</a>

				<a class="list_tags_item list_tags_item_type_region">
					<i class="list_tags_icon list_tags_item_type_region_icon"></i>
					<span class="list_tags_text">Гродно, Гродненская</span>
					<i class="list_tags_icon list_tags_icon_arrow list_tags_icon_region"></i>
				</a>
			</div>
			<div class="list_tags_params">							
				<a class="list_tags_item list_tags_item_type_param" data-id="st">
					<span class="list_tags_text">Тип сделки: Любая cделка</span>									
				</a>					
			</div>
		</div>
		
	</div>
</div>
        `
    }

}