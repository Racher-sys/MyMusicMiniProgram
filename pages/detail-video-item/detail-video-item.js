import { getMvUrl, getMvDetail, getRelative } from '../../services/video.js';
Page({
  data: {
    id: 0,
    videoUrl: "",
    detail: {},
    relativeVideo: 20
  },
  onLoad(option) {
    this.setData({
      id: option.id
    })
    this.fetchMvUrl();
    this.fetchMvDetail();
  },
  async fetchMvUrl(){
    // console.log(this.data.id)
    const res = await getMvUrl(this.data.id);
    console.log(res);
    this.setData({videoUrl: res.data.url})
  },
  async fetchMvDetail() {
    const res = await getMvDetail(this.data.id);
    console.log(res);
    this.setData({detail: res.data})
  },
  async fetchMvRelative() {
    const res = await getRelative(this.data.id);
    console.log(res);
    this.setData({relativeVideo: res.data})
  }
});
