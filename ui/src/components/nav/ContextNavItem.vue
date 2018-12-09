<template lang="html">

  <div v-if="contextData != null" class="w3-row context-nav-item-container">
    <div class="w3-row context-nav-item-first-row">

      <div class="arrow-and-title">
        <div @click="toggleSubcontexts()" class="hash-div cursor-pointer">
          #
        </div>
        <div class="title-div cursor-pointer noselect">
          <router-link tag="span" :to="'/context/' + contextId">
            {{ contextName }}
          </router-link>
        </div>
      </div>

    </div>

    <div class="w3-left">
      <transition name="slideDownUp">
        <div v-if="showSubcontexts" class="w3-row subcontexts-container">
          <app-context-nav-item
            class="subcontext-row"
            v-for="subcontextData in subcontextsData"
            :contextData="subcontextData"
            :key="subcontextData.context.id">
          </app-context-nav-item>
        </div>
      </transition>
    </div>
  </div>

</template>

<script>
export default {
  name: 'app-context-nav-item',

  props: {
    contextData: {
      type: Object
    }
  },

  data () {
    return {
      showSubcontexts: true
    }
  },

  computed: {
    contextName () {
      return this.contextData.context.name
    },

    contextId () {
      return this.contextData.context.id
    },

    subcontextsData () {
      return this.contextData.subcontextsData
    },

    hasSubcontexts () {
      return this.subcontextsData.length > 0
    },
  }
}
</script>

<style scoped>

.context-nav-item-container {
  font-size: 16px;
}

.subcontexts-container {
  padding-left: 16px;
  padding-top: 3px;
}

.hash-div {
  float: left;
}

.title-div {
  float: left;
  padding-left: 5px;
}

</style>
