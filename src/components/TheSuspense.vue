<template>
    <Suspense>
      <template #default>
          <TheUser />
      </template>
      <template #fallback>
        <h2>Loading...</h2>
      </template>
    </Suspense>
  </template>
  <script>
    import TheUser from './TheUser.vue';
    export default {
        components: {
          TheUser
        },
    }
</script>

