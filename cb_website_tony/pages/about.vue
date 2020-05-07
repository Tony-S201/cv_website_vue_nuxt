<template>
  <div>
    <p>Hi from {{ name }}</p>
    <NLink to="/">
      Home page
    </NLink>
  </div>
</template>

<script>
export default {
  layout: 'inside',
  head: {
    title: 'About page'
  }
}
</script>
