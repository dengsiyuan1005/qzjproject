<template>
  <div id="Personale">
    <div class="container">
      <div class="aside">
        <div class="info">
          <img src="../assets/user.gif" />
          <p>昵称</p>
          <p class="username">用户名</p>
        </div>
        <div class="asideContent">
          <ul class="asideContentList">
            <li
              v-for="(item, index) in asideList"
              :key="item.title"
              @click="Selected(index)"
              :class="count == index ? 'active' : ' '"
            >
              <router-link :to="item.toPath">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      asideList: [
        {
          title: "个人资料",
          toPath: "Personal",
        },
        {
          title: "播放记录",
          toPath: "Recording",
        },
      ],
      user: {
        nickname: "",
        gender: "", //性别
      },
      count: "0", //默认下标
      asideContentViewShow: false,
    };
  },
  methods: {
    Selected(index) {
      this.count = index;
      this.asideContentViewShow = true;
      console.log(this.count);
    },
  },
};
</script>



<style lang="less" scoped>
#Personale {
  background: #222223;
  height: 100vh;
  .container {
    display: flex;
    width: 1200px;
    height: 514px;
    margin-left: auto;
    margin-right: auto;
    .aside {
      background: #2d2c2d;
      width: 180px;
      height: 454px;
      margin-right: 30px;
      margin-top: 30px;
      border-radius: 10px;
      .info {
        height: 184px;
        img {
          width: 74px;
          height: 74px;
          border-radius: 50%;
          margin-left: 50%;
          transform: translateX(-50%);
          margin-top: 20px;
          margin-bottom: 20px;
        }
        p {
          font-size: 16px;
          font-weight: 500;
          color: #c8c8c8;
          text-align: center;
          margin-bottom: 10px;
        }
        .username {
          font-size: 12px;
          color: #858585;
        }
      }
      .asideContent {
        position: relative;
        .asideContentList {
          li {
            height: 54px;
            line-height: 54px;
            text-align: center;
            font-size: 18px;
            color: #b7b7b7;
            a {
              width: 100%;
              height: 54px;
              color: #b7b7b7;
              display: block;
            }
            .asideContentView {
              width: 990px;
              min-height: 305px;
              border: 1px solid red;
              position: absolute;
              top: -183px;
              right: -1020px;
            }
          }
          .active {
            a {
              color: #d8bea4;
            }
            background: #424242;
          }
        }
      }
    }

    .main {
      width: 990px;
      height: 454px;
      margin-top: 30px;
      background: #2d2c2d;
      border-radius: 10px;
    }
  }
}
</style>