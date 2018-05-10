const Res = {
  TABS: [
    {name: 'Demo', id: '1'},
    {name: 'Demo2', id: '2'},
    {name: 'Demo3', id: '3'},
    {name: 'Demo4', id: '4'}
  ],
  info:"info"
}
export class MyApplication {
  TEMPLATE(){
    return `  
    <MainContainer/>
    `
  }
  init(){
    Object.assign(this,Res);
  }

  /*res(key){
    return Res[key];
  }*/
  subscribe (url, source, cb) {
    const r = this.res(url)
    cb(null, r)
  }
  res (k) {
    return R[k] || k.split('_').map(capitalize).join(' ')
  }
}