Component({
  mixins: [],
  data: {},
  props: {
    title: String,
    isShowMore: true,
    onMoreTap: () => {}
  },
  ref(){
    return this.onMoreTap();
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onMoreclick(){
      this.props.onMoreTap();
    }
  },
});
