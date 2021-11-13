<template>
  <div id="member-center">
    <div class="container">
      <div class="member">
        <div class="member-head">
          <img src="../assets/21.png" @click="onPersonalcenter" />
          <div class="loginP">
            <div class="gologin">
              <p v-if="gologinHide" @click="goLogin">登录</p>
              <p v-if="gologinShow">{{ $store.getters.getUser.nickname }}</p>
            </div>

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
      <div class="login" v-if="containerShow">
        <p @click="showLogin">
          请登录 <span class="dowm" @click="shutDown">X</span>
        </p>
        <div class="login-container" v-if="loginShow">
          <input
            type="text"
            v-model="user.username"
            placeholder="输入用户名"
            id="input1"
          />
          <input
            type="password"
            v-model="user.password"
            placeholder="密码"
            id="input2"
          />
          <!-- 绑定表单验证 -->
          <p v-bind:class="{ error: user.isError }" class="prompt">
            {{ user.notice }}
          </p>

          <button @click="onLogin">确认登录</button>
        </div>
        <p @click="showRegister">请注册</p>
        <div class="register-container" v-if="registerShow">
          <input
            type="text"
            v-model="register.username"
            placeholder="输入用户名"
            id="input1"
          />
          <input
            type="password"
            v-model="register.password"
            placeholder="密码"
            id="input2"
          />
          <!-- 绑定表单验证 -->
          <p v-bind:class="{ error: register.isError }" class="prompt">
            {{ register.notice }}
          </p>
          <button @click="onRegister">确认注册</button>
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
      gologinHide: true, //登录前
      gologinShow: false,
      containerShow: false,
      loginShow: true,
      registerShow: false,
      user: {
        avatar: require("../assets/21.png"), //用户头像
        nickname: "", //用户昵称
        username: "", //账号
        password: "", //密码
        isMember: false, //是否是会员
        notice: "请输入用户名和密码",
        isError: false,
      },
      register: {
        username: "",
        password: "",
        notice: "创建账号后请记住用户名和密码",
        isError: false,
      },
    };
  },
  created() {
    let data = sessionStorage.getItem("isLogin");
    console.log(data);
    if (data === "true") {
      this.gologinHide = false;
      this.gologinShow = true;
    } else {
      this.gologinHide = true;
      this.gologinShow = false;
    }
  },
  updated() {},
  methods: {
    goLogin() {
      this.containerShow = true;
    },
    showLogin() {
      this.loginShow = true;
      this.registerShow = false;
    },
    showRegister() {
      this.loginShow = false;
      this.registerShow = true;
    },
    //登录
    onLogin() {
      let result1 = this.validUsername(this.user.username);
      if (!result1.isValid) {
        this.user.isError = true;
        this.user.notice = result1.notice;
        return;
      }
      let result2 = this.validPssword(this.user.password);
      if (!result2.isValid) {
        this.user.isError = true;
        this.user.notice = result2.notice;
        return;
      }
      if (this.user.username === "admin" && this.user.password === "123456") {
        this.user.isError = false;
        this.user.notice = "";
        sessionStorage.setItem("isLogin", "true"); //登录成功把登录转态存在服务器，这个到时候你要专门写个接口来判断用户是否登录
        this.$store.dispatch("asyncUpdateUser", { avatar: this.user.avatar }); //用户头像
        this.$store.dispatch("asyncUpdateUser", {
          username: this.user.username,
        }); //用户账号
        this.$router.push({ path: "MemberHome" });
        window.location.reload(true); //刷新页面
        this.$message({
          //先是引用element，这个正确返回，要你后端传过来
          message: "登录成功",
          type: "success",
        });
      } else {
        this.user.isError = true;
        //先是引用element，这个错误返回，要你后端传过来
        this.$message.error("用户名或密码错误");
        return false;
      }
      console.log(
        "开始登录,用户名是",
        this.user.username,
        "密码是",
        this.user.password
      );
    },
    //注册
    onRegister() {},
    //关闭登录窗口
    shutDown() {
      this.containerShow = false;
    },
    // 表单验证
    validUsername(username) {
      return {
        isValid: /^[a-zA-z_0-9\u4e00-\u9fa5]{3,15}$/.test(username),
        notice: "用户名必须是3-15个字符，限于数字下划线中文",
      };
    },
    validPssword(password) {
      return {
        isValid: /^.{6,16}$/.test(password),
        notice: "密码长度为6~16个字符",
      };
    },
    onPersonalcenter() {
      //跳转个人中心
      let data = sessionStorage.getItem("isLogin");
      console.log(data);
      if (data !== "true") {
        this.containerShow = true;
      } else {
        this.$router.push({ path: "/Personalcenter/Personalcenter" });
      }
    },
  },
};
</script>

<style lang="less" scoped>
#member-center {
  background: #222223;
  height: 100vh;
  .container {
    position: relative;
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

    .login {
      p,
      input,
      button {
        cursor: pointer;
      }
      width: 460px;
      height: 427px;
      position: absolute;
      top: 150px;
      right: -38px;
      background: #222224;
      border: 1px solid #313132;
      p {
        position: relative;
        color: #fff;
        font-size: 20px;
        text-align: center;
        width: 100%;
        line-height: 40px;
        height: 40px;
        border: 1px solid rgb(43, 43, 36);
        .dowm {
          position: absolute;
          right: 10px;
        }
      }
      .register-container,
      .login-container {
        input {
          width: 360px;
          padding-left: 40px;
          height: 49px;
          outline: none;
          border: none;
          margin-left: 50px;
          border-bottom: 1px solid #313132;
          background: #222224;
          font-size: 20px;
          color: #fff;
        }
        #input1 {
          margin-top: 70px;
        }
        #input2 {
          margin-top: 30px;
        }
        .prompt {
          font-size: 12px;
          border: none;
          color: #e5e5e5;
        }
        button {
          width: 360px;
          height: 50px;
          border-radius: 25px;
          color: #fff;
          font-weight: 600;
          font-size: 16px;
          height: 50px;
          background-color: #2d2c2d;
          border: none;
          margin-left: 50%;
          transform: translateX(-50%);
          margin-top: 50px;
        }
      }
    }
  }
}
</style>