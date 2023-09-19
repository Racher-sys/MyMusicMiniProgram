Component({
  mixins: [],
  data: {
  },
  props: {
    recommendItem: {}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    musicPlayTap(){
      my.navigateTo({
        url: `/pages/music-player/music-player?id=${this.props.recommendItem.id}`
      })
      console.log(this.props.recommendItem);
    }
  },
});
