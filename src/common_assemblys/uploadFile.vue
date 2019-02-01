<template>
  <div>
    <el-upload class="d-ib" action='/service?platform=web&command=uploadFile&data=%7B"command" : "uploadFile", "platform" : "web","type":"accountManage"%7D' multiple :on-success="handleSuccessBanner" :show-file-list="false" :before-upload="beforeAvatarUpload">
      <!-- <secondaryBtn class="mr-30" :secondaryBtnSet="{colorFlag:'green',text:'上传文件',disabled: false}"></secondaryBtn> -->
      <el-button size="medium">上传文件</el-button>
    </el-upload>


    <div class='fileList'>
      <my-upload :model="file.originalName" :key="file.index" v-for="file in stampAnnexArray" @click="preview(file)" @handleClose="deleteFile(file)"></my-upload>
    </div>

    
    <viewer @inited="inited" ref="viewer">
      <img :src="previewUrl" style="display: none;">
    </viewer>
    <preview-img :previewUrl="previewUrl" :previewShow="previewShow" @closeClick="previewShow = false"></preview-img><!-- PDF预览组件 -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        stampAnnexArray: [], // 上传文件集合
        previewUrl: '', // 阅览图片的地址
        previewShow: ''
      }
    },
    methods: {
      beforeAvatarUpload(file) {// 上传文件检测
        const format = (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'application/pdf');
        const length = this.stampAnnexArray.length < 125;
        if (!format) {
          // this.$message({message: '请上传jpg、jpeg、png、pdf格式的文件', type: 'info', center: true});
          this.$message({message: '请上传jpg、jpeg、png', type: 'info', center: true});
        }else if (!length) {
          this.$message({message: '最多只可上传125份文件', type: 'info', center: true});
        }
        return format && length;
      },
      handleSuccessBanner (files) {
        this.stampAnnexArray.push({
          annexType: "stamp",
          originalName: files.data.name,
          annexName: files.data.fileName,
          annexUrl: files.data.annexUrl,
          downAnnexUrl: files.data.downAnnexUrl
        });
        this.errorMsg11 = '';
      },
      preview(file) {
        this.previewUrl = file.annexUrl;
        if (file.annexName.split('.')[1] == 'pdf') {// 如果文件格式为pdf，则使用embed显示
          this.previewShow = true;
        }else {// 否则使用viewer显示
          this.$viewer.show();
        }
      },
      deleteFile(file) {
        this.stampAnnexArray.splice(this.stampAnnexArray.indexOf(file), 1);
      },
      inited(viewer) {
        this.$viewer = viewer;
      },
    }
  }
</script>

<style scoped>

</style>