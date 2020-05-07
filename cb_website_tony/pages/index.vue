<template>
  <div>
    <h1>Welcome!</h1>
    <NLink to="/about">
      Voir le portfolio
    </NLink>
  </div>
</template>

<script>
export default {
  layout: 'first',
  head: {
    title: 'Home page'
  }
}
</script>

