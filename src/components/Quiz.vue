<template>
  <div id="quiz">
    <div class="quiz-main">
      <ul class="quiz-main-list">
        <li v-for="(items, index) in race" :key="items.index">
          <img :src="items.ballUrl" />
          <p>{{ items.Regseason }}</p>
          <div>
            <p>{{ items.WarObj }}</p>
          </div>
          <button type="button" @click="toVideo(index, items)">
            <img :src="items.VideoImg" />视频回放
          </button>
        </li>
      </ul>
    </div>

    <share />
  </div>
</template>
<script>
import share from "./Share.vue";
export default {
  data() {
    return {
      race: [
        {
          ballUrl: require("../assets/1.png"), //球类照片
          Regseason: "CBA 常规赛", //比赛类型
          WarObj: "上海VS广东", //比赛对象
          VideoImg: require("../assets/2.png"), //视频播放器图片
          VideoUrl: "https://res.cdn.changbaimg.com/-/65c42f621e171e82/2.mp4", //视频
        },
        {
          ballUrl: require("../assets/1.png"), //球类照片
          Regseason: "NBA 常规赛", //比赛类型
          WarObj: "东莞VS上海", //比赛对象
          VideoImg: require("../assets/2.png"), //视频播放器图片
          VideoUrl: "https://res.cdn.changbaimg.com/-/86186e288bc8f097/6.mp4", //视频
        },
      ],
    };
  },
  components: {
    share,
  },
  methods: {
    toVideo(index, items) {
      this.current = index; //当前对象下标值
      //获取点击对象
      console.log("当前对象的内容：" + items);
      console.log("下标：" + this.current);
      let routeData = this.$router.resolve({
        path: "/Video",
        query: {
          VideoUrl: items.VideoUrl,
          WarObj: items.WarObj,
        },
      });
      window.open(routeData.href, "_blank");
    },
  },
};
</script>

<style lang="less" scoped>
@import url(../css/quiz.less);
</style>