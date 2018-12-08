<template lang="html">
  <div class="thread-container">
    <div class="w3-row history-container w3-border" >
      <app-message-row v-for="message in messages">
      </app-message-row>
    </div>
    <div class="w3-row w3-margin-top bottom-container">
      <app-markdown-editor
        class="editor-container"
        v-model="newMessageText"
        :placeholder="$t('notifications.SAY_SOMETHING')"
        :elementId="contextElementId"
        @send="send($event)">
      </app-markdown-editor>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    contextType: {
      type: String,
      default: ''
    },
    contextElementId: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      messages: [],
      newMessageText: ''
    }
  },

  computed: {
  },

  methods: {
    getMessages () {
      this.messages = [
        {
          id: '21312534654645',
          author: {
            nickname: 'joe'
          },
        }
      ]
    },
    send (data) {}
  },

  mounted () {},

  destroyed () {}
}
</script>

<style scoped>

.thread-container {
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.history-container {
  min-height: 60px;
  overflow: auto;
  flex-grow: 1;
}

.bottom-container {
  min-height: 50px;
  flex-shrink: 0;
}

.only-messages-button {
  margin-right: 25px;
  margin-top: 10px;
}

.tooltip .tooltiptext {
  top: 8%;
  right: 105%;
  background: blue;
}

.only-messages-button button {
  background-color: rgba(21, 165, 204, 0.4) !important;
}

</style>
