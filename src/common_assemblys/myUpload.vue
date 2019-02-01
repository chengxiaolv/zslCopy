<template>
  <div class="my-upload-wrapper">
    <!-- 除图片以外的文件 -->
    <div class="c-d" v-if="fileType != 'jpg' && fileType != 'JPG' && fileType != 'png' && fileType != 'PNG' 
    && fileType != 'jpeg' && fileType != 'JPEG' && fileType != 'pdf' && fileType != 'PDF'" :title="fileName">{{fileName}}</div>
    <!-- 图片文件 -->
    <div class="c-p" v-show="!popup" @click="click" v-if="fileType === 'jpg' || fileType === 'JPG' || fileType === 'png' || fileType === 'PNG' 
    || fileType === 'jpeg' || fileType === 'JPEG' || fileType === 'pdf' || fileType === 'PDF'" :title="fileName">{{fileName}}</div>
    <!-- 图片文件并且组件处于弹窗中（预览效果变为打开新页面预览） -->
    <a class="c-p" v-show="popup" v-if="fileType === 'jpg' || fileType === 'JPG' || fileType === 'png' || fileType === 'PNG' 
    || fileType === 'jpeg' || fileType === 'JPEG' || fileType === 'pdf' || fileType === 'PDF'" :href="popup" target="_blank">{{fileName}}</a>
    <span class="fs-10 c-d">.{{fileType}}</span>
    <sup><i class="el-icon-error" :style="{color: iconColor}" @click="popupShow = true" v-show="!deleteB"></i></sup>

    <div class="zc_dialog clear">
      <el-dialog :show-close="false" :visible.sync="popupShow" center>
        <div class="al-c">删除后将无法恢复，请问是否确认删除？</div>
        <div class="dialog-footer">
          <el-button class="cancel" @click="popupShow = false">取消</el-button>
          <el-button class="sure" @click="handleClose">确定</el-button>
        </div>
      </el-dialog>  
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      iconColor: '#EC9999',
      fileName: this.model.split('.')[0],
      fileType: this.model.split('.')[1],
      popupShow: false
    }
  },

  // watch: {
  //   model(newVal) {
  //     this.model = newVal;
  //     console.log(newVal)
  //   },
  // },

  props: ['model', 'deleteB', 'popup'],
  watch:{
    model(newVal){
      this.fileName = newVal.split('.')[0],
      this.fileType = newVal.split('.')[1]
    },
  },

  methods: {
    click(){
      // if (this.fileType === 'jpg' || this.fileType === 'JPG' || this.fileType === 'png' || this.fileType === 'PNG' 
    // || this.fileType === 'jpeg' || this.fileType === 'JPEG' || this.fileType === 'pdf' || this.fileType === 'PDF') {
        this.$emit('click', this.model);
      // };
    },
    handleClose(){
      this.$emit('handleClose', this.model);
      this.popupShow = false;
    }
  },

}
</script>

<style lang="scss" scoped>

.my-upload-wrapper {
  display: inline-block;
  margin-right: 20px;
  .el-icon-error {
    cursor: pointer;
    font-size: 12px;
    float: left;
    margin-top: 2px;
  }
  .el-icon-error:hover {
    color: #6FB5EC !important;
  }
  .fs-10 {
    font-size: 10px;
    float: left;
    margin-top: 2px;
    color: #4374C4;
  }
  .c-p {
    cursor: pointer;
    max-width: 90%;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #4374C4;
    text-decoration: none;
  }
  .c-d {
    cursor: default;
    max-width: 90%;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #4374C4;
  }
  .f-l {
    float: left;
  }
  .al-c {
    text-align: center;
  }
}
</style>