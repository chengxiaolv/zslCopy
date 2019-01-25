<template>
  <div>
    <span>{{number | TransformationNumber}}</span>   
    <!-- 全局过滤器的使用方法  如上 直接   | 过滤器名称就可以了  可以  使用多重过滤器  -->
  </div>
</template>

<script>
  export default {
    data () {
        return{
          number: 3472745834
        }
    },
    methods: {
      post() {
        this.https.post("/service", {   // post 的使用方法。
          data: JSON.stringify({
            command: "login",
            platform: "web",
            loginName: 1,
            psd: 123456,
            type: "managerSystem"
          })
        })
          .then(
            response =>  {
              if(response.statusCode == '10001'){
                console.log(response)
              }else{
                console.log(response)
              }
            }
          )
          .catch(response => {
            console.log(response)
          });
      },
      get(){
        this.https.get("/service", {   // get 的使用方法。
          data: {
            command: "login",
            platform: "web",
            loginName: 1,
            psd: 123456,
            type: "managerSystem"
          }
        })
          .then(
            response =>  {
              if(response.statusCode == '10001'){
                console.log(response)
              }else{
                console.log(response)
              }
            }
          )
          .catch(response => {
            console.log(response)
          });
      }
    },
    created(){
      this.utils.getNowTime()  // 这种方式直接调用全局的注册方法。
    }
  }
</script>

<style scoped>
  
</style>