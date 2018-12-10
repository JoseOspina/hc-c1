<template lang="html">

  <div v-if="contextData != null" class="w3-row context-nav-item-container">
    <div class="w3-row context-nav-item-first-row">

      <div class="arrow-and-title">
        <div @click="toggleSubcontexts()" class="hash-div cursor-pointer">
          #
        </div>
        <div class="title-div cursor-pointer noselect">
          <router-link tag="span" :to="'/context/' + contextHash">
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
            :key="subcontextData.context.hash">
          </app-context-nav-item>
          <div @click="createSubcontextIntention = true" class="w3-row noselect cursor-pointer">
            <div v-if="!createSubcontextIntention" class="">
              <small>+ create new</small>
            </div>
            <div v-else class="">
              <input v-model="newSubcontextName" class="w3-input" type="text" name="" value="">
              <button @click="createSubcontext()" type="button" name="button">save</button>
            </div>
          </div>
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
      showSubcontexts: true,
      createSubcontextIntention: false,
      newSubcontextName: ''
    }
  },

  computed: {
    contextName () {
      return this.contextData.context.name
    },

    contextHash () {
      return this.contextData.context.hash
    },

    subcontextsData () {
      return this.contextData.subcontextsData
    },

    hasSubcontexts () {
      return this.subcontextsData.length > 0
    },
  },

  methods: {
    createSubcontext () {
      this.axios.post('/fn/context/contextCreate', JSON.stringify({name: this.newSubcontextName}))
      .then( response => {
        let childContextHash = response.data
        this.axios.post('/fn/context/addContextChild', JSON.stringify({
          parentContextHash: this.contextHash,
          childContextHash: childContextHash
        })).then( response => {
          console.log(response.data)
        })
      })
    }
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
