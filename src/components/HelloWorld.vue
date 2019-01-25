<template>
  <div>
    
  </div>
</template>

<script>
  export default {
    data () {
        return{

        }
    },
    methods: {
      login() {
        // 封装的完整案例
        this.https.post("/service", {
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
      }
    },
    created(){
      this.login();
    }
  }
</script>

<style scoped>
  
</style>