<template>
<div class="tab-pane">
  <div class="tab-pane-title" v-for="(tab, index) in tabs" @click="toggle(index, tab.view)">{{tab.name}}</div>
  <div class="tab-pane-content">
    <div class="tab-pane-one" v-for="item in items">
      可以
    </div>
  </div>
  <component :is="currentView"></component>
</div>
</template>

<script>
export default {
  data () {
    return {
      currentView: 'child1'
      tabs: [{
        name: '标签一',
        view: 'child1'
      }, {
        name: '标签二',
        child: 'child2'
      }, {
        name: '标签三',
        child: 'child3'
      }]
    }
  },
  method: {
    toggle (index, v) {
      this.currentView = v
    }
  }
}
</script>

<style src="../styles/tabpane.css"></style>
