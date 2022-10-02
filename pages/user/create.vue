<template>
  <div class="main">
    <h2>新規登録</h2>
    <div>
      <h2 v-if="isError">
        登録に失敗しました
      </h2>
    </div>
    <div>
      <label for="name">名前</label>
      <input id="name" v-model="userInfo.name" type="text">
    </div><br>
    <div>
      <label for="email">メールアドレス</label>
      <input id="email" v-model="userInfo.email" type="email">
    </div><br>
    <div>
      <label for="password">パスワード</label>
      <input id="password" v-model="userInfo.password" type="password">
    </div><br>
    name:{{ userInfo.name }}/10<br>
    email:{{ userInfo.email }}<br>
    password:{{ userInfo.password }}<br>
    <button @click="createUser">
      登録
    </button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      userInfo: {
        name: '',
        email: '',
        password: ''
      },
      isError: false
    }
  },
  methods: {
    createUser () {
      const params = {
        name: this.userInfo.name,
        email: this.userInfo.email,
        password: this.userInfo.password
      }
      const res = this.$axios.post('user/create', params)
        .then((response) => {
          console.log(response.data)
          this.$router.push('/user')
          return response.data
        })
        .catch((err) => {
          this.isError = true
          return err.response
        })
    }
  }
}
</script>
