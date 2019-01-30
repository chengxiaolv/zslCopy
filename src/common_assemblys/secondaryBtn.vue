<template>
  <div>
    <!-- 绿色 -->
    <span class="green" @click.stop="btnClick" :style="secondaryBtnSet" v-if="secondaryBtnSet.colorFlag == 'green'" :class="{invalidColor: secondaryBtnSet.disabled}">{{secondaryBtnSet.text}}</span> 
    <!-- 蓝色 -->
    <span class="blue" @click.stop="btnClick" :style="secondaryBtnSet" v-if="secondaryBtnSet.colorFlag == 'blue'" :class="{invalidColor: secondaryBtnSet.disabled}">{{secondaryBtnSet.text}}</span>
    <!-- 青蓝 -->
    <span class="bluish_green" @click.stop="btnClick" :style="secondaryBtnSet" v-if="secondaryBtnSet.colorFlag == 'bluish_green'" :class="{invalidColor: secondaryBtnSet.disabled}">{{secondaryBtnSet.text}}</span>
    <!-- 红色 -->
    <span class="red" @click.stop="btnClick" :style="secondaryBtnSet" v-if="secondaryBtnSet.colorFlag == 'red'" :class="{invalidColor: secondaryBtnSet.disabled}">{{secondaryBtnSet.text}}</span>
    <!-- 紫色 -->
    <span class="violet" @click.stop="btnClick" :style="secondaryBtnSet" v-if="secondaryBtnSet.colorFlag == 'violet'" :class="{invalidColor: secondaryBtnSet.disabled}">{{secondaryBtnSet.text}}</span>
    <!-- 橘色 -->
    <span class="orange" @click.stop="btnClick" :style="secondaryBtnSet" v-if="secondaryBtnSet.colorFlag == 'orange'" :class="{invalidColor: secondaryBtnSet.disabled}">{{secondaryBtnSet.text}}</span>
    <!-- 深红 -->
    <span class="crimson" @click.stop="btnClick" :style="secondaryBtnSet" v-if="secondaryBtnSet.colorFlag == 'crimson'" :class="{crimsonInvalid: secondaryBtnSet.disabled}">{{secondaryBtnSet.text}}</span>
  </div>
</template>
<script>
  export default {
    data () {
      return{
      }
    },
    methods: {
      btnClick(){
        if(this.secondaryBtnSet.disabled){
          return;
        }
        this.$emit('btnClick');
      },
    },
    props: ['secondaryBtnSet']
  }
</script>

<style scoped lang="scss">
  span{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding: 0px 20px;
    border-radius: 3px; 
    &:hover{
      cursor: pointer;
    }
  }
  .green{
    border: solid 1px #C2E7CD;
    color: #5AC37A;
    &:hover{
      color:#5AC37A;
      background-color: #F1FBE7;
      border: solid 1px #C2E7CD;
    }
  }
  .blue{
    border: solid 1px #B3D6F3;
    color: #3BA4EC;
    &:hover{
      color:#3BA4EC;
      background-color: #B3D6F3;
      border: solid 1px #B3D6F3;
    }
  }
  .bluish_green{
    border: solid 1px #A7DAE9;
    color: #45ABC8;
    &:hover{
      color:#45ABC8;
      background-color: #ECFAFB;
      border: solid 1px #A7DAE9;
    }
  }
  .red{
    border: solid 1px #F5BABA;
    color: #E37070;
    &:hover{
      color:#E37070;
      background-color: #FDF7F7;
      border: solid 1px #F5BABA;
    }
  }
  .violet{
    border: solid 1px #ADB1EB;
    color: #6F71D4;
    &:hover{
      color:#6F71D4;
      background-color: #F0F1FF;
      border: solid 1px #ADB1EB;
    }
  }
  .orange{
    border: solid 1px #FFD084;
    color: #F79525;
    &:hover{
      color:#F79525;
      background-color: #FFFAF1;
      border: solid 1px #FFD084;
    }
  }
  .crimson{
    background-color: #F4F4F4;
    color: #E35F5F;
    &:hover{
      color:#F79525;
      background-color: #F4F4F4;
    }
  }

  .invalidColor{  // 失效状态颜色值
    color: #D8D8D8 !important;
    border: solid 1px #D8D8D8 !important;
    &:hover{
      cursor: not-allowed !important;
      color:#D8D8D8;
      background-color: #fff !important;
      border: solid 1px #D8D8D8;
    } 
  }
  .crimsonInvalid{  // 单独设置深红失效状态
    color: #D8D8D8 !important;
    background-color: #F4F4F4 !important;
    &:hover{
      cursor: not-allowed !important;
      color:#D8D8D8;
      background-color: #F4F4F4 !important;
    } 
  }
</style>