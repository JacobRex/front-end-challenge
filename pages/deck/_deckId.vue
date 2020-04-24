<template>
  <div>
    <div :class="$s.Cards">
      <fe-grid :class="$s.Grid">
        <fe-grid-item
          v-for="(card, i) in cards"
          :key="i"
          span="fullwidth"
          tablet-span="one-half"
          desktop-span="one-fifth"
        >
          <img :class="$s.Card" :src="card.image" />
        </fe-grid-item>
      </fe-grid>
    </div>

    <fe-button to="/deck/new">
      Start Over
    </fe-button>
  </div>
</template>

<script>
import { mapState } from "vuex";

import FeButton from "Components/Button.vue";
import FeGrid from "Components/Grid.vue";
import FeGridItem from "Components/GridItem.vue";

export default {
  components: {
    FeButton,
    FeGrid,
    FeGridItem,
  },

  computed: {
    ...mapState("cards", ["cardRank", "suitRank", "rotationCard", "deck"]),

    cards() {
      return this.deck.cards;
    },
  },

  mounted() {
    this.$store.commit("page/setTitle", "Ordered Cards");
  },
};
</script>

<style module="$s">
.Cards {
  padding: var(--space-xl);
  margin-bottom: var(--space-4x);
  background-color: var(--color-gray-100);
  border-radius: var(--border-radius);
}

.Card {
  width: 100%;
}
</style>
