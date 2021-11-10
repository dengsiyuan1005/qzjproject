<template>
  <div class="copyright">
    <div class="copyright-head">
      <ul class="copyright-head-list">
        <li>
          <p>关于我们</p>
          <a href="#">总台之声</a>
          <a href="#">CCTV广告中心</a>
          <a href="#">关于CCTV.com</a>
          <a href="#">象舞广告</a>
          <a href="#">网站声明</a>
        </li>
        <li>
          <p>业务概况</p>
          <a href="#">央视网</a>
          <a href="#">互联网电视</a>
          <a href="#">央视影音</a>
          <a href="#">手机电视</a>
          <a href="#">移动传媒</a>
        </li>
        <li>
          <p>更多链接</p>
          <a href="#">网上有害信息举报专区</a>
          <a href="#">辟谣平台</a>
          <a href="#">法律顾问</a>
          <a href="#">友情链接</a>
          <a href="#">人才招聘 </a>
        </li>
        <li>
          <p>
            <img src="../assets/3.png" alt="" />
          </p>
          <a href="#">关于我们</a>
          <a href="#">智媒学院</a>
          <a href="#">成果发布</a>
          <a href="#">智慧媒体</a>
          <a href="#">智慧政务</a>
          <a href="#">智慧教育</a>
          <button>合作咨询</button>
        </li>
      </ul>
    </div>
    <div class="copyright-footer">
      <div class="footer-list">
        <div class="copyright-footer-left">
          <p>
            <a href="#">违法和不良信息举报电话:010-88047123</a>
            <a href="#">京ICP证060535号 </a>
            <img src="../assets/4.png" alt="" />
            <a href="#">京公网安备 11000002000018号</a>
            京网文[2014]0383-083号 网上传播视听节目许可证号 0102002
            新出网证（京）字098号
          </p>
        </div>
        <div class="copyright-footer-right">
          <p>
            <img src="../assets/5.jpg" alt="" />
            <img src="../assets/6.jpg" alt="" />
            网络110 报警服务
          </p>
          <p>中央广播电视总台 央视网 版权所有</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
.copyright {
  background: #333333;
  width: 100%;
  height: 300px;
  .copyright-head {
    height: 200px;
    .copyright-head-list {
      display: flex;
      width: 1200px;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
      li {
        display: flex;
        flex-wrap: wrap;
        width: 300px;
        height: 200px;
        background: #333333;
        p {
          color: #c10714;
          font-size: 20px;
          padding-top: 28px;
          padding-bottom: 10px;
          padding-left: 28px;
          font-weight: bold;
          width: 100%;
        }
        a {
          color: #fff;
          font-size: 14px;
          padding-left: 28px;
          width: 140px;
          height: 24px;
        }
        button {
          width: 265px;
          height: 30px;
          background: #272727;
          border: none;
        }
        a:hover {
          color: red;
        }
        button:hover {
          color: red;
        }
      }
      &:nth-child(3) {
        width: 200px;
        height: 200px;
      }
      &:nth-child(4) {
        width: 400px;
        height: 200px;
      }
    }
  }

  .copyright-footer {
    display: flex;
    width: 100%;
    height: 100px;
    background: #272727;
    .footer-list {
      a,
      p {
        font-size: 12px;
        color: #cacaca;
        line-height: 28px;
        margin-top: 20px;
      }
      display: flex;
      width: 1200px;
      margin-left: auto;
      margin-right: auto;
      .copyright-footer-left {
        display: flex;
        width: 668px;
        height: 100px;
      }
      .copyright-footer-right {
        width: 200px;
        height: 100px;
        margin-left: 255px;
        img {
          margin-left: 10px;
        }
        p {
          line-height: 11px;
        }
      }
    }
  }
}
</style>