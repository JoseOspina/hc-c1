<template lang="html">
  <div class="context-messages-container content-container-cell">
    <app-message-thread
      contextType="CONTEXT"
      :contextElementId="currentContextId">
    </app-message-thread>
  </div>

</template>

<script>
import MessageThread from '@/components/messages/MessageThread.vue'

export default {
  components: {
    'app-message-thread': MessageThread
  },

  computed: {
    currentContextId () {
      return ""
    }
  },

  methods: {
  }
}
</script>

<style scoped>

</style>
