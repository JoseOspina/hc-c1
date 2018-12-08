<template lang="html">
  <div class="w3-row message-row">
    <div class="author-div">
      <img class="w3-circle avatar-image" :src="message.author.pictureUrl">
    </div>
    <div class="text-div">
      {{ message.text }}
    </div>
  </div>
</template>

<script>
export default {

  props: {
    message: {
      type: Object
    }
  }

}
</script>

<style scoped>

.message-row {
  padding: 3px 6px;
}

.author-div {
  height: 30px;
  width: 30px;
  float: left;
}

.avatar-image {
  width: 100%;
  height: 100%;
}

.text-div {
  width: calc(100% - 30px);
  padding-left: 10px;
  float: left;
}

</style>
