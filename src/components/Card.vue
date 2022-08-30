<script>
export default {
  props: ["card"],
};
</script>
<template>
  <div class="custom-card">
    <p class="no-select">Name: {{ card.name }}</p>
    <p class="no-select" v-if="!!card.gender">Gender: {{ card.gender }}</p>
    <p class="no-select" v-if="!!card.birthdate">
      Birthdate: {{ card.birthdate }}
    </p>
    <p class="no-select" v-if="!!card.address">Address: {{ card.address }}</p>
  </div>
</template>

<style scoped>
.custom-card {
  width: 250px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  border: solid 1px black;
  cursor: pointer;
}
.no-select {
  user-select: none;
}
</style>
