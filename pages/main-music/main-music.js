import {getBanner, getRecommendSong, getHotMenu} from '../../services/music.js';
import {eventStore} from '../../store/recommendStore.js';
Page({
  data: {
    banners:[],
    recommendSongLists: [],
    hotMenuLists: []
  },
  onLoad() {
    this.fetchBanner();
    eventStore.dispatch("getRecommendSongList");
    // this.fetchRecommend();
    eventStore.onState("recommendSongList", (value) => {
      this.setData({recommendSongLists: value.slice(0,6)})
    });
    this.fetchHotMenu();
  },
  async fetchBanner(){
    const res = await getBanner();
    console.log(res);
    this.setData({banners: res.banners});
  },
  async fetchRecommend() {
    const res = await getRecommendSong();
    console.log("RecommandSong", res)
    this.setData({recommendSongList: res.playlist.tracks.slice(0, 6)});
  },
  async fetchHotMenu(){
    const res = await getHotMenu();
    this.setData({hotMenuLists: res.playlists})
  },
  onClickTap(){
    my.navigateTo({
      url: '/pages/detail-search/detail-search'
    })
  },
  onMoreClick() {
    my.navigateTo({
      url:"/pages/detail-more/detail-more"
    })
  },
  onMenuTap() {
    my.navigateTo({
      url: '/pages/detail-menu/detail-menu'
    })
  }
});
