<template>
  <div>
    <!-- 红色 -->
    <span class="red" @click.stop="btnClick" :style="secondaryBtnSet" v-if="secondaryBtnSet.colorFlag == 'red'" :class="{invalidColor: secondaryBtnSet.disabled}">{{secondaryBtnSet.text}}</span> 
    <!-- 橘黄 -->
    <span class="orange" @click.stop="btnClick" :style="secondaryBtnSet" v-if="secondaryBtnSet.colorFlag == 'orange'" :class="{invalidColor: secondaryBtnSet.disabled}">{{secondaryBtnSet.text}}</span> 
    <!-- 青色 -->
    <span class="cyan" @click.stop="btnClick" :style="secondaryBtnSet" v-if="secondaryBtnSet.colorFlag == 'cyan'" :class="{invalidColor: secondaryBtnSet.disabled}">{{secondaryBtnSet.text}}</span> 
    <!-- 玫红 -->
    <span class="roseRed" @click.stop="btnClick" :style="secondaryBtnSet" v-if="secondaryBtnSet.colorFlag == 'roseRed'" :class="{invalidColor: secondaryBtnSet.disabled}">{{secondaryBtnSet.text}}</span> 
    <!-- 深蓝 -->
    <span class="darkBlue" @click.stop="btnClick" :style="secondaryBtnSet" v-if="secondaryBtnSet.colorFlag == 'darkBlue'" :class="{invalidColor: secondaryBtnSet.disabled}">{{secondaryBtnSet.text}}</span> 
    <!-- 草绿 -->
    <span class="grassGreen" @click.stop="btnClick" :style="secondaryBtnSet" v-if="secondaryBtnSet.colorFlag == 'grassGreen'" :class="{invalidColor: secondaryBtnSet.disabled}">{{secondaryBtnSet.text}}</span> 
    <!-- 青蓝 -->
    <span class="bluishGreen" @click.stop="btnClick" :style="secondaryBtnSet" v-if="secondaryBtnSet.colorFlag == 'bluishGreen'" :class="{invalidColor: secondaryBtnSet.disabled}">{{secondaryBtnSet.text}}</span> 
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
    height: 36px;
    line-height: 36px;
    text-align: center;
    width: 100px;
    border-radius: 3px; 
    font-size: 13px;
    color:#fff;
    &:hover{
      cursor: pointer;
    }
  }
  .red{
    background-color: #EC9999;
    &:hover{
      background-color: #EB8686;
    }
  }
  .orange{
    background-color: #ECBE6B;
    &:hover{
      background-color: #EDAD38;
    }
  }
  .cyan{
    background-color: #77CAE2;
    &:hover{
      background-color: #5ABDD9;
    }
  }
  .roseRed{
    background-color: #ED8DAA;
    &:hover{
      background-color: #DD7192;
    }
  }
  .darkBlue{
    background-color: #8EBEEE;
    &:hover{
      background-color: #68A8E9;
    }
  }
  .grassGreen{
    background-color: #7DDAA8;
    &:hover{
      background-color: #5DC48D;
    }
  }
  .bluishGreen{
    background-color: #6CCAD5;
    &:hover{
      background-color: #54C2CF;
    }
  }


  .invalidColor{  // 单独设置深红失效状态
    color: #fff !important;
    background-color: #D8D8D8 !important;
    &:hover{
      cursor: not-allowed !important;
      color:#fff;
      background-color: #D8D8D8 !important;
    } 
  }
</style>