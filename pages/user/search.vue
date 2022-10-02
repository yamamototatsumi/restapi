<template>
  <div>
    <label for="name">ユーザー検索(名前)</label>
    <input id="name" v-model="name" type="text" name="name">
    {{ name }}
    {{ users }}
    <input type="submit" value="検索" @click="search">

  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  data () {
    return {
      name: '',
      users: []
    }
  },
  methods: {
    search () {
      const params = {
        name: this.name
      }
      const res = this.$axios.post('user/search', params)
        .then((response) => {
          console.log('A')
          console.log(response.data)
          this.users = response.data
        })
        .catch((err) => {
          console.log('B')
          return err.response
        })
    }
  }
}
</script>
