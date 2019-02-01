<template>
	<div class="preview-img-wrapper">
    <div class="previewBg" v-show="previewShow" @click="closeClick"></div><!-- PDF格式文件预览 -->
    <transition name="el-fade-in-linear">
      <div class="preview_wrapper" v-show="previewShow">
        <i class="el-icon-close" @click="closeClick"></i>
        <embed :src="previewUrl" style="width:100%;height:100%;" :style="{maxHeight: maxH + 'px', maxWidth: maxW + 'px'}">
      </div>
    </transition>
	</div>
</template>

<script>
export default {
  data () {
    return {
      maxH: 0,
      maxW: 0,
    }
  },

  props: ['previewUrl', 'previewShow'],

  created() {
    [this.maxH, this.maxW] = [window.innerHeight - 200, window.innerWidth - 200];// PDF预览适配
  },

  methods: {
    closeClick(){
      this.$emit('closeClick');
    },
  }
}
</script>