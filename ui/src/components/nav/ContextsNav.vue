<template lang="html">

  <div class="contexts-nav-container">
    <div class="w3-row">
      <app-context-nav-item
        :contextData="contextData">
      </app-context-nav-item>
    </div>
  </div>

</template>

<script>
import ContextNavItem from '@/components/nav/ContextNavItem.vue'

export default {
  components: {
    'app-context-nav-item': ContextNavItem
  },

  computed: {
    contextData () {
      return this.$store.state.contextNav.contextsTree[0]
    }
  },

  created () {
    this.axios.post('/fn/context/getRootContext').then(response => {
      if (response.status === 200) {
        let myRootContextHash = response.data[0].Hash
        console.log('root context received ' + myRootContextHash)
        this.$store.dispatch('resetContextsTree', { baseContextHash: myRootContextHash })
      } else {
        console.log('error getting root context')
        console.log(response)
      }
    })
  }
}
</script>

<style scoped>

.contexts-nav-container {
  padding: 16px 6px 6px 16px;
}

</style>
