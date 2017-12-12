<template>
<div class="tab-pane">
  <div class="tab-pane-title">{{label}}</div>
  <div class="tab-pane-content"><slot></slot></div>
</div>
</template>

<script>
export default {
  data () {
    return {
      label: '标签一。。'
    }
  }
}
</script>

<style src="../styles/tabpane.css"></style>
