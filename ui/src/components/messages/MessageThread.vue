<template lang="html">
  <div class="thread-container">
    <div class="w3-row history-container" >
      <app-message-row v-for="message in messages" :key="message.id" :message="message">
      </app-message-row>
    </div>
    <div class="w3-row w3-margin-top bottom-container">
      <app-markdown-editor
        class="editor-container"
        v-model="newMessageText"
        placeholder="say something"
        :elementId="contextElementId"
        @send="send($event)">
      </app-markdown-editor>
    </div>
  </div>
</template>

<script>
import MessageRow from '@/components/messages/MessageRow.vue'

export default {
  components: {
    'app-message-row': MessageRow
  },

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
            nickname: 'joe',
            pictureUrl: 'https://openclipart.org/image/2400px/svg_to_png/277089/Female-Avatar-5.png'
          },
          text: 'Hi everyone, hows are things going?'
        },
        {
          id: '234353452432',
          author: {
            nickname: 'emy',
            pictureUrl: 'https://cdn2.iconfinder.com/data/icons/the-world-faces/512/Cool_Guy_Face_Avatar-512.png'
          },
          text: 'Hi emily, great!'
        }
      ]
    },
    send () {}
  },

  mounted () {
    this.getMessages()
  },

  destroyed () {}
}
</script>

<style scoped>

.thread-container {
  height: 100%;
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

</style>
