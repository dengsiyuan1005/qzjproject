<template>
  <div id="personal">
    <!-- 重置昵称 -->
    <div class="reset" @click="onReset">✖</div>
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="74px"
      class="demo-ruleForm"
    >
      <el-form-item label="昵称:" prop="name" hide-required-asterisk="true">
        <el-input v-model="ruleForm.nickname"> </el-input>
      </el-form-item>
      <el-form-item label="性别:" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <div class="times">
        <p>生日:</p>
        <!-- 年 -->
        <select class="optionYear">
          <option value="2020" v-for="Year in year" :key="Year.i">
            {{ Year }}年
          </option>
        </select>
        <!-- 月 -->
        <select class="optionMonth">
          <option value="5" v-for="Month in month" :key="Month.i">
            {{ Month }}月
          </option>
        </select>
        <!-- 日 -->
        <select class="optionDay">
          <option value="5" v-for="Day in day" :key="Day.i">{{ Day }}日</option>
        </select>
      </div>
      <div class="region">
        <p>所在地:</p>
        <v-distpicker hide-area></v-distpicker>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交修改</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { year, month, day } from "../externalJs/data"; //引入外部日期
import VDistpicker from "v-distpicker"; //引入外部地区选择器
export default {
  data() {
    return {
      ruleForm: {
        nickname: "", //昵称
        resource: "", //性别
        year: "", //年
        month: "", //月
        day: "", //日
        region: {
          province: "", //省
          city: "", //市
        },
      },
    };
  },
  created() {
    this.year = year; //把它赋值到data里面的数据
    console.log((this.year = year));
    this.month = month;
    this.day = day;
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    onReset() {
      //置空昵称
      this.ruleForm.name = "";
    },
  },
  compoents: {
    VDistpicker,
  },
};
</script>

<style lang="less" scoped>
#personal {
  //输入重置按钮
  position: relative;
  .reset {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #2d2c2d;
    text-align: center;
    position: absolute;
    top: 12px;
    left: 371px;
    z-index: 100;
    cursor: pointer;
  }
  //-------------------------------------------------
  //时间选择器
  .times {
    display: flex;
    width: 934px;
    height: 34px;
    margin-bottom: 30px;
    p {
      font-size: 14px;
      color: #b7b7b7;
      line-height: 34px;
      margin-left: 30px;
      margin-right: 20px;
    }
    select {
      border: none;
      outline: none;
      background: #424242;
      color: #fff;
      margin-left: 20px;
      border-radius: 4px;
      text-align: center;
    }
    .optionYear {
      width: 109px;
      height: 34px;
    }
    .optionMonth,
    .optionDay {
      width: 84px;
      height: 34px;
    }
  }
  //-------------------------------------------

  //地区选择器样式
  .region {
    display: flex;
    p {
      font-size: 14px;
      color: #b7b7b7;
      line-height: 34px;
      margin-left: 30px;
    }
  }
  /deep/.distpicker-address-wrapper {
    margin-left: 25px;
    margin-bottom: 30px;
  }
  /deep/.distpicker-address-wrapper select {
    width: 160px;
    height: 34px;
    outline: none;
    background: #424242;
    color: #fff;
  }

  // -------------------------------------------------------

  //element ui 表单
  /deep/.demo-ruleForm {
    margin-top: 30px;
  }
  /deep/.el-form-item__label {
    display: inline-block;
    color: #b7b7b7;
    font-size: 14px;
  }
  /deep/.el-input__inner {
    width: 300px;
    height: 34px;
    background: #424242;
    margin-left: 25px;
    outline: none;
    border: none;
    color: #fff;
  }
  //--------------------------------------------------------

  //element ui 单选框
  /deep/.el-radio-group {
    margin-left: 25px;
  }
  /deep/.el-radio__input.is-checked + .el-radio__label {
    color: #fff;
  }
  /deep/ .el-radio__input.is-checked .el-radio__inner {
    background: #2d2c2d;
    border-color: #d8bea4;
    width: 16px;
    height: 16px;
  }
  /deep/.el-radio__inner {
    background-color: #2d2c2d;
    width: 16px;
    height: 16px;
  }
  //-------------------------------------------------------

  //element ui 提交按钮
  /deep/.el-button--primary {
    margin-left: 55px;
    width: 120px;
    height: 34px;
    color: #613f25;
    font-size: 14px;
    background: #f7dcc1;
    border-radius: 17px;
    border: none;
  }
}
</style>