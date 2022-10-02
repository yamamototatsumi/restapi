<template>
  <div>
    <NuxtLink to="/about">
      about
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  // リダイレクト処理
  asyncData ({ redirect }) {
    redirect('/user')
  }
}
</script>
