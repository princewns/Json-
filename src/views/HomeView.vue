<template>
  <div class="home">
    <h3>Homeview에서 수정하고 있습니다.</h3>
    <p>여기서 라우터의 위치는 / 입니다.</p>
    <img alt="Vue logo" src="../assets/logo.png">

    <p>아래에 helloWorld를 불러오고 있습니다.</p>
    <HelloWorld msg="수정된 홈 화면입니다."/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
