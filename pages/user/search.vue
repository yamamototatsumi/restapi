<template>
  <div>
    <label for="name">ユーザー検索</label>
    <input type="text" name="name" id="name">
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  data () {
    return {
      name: ''
    }
  }
}
</script>
