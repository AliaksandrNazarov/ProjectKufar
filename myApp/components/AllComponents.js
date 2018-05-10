const components = {
  MainContainer : `
  <div class="main_container">
    <HeaderContainer/>  
    <Container/>
    <Container/>
    <Container/>
    <Container/>
        
  </div>
  `,
  HeaderContainer:`
  <div class="header_container">
    <Header/>
    <ContainerFilters/>
  </div>
  `,
  Header :`
  <div class="header">
    
  </div>
  `,
  ContainerFilters : `
    <div class="container_filters">
    
    </div>
  `,
  H1 : `<h1 class="H1" >{{info}}</h1>`,
  H2 : `<h2 class="H2"> From h2 component</h2>`,
  Div : `<div>
            <ui:transclude key="aside"/>
        </div>`,
  Container : `
    <ui:fragment>
        <div class="container">
            <H1 ui:props="<- TABS"/>         
            
        </div>
    </ui:fragment>
`
}
export default [
  ...Object.keys(components).map(name => ({NAME: name, TEMPLATE: components[name]}))
]
