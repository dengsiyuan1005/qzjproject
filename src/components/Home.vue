<template>
  <div id="home">
    <div class="box1">
      <div class="home-head">
        <div class="home-head-left"></div>
        <div class="home-head-right">
          <ul class="home-head-right-list">
            <li
              v-for="(item, index) in headList"
              :key="item.title"
              @mouseover="newsList(index)"
              :class="{ active: current === index }"
            >
              <a href="#" :key="item.imgUrl"><img :src="item.imgUrl" /></a>
              <h2>{{ item.title }}</h2>
              <p>
                {{ item.introduce }}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <homecenter />
    </div>
    <div class="home-footer-container">
      <div class="home-footer-container-tab">
        <ul class="home-footer-container-tab-list">
          <li
            v-for="(tab, index) in containerTabList"
            :key="tab.index"
            @click="SelectLi(index)"
            :class="{ isActive: SelectedLi === index }"
          >
            <router-link :to="tab.toPath">{{ tab.tabName }}</router-link>
          </li>
        </ul>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homecenter from "../bus/home-center.vue";
export default {
  data() {
    return {
      headList: [
        {
          title: "《天下足球》哈维回归 迎接挑战",
          introduce:
            "意甲，米兰德比握手言和；法甲，巴黎赢波尔多；梅西期待重返巴萨；哈维梦想成真。",
          imgUrl: require("../assets/40.jpg"),
        },
        {
          title: "CBA-北京终结浙江连胜 辽宁7连胜",
          introduce:
            "CBA第11轮，李慕豪两双，北京战胜浙江，取得两连胜；辽宁胜山东，获得7连胜。",
          imgUrl: require("../assets/41.jpg"),
        },
        {
          title: "世预赛国足两场比赛对球迷开放",
          introduce:
            "意甲，米兰德比握手言和；法甲，巴黎赢波尔多；梅西期待重返巴萨；哈维梦想成真。",
          imgUrl: require("../assets/42.jpg"),
        },
        {
          title: "CBA-六人上双 吉林送宁波11连败",
          introduce:
            "CBA第11轮，徐杰26分赵睿12助攻，易建联10分，广东110-98大胜天津。",
          imgUrl: require("../assets/43.jpg"),
        },
        {
          title: "历届冬奥会中国奖牌榜第8枚-杨阳",
          introduce:
            "1998年长野冬奥会短道速滑女子1000米决赛中，中国选手杨阳再次获得银牌。",
          imgUrl: require("../assets/44.jpg"),
        },
        {
          title: "解锁新难度！谷爱凌成世界第一人",
          introduce:
            "谷爱凌在冬奥会的训练备战中，完成了世界首个女子自由式滑雪前空翻两周加转体四周。。",
          imgUrl: require("../assets/45.jpg"),
        },
      ],
      containerTabList: [
        {
          tabName: "篮球",
          toPath: "Basketball",
        },
        {
          tabName: "国际足球",
          toPath: "Interfootball",
        },
        {
          tabName: "中国足球",
          toPath: "Chinesefootball",
        },
      ],
      current: 0, //默认显示图片
      SelectedLi: 0,
      timer: null, //定时器
      routerUrl: "", //跳转的地址
    };
  },
  methods: {
    newsList(index) {
      this.current = index;
      // console.log(this.current === index);
    },
    // 定时器函数
    autoPlay() {
      this.timer = setInterval(() => {
        this.newsList(this.nextIndex);
      }, 3000);
    },
    //球类标题
    SelectLi(index) {
      this.SelectedLi = index;
      this.routerUrl = this.containerTabList[index].toPath;
      // console.log(this.containerTabList[index].toPath);
      console.log(this.routerUrl);
      // this.$router.push({ puth: this.routerUrl });
      console.log(index);
    },
  },
  created() {
    console.log(this.headList.length);
  },
  computed: {
    // 计算当前图片位置
    nextIndex() {
      // 如果当前index等等于数组length-1 就return0 否则就当前index加1
      if (this.current == this.headList.length - 1) {
        return 0;
      } else {
        return this.current + 1;
      }
    },
  },
  mounted() {
    this.autoPlay();
  },
  components: {
    homecenter,
  },
};
</script>



<style lang="less" scoped>
#home {
  background: url("https://p1.img.cctvpic.com/photoAlbum/templet/common/DEPA1563326600105320/bg1_02.jpg");
  width: 100%;
  min-height: 2000px;
  background-size: 100%;

  .home-head {
    position: relative;
    // margin-top: 44px;
    display: flex;
    width: 1200px;
    height: 450px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }
  .home-head-left {
    width: 830px;
    height: 450px;
  }
  .home-head-right {
    width: 370px;
    height: 450px;
    .home-head-right-list {
      padding: 40px 0 40px 0;
      li {
        color: #fff;
        width: 370px;
        height: 56px;
        h2,
        p {
          margin-left: 30px;
        }
        h2 {
          font-size: 16px;
          line-height: 56px;
        }
        p {
          font-size: 14px;
          line-height: 25px;
          display: none;
        }
        img {
          position: absolute;
          top: 0;
          left: 0;
          display: none;
        }
      }
      .active {
        height: 90px;
        font-size: 20px;
        background: url(https://p1.img.cctvpic.com/photoAlbum/templet/common/DEPA1563326600105320/text_03.png);
        h2 {
          line-height: 34px;
        }
        p {
          display: block;
        }
        img {
          display: block;
        }
      }
    }
  }
  .home-footer-container {
    width: 800px;
    min-height: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    position: relative;

    .home-footer-container-tab {
      top: 0px;
      width: 800px;
      height: 51px;
      .home-footer-container-tab-list {
        display: flex;
        justify-content: center;
        background: #fff;
        li {
          width: 160px;
          height: 50px;
          text-align: center;
          a {
            font-size: 18px;
            line-height: 51px;
            color: #666666;
            border-bottom: solid 1 px #f5f5f5;
            display: block;
            width: 100%;
            height: 51px;
          }
        }

        .isActive {
          background: red;
          a {
            color: #fff;
            font-weight: 600;
          }
        }
      }
      .content {
        width: 100%;
        min-height: 200px;
        border: 1px solid red;
      }
    }
  }
}
</style>