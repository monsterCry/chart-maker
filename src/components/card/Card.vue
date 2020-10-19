<template>
    <div>
      <div>卡片标题</div>
      <div>
        <div v-for="(c,i) in card" :key="i">
          {{c.label}}
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Card",
      props: ['card'],
    }
</script>

<style scoped>

</style>
