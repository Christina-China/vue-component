<template>
<div class="main">
  <!-- <tab></tab> -->
  <tab-pane></tab-pane>
</div>
</template>

<script>
import tab from './components/tab'
import tabPane from './components/tabPane'

export default {
  data () {
    return {
    }
  },
  components: {
    tab,
    tabPane
  }
}
</script>

<style src="./styles/style.css"></style>
