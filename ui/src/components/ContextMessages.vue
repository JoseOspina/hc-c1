<template lang="html">
  <div class="">
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
