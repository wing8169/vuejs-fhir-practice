<script>
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  props: ["list", "startDrag", "onDrop", "id"],
  watch: {
    list() {
      console.log(this.list);
    },
  },
};
</script>
<template>
  <div
    class="card-container"
    @drop="onDrop($event, id)"
    @dragover.prevent
    @dragenter.prevent
  >
    <Card
      v-for="card in list"
      :key="card.id"
      :card="card"
      draggable="true"
      @dragstart="startDrag($event, card)"
    />
  </div>
</template>

<style scoped>
.card-container {
  width: 400px;
  min-height: 80vh;
  box-shadow: 0px 15px 31px 8px rgba(102, 102, 102, 0.75);
  -webkit-box-shadow: 0px 15px 31px 8px rgba(102, 102, 102, 0.75);
  -moz-box-shadow: 0px 15px 31px 8px rgba(102, 102, 102, 0.75);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px;
}
</style>
