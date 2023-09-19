import { getSongDetials, getLyric} from '../../services/player'
import {lyricAnalysis} from '../../utils/lyric'
Page({
  data: {
    id: 0,
    songInfo: '',
    lyricInfo: '',
    tab: ["歌曲", "歌词"],
    titleBarHeight: 0,
    statusBarHeight:0,
    contentHeight:0,
    currentContent: 0,
    isPlay: true,
    playMode: 0 // 0：循环播放 1：随机播放 2：单曲播放
  },
  onLoad(option) {
    // 获取手机基础信息(头状态栏和标题栏高度)
    const {titleBarHeight,statusBarHeight, windowHeight} = my.getSystemInfoSync();
    this.setData({
      id: option.id, 
      titleBarHeight,
      statusBarHeight,
      contentHeight: windowHeight-titleBarHeight-statusBarHeight
    });
    console.log(option);
    this.fetchSongDetail();
    this.fetchLyric();

    const context = my.createInnerAudioContext();
    context.src = "/assert/audio/123.mp3";
    context.autoplay = true;
    console.log('context', context.currentTime)
    context.play();
  },
  async fetchSongDetail() {
    const res = await getSongDetials(this.data.id);
    this.setData({songInfo: res.songs[0]});
    console.log(res);
  },
  async fetchLyric() {
    const res = await getLyric(this.data.id);
    // 解析歌词
    const lyric = lyricAnalysis(res.lrc.lyric);
    this.setData({lyricInfo: lyric})
  },
  swiperChangeTap(e){
    const {current} = e.detail;
    this.setData({
      currentContent: current
    })
  },
  onPlayTap(){
    this.setData({isPlay: !this.data.isPlay});
  },
  onModeChange(){
    this.setData({playMode: (this.data.playMode + 1 ) % 3});
  },
  onPreTap(){
    console.log('pre');
  },
  onNextTap(){
    console.log('next');
  },
  scroll(e){
    console.log(e)
  }
});
