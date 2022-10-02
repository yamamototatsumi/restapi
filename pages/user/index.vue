<template>
  <div class="main">
    ユーザ一覧表示
    <div v-if="users">
      <div v-for="(user, index) in users" :key="index">
        <div>{{ user.name }}</div>
        <div>{{ user.email }}</div>
        <br>
      </div>
    </div>
    {{ isError }}
    <div v-if="isError">
      <p>ユーザーが見つかりませんでした</p>
    </div>
    <div>
      <nuxt-link to="/user/search">
        検索ページへ
      </nuxt-link><br><br>
    </div>
    <div>
      <nuxt-link to="/user/create">
        新規登録画面
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

  name: 'IndexPage',
  async asyncData ({ $axios }) {
    // 取得先のURL
    const url = '/user/index'
    // リクエスト（Get）
    const response = await $axios.$get(url).catch((err) => {
      console.log(err.response)
      return {
        errors: err.response
      }
    })
    // 配列で返ってくるのでJSONにして返却
    return {
      users: response.data
    }
  },
  data () {
    return {
      isError: false
    }
  }
}
</script>
