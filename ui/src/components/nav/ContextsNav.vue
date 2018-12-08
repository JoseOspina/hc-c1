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
      return {
        context: {
          id: '8937249372498235667498',
          title: 'My context',
          description: 'This is my personal context.'
        },
        subcontextsData: [
          {
            context: {
              id: '9849845548794597845987',
              title: 'Project 1',
              description: 'This project is awesome.'
            },
            subcontextsData: []
          },
          {
            context: {
              id: '0983982348792348723487',
              title: 'Project 2',
              description: 'This project is also awesome.'
            },
            subcontextsData: []
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

.contexts-nav-container {
  padding: 16px 6px 6px 16px;
}

</style>
