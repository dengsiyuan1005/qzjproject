<template>
  <div id="member-center">
    <div class="container">
      <div class="member">
        <div class="member-head">
          <img :src="this.user.avatar" alt="" />
          <div class="loginP">
            <div class="gologin">登录</div>
            <p>登录即享受更多服务</p>
          </div>
        </div>
        <div class="member-after">
          <ul class="member-after-list">
            <li v-for="item in rights" :key="item.rightsImg">
              <img :src="item.rightsImg" />
              <p>{{ item.illustrate }}</p>
            </li>
          </ul>
          <div class="buttonBtn">
            <button class="btn1">查看更多权益</button>
            <button class="btn2">问题反馈</button>
          </div>
        </div>
      </div>
    </div>
    <share />
  </div>
</template>

<script>
import share from "../components/Share.vue";
export default {
  components: { share },
  data() {
    return {
      user: {
        avatar: require("../assets/21.png"), //用户头像
        accound: "admin", //账号
        password: "123456", //密码
        isMember: false, //是否是会员
      },
      rights: [
        {
          rightsImg: require("../assets/31.png"), //权益照片
          illustrate: "海量赛事", //说明
        },
        {
          rightsImg: require("../assets/32.png"), //权益照片
          illustrate: "高清直播", //说明
        },
        {
          rightsImg: require("../assets/33.png"), //权益照片
          illustrate: "高清点播", //说明
        },
        {
          rightsImg: require("../assets/34.png"), //权益照片
          illustrate: "多端多屏", //说明
        },
        {
          rightsImg: require("../assets/35.png"), //权益照片
          illustrate: "精华联播", //说明
        },
        {
          rightsImg: require("../assets/36.png"), //权益照片
          illustrate: "全站无广告", //说明
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
#member-center {
  background: #222223;
  height: 100vh;
  .container {
    width: 382px;
    height: 700px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #222223;
    .member {
      margin-top: 130px;
      margin-bottom: 50px;
      height: 446px;
      background: #2d2c2d;
      border-radius: 15px;
      .member-head {
        display: flex;
        width: 382px;
        height: 115px;
        border-bottom: 1px solid #222223;
        img {
          width: 70px;
          height: 70px;
          border: 1px solid #1f1f19;
          border-radius: 50%;
          margin-left: 30px;
          margin-top: 22.5px;
        }
        .loginP {
          width: 128px;
          height: 100%;
          margin-left: 30px;
          .gologin {
            font-size: 16px;
            font-weight: 500;
            color: #ebcba7;
            margin-top: 30px;
            margin-bottom: 10px;
            cursor: pointer;
          }
          &:nth-child(2) {
            font-size: 12px;
            padding: 5px;
            color: #c8c8c8;
          }
        }
      }
      .member-after {
        width: 100%;
        height: 331px;
        .member-after-list {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 126px;
            height: 78px;
            margin-top: 30px;
            img {
              width: 44px;
              height: 44px;
              margin-left: 50%;
              transform: translateX(-50%);
              cursor: pointer;
            }
            p {
              text-align: center;
              font-size: 14px;
              font-weight: 400;
              color: #ebcba7;
              margin-top: 14px;
            }
          }
          img:hover {
            opacity: 0.8;
          }
        }
        .buttonBtn {
          display: flex;
          justify-content: space-around;
          button {
            width: 144px;
            height: 34px;
            border-radius: 17px;
            border: none;
            margin-top: 30px;
          }
          .btn1 {
            background: #ebc59f;
          }
          .btn2 {
            background: #444140;
          }
        }
      }
    }
  }
}
</style>