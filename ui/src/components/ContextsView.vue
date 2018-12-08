<template>
  <div class="w3-row contexts-row">
    <transition name="slideRightLeft">
      <div class="dark-gray nav-container-cell">
        <app-contexts-nav></app-contexts-nav>
      </div>
    </transition>

    <div class="content-container-cell">
      <div class="w3-row control-buttons-row">
        <div @click="$emit('messages')" class="w3-left control-btn" :class="{'control-btn-selected': isMessages}">
          <img src="./../assets/chat-icon-2.svg" alt="">
        </div>
        <div @click="$emit('content')" class="w3-left control-btn" :class="{'control-btn-selected': isContent}">
          <img src="./../assets/doc-icon.svg" alt="">
        </div>
        <div @click="$emit('assets')" class="w3-left control-btn" :class="{'control-btn-selected': isAssets}">
          <img src="./../assets/exchange-icon.svg" alt="">
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ContextsNav from '@/components/nav/ContextsNav.vue'

export default {
  name: 'underscore',

  components: {
    'app-contexts-nav': ContextsNav
  },

  computed: {
    isMessages () {
      return this.$route.name === 'ContextMessages'
    },
    isContent () {
      return this.$route.name === 'ContextContent'
    },
    isAssets () {
      return this.$route.name === 'ContextAssets'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contexts-row {
  height: 100vh;
  display: flex;
  flex-direction: row;
}

.content-container-cell {
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.control-buttons-row {
  padding: 6px 6px;
}

.control-btn {
  margin-left: 6px;
}

.nav-container-cell {
  width: 300px;
  height: 100%;
}

</style>
