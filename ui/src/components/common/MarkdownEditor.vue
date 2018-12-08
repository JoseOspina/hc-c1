<template lang="html">
  <div class="w3-cell-row editor-container">
    <div class="w3-row markdown-container">
      <div class="w3-row">
        <textarea
          class="this-textarea w3-input w3-border"
          ref="mdArea"
          @focus="atFocus($event)"
          @blur="$emit('c-blur', $event)"
          v-model="text"
          :placeholder="placeholder">
        </textarea>
      </div>
    </div>
    <div class="w3-cell send-button-column w3-cell-top">
      <div class="send-button-container">
        <button class="w3-button app-button" name="button"
          @click="send()">
          <div v-if="!sending">
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
          </div>
          <div v-else class="sending-container">
            <img class="" src="../../assets/loading.gif" alt="">
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    elementId: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      text: '',
      sending: false
    }
  },

  watch: {
    value () {
      this.text = this.value
      setTimeout(() => { this.checkHeight() }, 500)
    },
    text () {
      this.$emit('input', this.text)
      this.checkHeight()
      if (this.keepBackup) {
        this.$store.dispatch('doMarkdownBackup', { elementId: this.elementId, value: this.text })
      }
    }
  },

  computed: {
  },

  methods: {
    atFocus (event) {
      this.$emit('c-focus', event)
      this.checkHeight()
    },
    checkHeight () {
      if (this.$refs.mdArea) {
        if (this.text !== '') {
          /* resize text area */
          this.$refs.mdArea.style.height = (this.$refs.mdArea.scrollHeight) + 'px'
        } else {
          this.$refs.mdArea.style.height = '0px'
        }
      }
    },

    send () {
      if (!this.sending) {
        var info = {
          message: this.value,
          mentions: this.mentionedUsers.map(e => e.c1Id)
        }
        this.$emit('send', info)
      }
    }
  },

  mounted () {
    if (this.value) {
      this.text = this.value
    }

    /* autoresize textarea */
    this.$refs.mdArea.setAttribute('style', 'height:' + (this.$refs.mdArea.scrollHeight) + 'px;overflow-y:hidden;')

    setTimeout(() => {
      this.checkHeight()
    }, 500)
  },

  beforeDestroy () {
    // do backup
  },

  destroyed () {
  }
}
</script>

<style scoped>

.editor-container {
  padding: 12px 12px;
}

.this-textarea {
  max-height: 50vh;
  min-height: 75px;
  overflow-y: auto !important;
}

.send-button-column {
  width: 60px;
  height: 100%;
}

.send-button-container {
  height: 100%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.send-button-container img {
  width: 35px;
}

.w3-cell-top {
  vertical-align: bottom;
}

</style>
