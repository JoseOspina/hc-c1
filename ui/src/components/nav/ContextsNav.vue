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
    this.$store.dispatch('resetContextsTree', { baseContextId: })
  }
}
</script>

<style scoped>

.contexts-nav-container {
  padding: 16px 6px 6px 16px;
}

</style>
