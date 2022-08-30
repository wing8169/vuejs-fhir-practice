<script>
import CardContainer from "../components/CardContainer.vue";
import { useCardsStore } from "@/stores/cardState";

export default {
  setup() {
    const store = useCardsStore();
    return { store };
  },
  components: {
    CardContainer,
  },
  data() {},
  computed: {
    listOne() {
      return this.store.cards.filter((c) => c.list === 1);
    },
    listTwo() {
      return this.store.cards.filter((c) => c.list === 2);
    },
  },
  methods: {
    startDrag(evt, card) {
      console.log("start dragging: " + card.name);
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("cardID", card.id);
    },
    onDrop(evt, list) {
      console.log("end dragging: " + list);
      const cardID = evt.dataTransfer.getData("cardID");
      const card = this.store.cards.find((card) => card.id == cardID);
      card.list = list;
    },
    getCards() {
      fetch("https://build.fhir.org/patient-example.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.store.cards = [
            {
              id: 0,
              name: data.name[1].given[0],
              gender: data.gender,
              list: !!this.store.cards?.[0]?.list
                ? this.store.cards?.[0]?.list
                : 1,
            },
            {
              id: 1,
              name: data.name[1].given[0],
              birthdate: data.birthDate,
              list: !!this.store.cards?.[1]?.list
                ? this.store.cards?.[1]?.list
                : 1,
            },
            {
              id: 2,
              name: data.name[1].given[0],
              address: data.address[0].text,
              list: !!this.store.cards?.[2]?.list
                ? this.store.cards?.[2]?.list
                : 2,
            },
          ];
        });
      console.log(this.store.cards);
    },
  },
  mounted() {
    console.log(this.store.cards);
    this.getCards();
  },
};
</script>

<template>
  <main>
    <CardContainer
      :list="listOne"
      :startDrag="startDrag"
      :onDrop="onDrop"
      :id="1"
    />
    <CardContainer
      :list="listTwo"
      :startDrag="startDrag"
      :onDrop="onDrop"
      :id="2"
    />
  </main>
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  min-height: 90vh;
  gap: 10%;
  padding: 20px;
}
</style>
