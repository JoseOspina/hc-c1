<template>
  <div class="w3-row contexts-row">
    <transition name="slideRightLeft">
      <div class="dark-gray nav-container-cell">
        <app-contexts-nav></app-contexts-nav>
      </div>
    </transition>

    <div class="w3-row content-container-cell">
      <div class="slider-container">
        <transition name="slideDownUp" mode="out-in">
          content
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import ContextsNav from '@/components/nav/ContextsNav.vue'

export default {
  name: 'underscore',

  components: {
    'app-contexts-nav': ContextsNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contexts-row {
  height: 100vh;
  flex-direction: column;
}

.content-container-cell {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.nav-container-cell {
  width: 300px;
  height: 100%;
}

</style>
