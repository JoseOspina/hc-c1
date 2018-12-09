<template>
  <div class="content-container-cell">
    <div class="w3-row control-buttons-row">
      <router-link tag="div" :to="{name: 'ContextMessages'}">
        <div class="w3-left control-btn" :class="{'control-btn-selected': isMessages}">
          <img src="./../assets/chat-icon-2.svg" alt>
        </div>
      </router-link>
      <router-link tag="div" :to="{name: 'ContextContent'}" disabled>
        <div class="w3-left control-btn" :class="{'control-btn-selected': isContent}">
          <img src="./../assets/doc-icon.svg" alt>
        </div>
      </router-link>
      <router-link tag="div" :to="{name: 'ContextAssets'}">
        <div class="w3-left control-btn" :class="{'control-btn-selected': isAssets}">
          <img src="./../assets/exchange-icon.svg" alt>
        </div>
      </router-link>
    </div>
    <div class="content-container-cell container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isMessages() {
      return this.$route.name === "ContextMessages";
    },
    isContent() {
      return this.$route.name === "ContextContent";
    },
    isAssets() {
      return this.$route.name === "ContextAssets";
    }
  }
};
</script>

<style>
.control-buttons-row {
  padding: 6px 6px;
}

.container {
  padding: 16px;
}

.control-btn {
  margin-left: 6px;
}
</style>
