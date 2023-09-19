import { HYEventStore } from 'hy-event-store';
import { getRecommendSong } from '../services/music.js'

export const eventStore = new HYEventStore({
  state:{
    recommendSongList: []
  },
  actions:{
    // 这里面的参数ctx就是state里面的变量
    getRecommendSongList(ctx){
      getRecommendSong().then(res => {
        ctx.recommendSongList = res.playlist.tracks;
      });
    }
  }
})

// // 数据监听
// eventStore.onState("recommendSongList", (value) => {
//   console.log("recommendSongList",value);
// })

// eventStore.dispatch("getRecommendSongList")