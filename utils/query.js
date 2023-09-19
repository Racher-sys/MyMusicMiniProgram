export function queryElement(selector) {
  //createSelectorQuery() 方法创建一个查询对象，
  //然后使用 select() 方法选择要查询的节点（通过指定 CSS 选择器），
  //接着使用 boundingClientRect() 方法获取节点的布局信息。
  //最后，通过调用 exec() 方法执行查询并返回结果供处理。
  const element = my.createSelectorQuery().select(selector).boundingClientRect();
  return new Promise(resolve => {
    element.exec(res => {
      resolve(res);
    })
  })
}