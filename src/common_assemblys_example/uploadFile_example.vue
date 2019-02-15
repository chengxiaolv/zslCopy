<template>
  <div>
    <mainBtn :mainBtnSet="{text:'登陆',disabled: false}" @btnClick="loginClick"></mainBtn>

    <br>
    <br>
    <br>
    
    <uploadFile :uploadFileSet='uploadFileSet' @getFileList="getFileList"></uploadFile>

    
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
        return{
					uploadFileSet:{ // 上传组件的配置项
						action: '/service?platform=web&command=uploadFile&data=%7B"command" : "uploadFile", "platform" : "web","type":"accountManage"%7D', //上传文件中 上传文件的后台地址 (必填)

						uploadMore: 'one',  //上传文件中 控制是上传单文件还是多文件 (选填，默认为 ： 多文件上传   more:多文件，one：单文件)
						btnInformation: '上传文件',  //上传文件中 按键的文字。 (选填，默认文字为 ： 上传文件)
						uploadFileNum: 10, //上传文件中 上传文件的个数限制 (选填，默认个数为 ： 10)
						uploadFormat: false, // 上传文件中 上传文件的格式设置 (选填，false为不做格式限制，true为设置为只可以为：jpg、jpeg、png、pdf， 默认为false)
						btnSet:{  // 上传文件中 上传文件的按键样式控制 (选填，有默认值)
							color: '',
							fontSize: '',
							// 这里可以设置按键的一切设置
						}
					}
        }
    },
    methods: {
			getFileList(fileList){ // 获取上传文件的集合。
				console.log(fileList);
			},
			loginClick () {
				axios({
					headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
			        method: 'get',
			        url: '/service',
			        params: {
			          data: (() => {
			            var obj = {
			              command: 'login',
			              platform: 'web',
			              phone: '18622348235',
			              phoneCode: '1234',
									}
			            return JSON.stringify(obj);
			          })()
			        }
				}).then((req) => {
					if(req.data.statusCode === '10001') {
            
					}else {

					}
				})
			      
			}
    }
  }
</script>

<style scoped>
  
</style>