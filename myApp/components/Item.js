export class Item {
    TEMPLATE() {
        return /*html*/ `
            <article class="list_ads__item " itemscope="" itemtype="http://schema.org/Product">
                <div class="list_ads__image_container">
                    <a lang="" data-images="/78/7853599330.jpg,/78/7802563560.jpg,/78/7829221359.jpg" class="list_ads__link list_ads__image js_list_ads__image_thumb brazzers-daddy" itemprop="url" href="https://www.kufar.by/Гродно/Дома/Дом_в_Лососно_35463711.htm" name="35463711">
                        <div class="tmb-wrap">
                            <div class="tmb-wrap-table"></div>
                        </div>
                        <div class="image-wrap"></div>
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
                        <li>favorites: <b>{{data.favorites}}</b></li>
                        <li><b></b></li>
                    </ul>
                    <b class="list_ads__favorite list_ads__favorite_unauthorized list_ads__favorite" title="Добавить в избранное" href="https://www.kufar.by/old/favourites?aid=35463711" rel="nofollow" data-id="{{data.id}}" data-name="{{data.name}}" click="-> inverse"></b>
                    <b ui:if="data.id" class="list_ads__price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                        <span dir="ltr">$ {{data.id}}</span>
                        <div class="converter">
                            <input type="text" name="priceInput" placeholder="insert value" autofocus="true"/>
                        </div>
                    </b>
                </div>            
            </article>

        `
    }
}