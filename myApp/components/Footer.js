export class Footer {
  TEMPLATE () {
    return /* html */ `
        <footer class="footer">           
	        <nav class="footer__nav">
                <FooterLink ui:each="link of :FooterLinks" data="{{link}}"/>  
            </nav>            
            <div class="footer__copyright">:place<br/> <a  onclick="window.open('https://www.kufar.by/Пользовательское_соглашение.htm?ca=3','Rules','toolbar=yes, location=yes, status=yes, scrollbars=yes, resizable=yes, width=980, height=600')"></a><a href="javascript:void(0);" onclick="window.open('https://www.kufar.by/Политика_конфиденциальности.htm?ca=3','Rules','toolbar=yes, location=yes, status=yes, scrollbars=yes, resizable=yes, width=980, height=600')"></a>.                    
                <br/>                
                <nobr>:owner</nobr>    
                <span>{{flag}}</span>            
            </div>         
		    
	    </footer>`
  }
}
