<template>
<div class="tab-pane">
  <div class="tab-pane-title" v-for="(tab, index) in tabs" @click="toggle(index, tab.view)">{{tab.name}}</div>
  <component :is="currentView"></component>
</div>
</template>

<script>
import child1 from './child1'
import child2 from './child2'

export default {
  data () {
    return {
      currentView: 'child1',
      tabs: [{
        name: '标签一',
        view: 'child1'
      }, {
        name: '标签二',
        view: 'child2'
      }]
    }
  },

  methods: {
    toggle (index, v) {
      this.currentView = v
    }
  },

  components: {
    child1,
    child2
  }
}
</script>

<style src="../styles/tabpane.css"></style>
