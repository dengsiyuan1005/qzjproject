<template>
  <div id="member">
    <div class="member-head">
      <div class="member-nav">
        <ul class="member-nav-list">
          <li>
            <img
              src="https://static-vip.sports.cctv.com/cctv-vip/pc/loginfootIcon/logo.png"
              alt=""
              class="cctvImg"
              @click="toHome"
            />
          </li>
          <li v-for="item in memberRouter" :key="item.title">
            <router-link :to="item.JumpPath">{{ item.title }}</router-link>
          </li>
          <li class="user">
            <button @click="toMemberCenter" v-if="buttonHide">登录</button>
            <div class="Userinformation" v-if="UserinformationShow">
              <img
                src="../assets/user.gif"
                class="userImg"
                @mouseover="operateShow"
              />
              <div class="operate" v-if="operate" @mouseleave="operateHide">
                <div class="operate-head">
                  <img src="../assets/user.gif" />
                  <p>{{ $store.getters.getUser.nickname }}</p>
                </div>
                <div class="operate-after">
                  <p @click="onPersonalcenter">个人中心</p>
                  <p @click="loginOut">退出</p>
                </div>
              </div>
            </div>
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
      operate: false,
      buttonHide: true,
      UserinformationShow: false,
    };
  },
  created() {
    let data = sessionStorage.getItem("isLogin");
    console.log(data);
    if (data === "true") {
      this.buttonHide = false;
      this.UserinformationShow = true;
    } else {
      this.buttonHide = true;
      this.UserinformationShow = false;
    }
  },
  beforeUpdateupdated() {},
  methods: {
    toHome() {
      this.$router.push({ path: "/" });
    },
    toMemberCenter() {
      this.$router.push({ path: "MemberCenter" });
    },
    operateShow() {
      this.operate = true;
    },
    operateHide() {
      this.operate = false;
    },
    //退出登录
    loginOut() {
      sessionStorage.clear();
      window.location.reload(true); //刷新页面
    },
    //跳转个人中心
    onPersonalcenter() {
      this.$router.push({ path: "Personalcenter" });
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
        position: relative;
        display: flex;
        li {
          font-size: 16px;
          margin-right: 25px;
          line-height: 90px;
          font-weight: 600;
        }
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
        .cctvImg {
          width: 214px;
          height: 51px;
          vertical-align: middle;
        }
        .user {
          position: absolute;
          right: 0;
          button {
            width: 85px;
            height: 34px;
            background: #f7dcc0;
            border-radius: 17px;
            border: none;
            font-size: 16px;
            font-weight: 600;
            color: #613f25;
            cursor: pointer;
            top: 28px;
          }
          .Userinformation {
            .userImg {
              width: 34px;
              height: 34px;
              border-radius: 50%;
              cursor: pointer;
              vertical-align: middle;
              position: relative;
            }
            .userImg:hover {
              opacity: 0.8;
            }
            .operate {
              width: 264px;
              height: 110px;
              position: absolute;
              left: -205px;
              top: 87px;
              background: #222223;
              border-radius: 10px;
              .operate-head {
                display: flex;
                width: 240px;
                height: 61px;
                border-bottom: 1px solid #2d2c2d;
                img {
                  width: 34px;
                  height: 34px;
                  border-radius: 50%;
                  cursor: pointer;
                  // vertical-align: middle;
                  margin-top: 13px;
                  margin-left: 10px;
                }
                p {
                  line-height: 61px;
                  margin-left: 10px;
                  font-weight: 500;
                  color: #c8c8c8;
                  font-size: 14px;
                }
              }
              .operate-after {
                display: flex;
                justify-content: space-around;
                p {
                  line-height: 49px;
                  font-size: 14px;
                  color: #c8c8c8;
                }
                p:hover {
                  color: rgb(199, 154, 115);
                }
              }
            }
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