<template>
  <div>
    <mainBtn :mainBtnSet="{text:'登陆',disabled: false}" @btnClick="loginClick"></mainBtn>

    <br>
    <br>
    <br>
    
    <uploadFile></uploadFile>

    
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
        return{

        }
    },
    methods: {
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