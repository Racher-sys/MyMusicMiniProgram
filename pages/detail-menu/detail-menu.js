import {getMusicTag, getHotMenu} from '../../services/music.js'
Page({
  data: {
    tags: [],
    menus: []
  },
  onLoad() {
    this.fetchTags();
  },
  async fetchTags(){
    // 1.拿到tag的数据
    const res = await getMusicTag();
    console.log(res)
    this.setData({tags: res.tags});
    // 2.循环遍历tag，然后逐个请求获取到数据
    let promiseAll = []
    for (const tag of res.tags) {
      const promise = getHotMenu(tag.name);
      promiseAll.push(promise);
    }
    // 3. 最后当都请求完成后才修改setData数据
    Promise.all(promiseAll).then(res => {
      this.setData({menus:res})
    })
  }
});
