<template>
  <div id="member">
    <div class="member-head">
      <div class="member-nav">
        <ul class="member-nav-list">
          <li>
            <img
              src="https://static-vip.sports.cctv.com/cctv-vip/pc/loginfootIcon/logo.png"
              alt=""
              @click="toHome"
            />
          </li>
          <li v-for="item in memberRouter" :key="item.title">
            <router-link :to="item.JumpPath">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      memberRouter: [
        {
          title: "首页",
          JumpPath: "/MemberHome",
        },
        {
          title: "会员中心",
          JumpPath: "/MemberCenter",
        },
      ],
    };
  },
  methods: {
    toHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="less" scoped>
.router-view {
  width: 100%;
  height: 800px;
}
#member {
  .member-head {
    width: 100%;
    height: 90px;
    background: #2d2c2d;
    position: sticky;
    z-index: 12;
    top: 0;
    .member-nav {
      width: 1200px;
      height: 90px;
      // background: #2d2c2d;
      margin-left: auto;
      margin-right: auto;
      .member-nav-list {
        display: flex;
        li {
          font-size: 16px;
          margin-right: 25px;
          line-height: 90px;
          font-weight: 600;
          a {
            color: #fff;
            font-size: 16px;
          }
          a:hover {
            color: #d8bea4;
          }
          &:nth-child(2) {
            margin-left: 50px;
          }
          img {
            width: 214px;
            height: 51px;
            vertical-align: middle;
          }
        }
        .active {
          font-size: 20px;
        }
      }
    }
  }
}
</style>