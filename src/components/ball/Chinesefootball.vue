<template>
  <div id="backetball">
    <ul class="backetballList">
      <li v-for="item in backetball" :key="item.title">
        <img :src="item.backetballImg" />
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  data() {
    return {
      backetball: [
        {
          title: "泡椒27分快船大逆转 巴特勒缺阵热火遭连败",
          backetballImg: require("../../assets/21.jpg"),
          backetballVideo: "",
        },
        {
          title: "[CBA]四川男篮轻取福建男篮 结束五连败",
          backetballImg: require("../../assets/22.png"),
          backetballVideo: "",
        },
        {
          title: "[CBA]山西男篮大比分获胜 送给同曦九连败",
          backetballImg: require("../../assets/23.png"),
          backetballVideo: "",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
#backetball {
  .backetballList {
    li {
      display: flex;
      background: #fff;
      width: 800px;
      height: 158px;
      margin-top: 20px;

      img {
        width: 210px;
        height: 118px;
        margin: 20px;
      }
      p {
        font-size: 20px;
        line-height: 60px;
      }
      p:hover {
        color: red;
      }
    }
    li:hover {
      background: #e5e5e5;
    }
  }
}
</style>