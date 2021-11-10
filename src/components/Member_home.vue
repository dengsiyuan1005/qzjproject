<template>
  <div id="member-home">
    <div class="container">
      <div class="rotation">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in Rotation" :key="item.imgUrl">
            <img :src="item.imgUrl" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="member-home-video">
      <p class="title">视频新闻</p>
      <ul class="member-home-video-list">
        <li
          v-for="items in videoList"
          :key="items.imgUrl2"
          @click="toVideo2(items)"
        >
          <div class="member-home-video-list-li-befo">
            <img :src="items.imgUr2" alt="" />
          </div>
          <div class="member-home-video-list-li-after">
            <p>{{ items.title }}</p>
          </div>
        </li>
      </ul>
    </div>
    <share />
  </div>
</template>


<script>
import Share from "../components/Share.vue";
import share from "../components/Share.vue";
export default {
  components: { Share },
  data() {
    return {
      Rotation: [
        {
          imgUrl: require("../assets/11.jpg"),
        },
        {
          imgUrl: require("../assets/12.jpg"),
        },
        {
          imgUrl: require("../assets/13.jpg"),
        },
        {
          imgUrl: require("../assets/14.jpg"),
        },
        {
          imgUrl: require("../assets/15.jpg"),
        },
      ],
      videoList: [
        {
          imgUrl2: require("../assets/16.jpg"),
          title: " [体育世界]完整版 20211108",
          videoUrl: "https://res.cdn.changbaimg.com/-/65c42f621e171e82/2.mp4",
        },
        {
          imgUrl2: require("../assets/17.jpg"),
          title: " [CBA]梅森、费尔德荣膺CBA第10轮得分王",
          videoUrl: "https://res.cdn.changbaimg.com/-/86186e288bc8f097/6.mp4",
        },
        {
          imgUr2: require("../assets/18.jpg"),
          title: "[短道速滑]奥林匹克典藏：李坚柔重温2014年冬奥会",
          videoUrl: "",
        },
        {
          imgUrl2: require("../assets/19.jpg"),
          title: " [体坛快讯]完整版 20211108",
          videoUrl: "",
        },
        {
          imgUrl2: require("../assets/20.jpg"),
          title: " [国足]营造主场氛围 国足申请开放球场座席",
          videoUrl: "",
        },
        {
          imgUrl2: require("../assets/15.jpg"),
          title: " [体育世界]完整版 20211108",
          videoUrl: "https://res.cdn.changbaimg.com/-/65c42f621e171e82/2.mp4",
        },
        {
          imgUrl2: require("../assets/14.jpg"),
          title: " [CBA]梅森、费尔德荣膺CBA第10轮得分王",
          videoUrl: "https://res.cdn.changbaimg.com/-/86186e288bc8f097/6.mp4",
        },
        {
          imgUr2: require("../assets/13.jpg"),
          title: "[短道速滑]奥林匹克典藏：李坚柔重温2014年冬奥会",
          videoUrl: "",
        },
        {
          imgUrl2: require("../assets/12.jpg"),
          title: " [体坛快讯]完整版 20211108",
          videoUrl: "",
        },
        {
          imgUrl2: require("../assets/11.jpg"),
          title: " [国足]营造主场氛围 国足申请开放球场座席",
          videoUrl: "",
        },
      ],
    };
  },
  methods: {
    toVideo2(items) {
      console.log(items);
      let routeData = this.$router.resolve({
        path: "/Video",
        query: {
          VideoUrl: items.videoUrl,
          WarObj: items.title,
        },
      });
      window.open(routeData.href, "_blank");
    },
  },
  compoents: {
    share,
  },
};
</script>

<style lang="less" scoped>
#member-home {
  background: #222223;
  .container {
    width: 1200px;
    height: 486px;
    border: 1px solid #222223;
    margin-left: auto;
    margin-right: auto;
    .rotation {
      width: 1200px;
      height: 466px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
      /deep/.el-carousel__container {
        height: 466px;
      }
      /deep/.el-carousel__arrow {
        display: none;
      }
      /deep/.el-carousel__indicators--horizontal {
        margin-left: 400px;
      }
      /deep/.el-carousel__button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }
    }
  }
  .member-home-video {
    width: 1200px;
    min-height: 567px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 38px;
    .title {
      font-size: 24px;
      color: #c8c8c8;
      font-weight: 500;
      line-height: 33px;
      margin-top: 28px;
      margin-bottom: 28px;
    }
    .member-home-video-list {
      display: flex;
      flex-wrap: wrap;
      li {
        background: #2d2c2d;
        width: 224px;
        height: 218px;
        border-radius: 10px 10px 10px 10px;
        margin-right: 20px;
        margin-bottom: 20px;
        transition: all 0.4s;
        &:nth-child(5) {
          margin-right: -20px;
        }
        &:nth-child(10) {
          margin-right: -20px;
        }
      }
      li:hover {
        opacity: 0.8;
      }

      .member-home-video-list-li-befo {
        img {
          width: 100%;
          height: 140px;
          border-radius: 10px 10px 0 0;
        }
      }
      .member-home-video-list-li-after {
        width: 100%;
        height: 78px;
        p {
          font-size: 16px;
          color: #c8c8c8;
          font-weight: 500;
          text-align: center;
          line-height: 33px;
        }
      }

      .member-home-video-list-li-after:hover {
        //触碰样式。。。。。。
      }
      img:hover {
        // transform: translateY(-10px);
        // box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        // transform: translate3d(0, -4px, 0);
      }
    }
  }
}
</style>