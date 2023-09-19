import {eventStore} from '../../store/recommendStore.js'
Page({
  data: {
    songs:[]
  },
  onLoad() {
    eventStore.onState("recommendSongList", (value)=>{
      this.setData({songs: value});
    });
  },
  // 如果页面销毁就不需要监听了
  onUnload() {
    eventStore.offState("recommendSongList", (value)=>{
      this.setData({songs: value});
    });
  }
});
