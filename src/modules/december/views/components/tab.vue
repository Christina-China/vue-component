<template>
  <div class="tab">
    <tab-pane>标签1的内容</tab-pane>
    <tab-pane>标签2的内容</tab-pane>
    <tab-pane>标签3的内容</tab-pane>
  </div>
</template>

<script>
import tabPane from './tabPane'

export default {
  data () {
    return {
      tabList: {
        label: '标签一'
      },
      label: 'bbbb'
    }
  },
  components: {
    tabPane
  }
}
</script>

<style src="../styles/tab.css"></style>
