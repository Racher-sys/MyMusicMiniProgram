import { getTopMv } from '../../services/video.js';
Page({
  data: {
    videoList:[],
    offset:0,
    hasMore: true
  },
  onLoad() {
    // 获取数据
    this.getMv();
  },
  async getMv(){
    const res = await getTopMv(this.data.offset);
    if (res.data !== undefined){
      this.setData({
        videoList: this.data.videoList.concat(res.data)
      });
      // 这里没有必要使用setdata,因为不需要刷新页面,需要刷新页面的时候才使用this.setdata
      this.data.offset = this.data.videoList.length;
      this.data.hasMore = res.hasMore;
    }
  },
  // 监听滚动到底部事件
  onReachBottom(){
    // 判断一下是否还有数据可以加载
    if (this.data.hasMore) {
      this.getMv();
    }
  },
  // 监听下拉数据刷新的功能
  async onPullDownRefresh(){
    // 清空数据
    this.setData({videoList:[]});
    this.data.offset = 0;
    this.data.hasMore = true;
    /** 
     * 下面这一段等价于this.getMv().then(() => {my.stopPullDownRefresh()})
     */
    // 重新加载数据
    await this.getMv();

    // 停止下拉刷新
    my.stopPullDownRefresh();

  },
  onItemTap(e) {
    const item = e.currentTarget.dataset.item;
    console.log(item);
    my.navigateTo({
      url: `/pages/detail-video-item/detail-video-item?id=${item.id}`
    })
  }
});
