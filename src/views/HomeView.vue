<script>
import { useCardsStore } from "@/stores/cardState";
export default {
  setup() {
    const store = useCardsStore();
    return { store };
  },
  data() {
    return {
      time: new Date(),
    };
  },
  methods: {
    fetchTime() {
      this.time = new Date();
    },
    cancelAutoUpdate() {
      clearInterval(this.timer);
    },
  },
  mounted() {
    this.fetchTime();
    this.timer = setInterval(this.fetchTime, 1000);
    console.log(this.store.cards);
  },
  beforeUnmount() {
    this.cancelAutoUpdate();
  },
};
</script>

<template>
  <main>
    <h3>This is the Home Page</h3>
    <h5>{{ time }}</h5>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
}
</style>
