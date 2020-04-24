<template>
  <div>
    <div :class="$s.Cards">
      <div v-if="!hasCards" :class="$s.Error">
        No cards selected.
      </div>
      <fe-grid v-if="hasCards" :class="$s.Grid">
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

    <h2 :class="$s.DataTitle">
      <strong>Rotation Card:</strong> {{ rotationCard }}
    </h2>

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
      return this.deck && this.deck.cards;
    },

    hasCards() {
      return this.cards && this.cards.length;
    },
  },

  mounted() {
    this.$store.commit("page/setTitle", "Ordered Cards");
  },
};
</script>

<style module="$s">
@import "Vars";

.Cards {
  padding: var(--space-xl);
  margin-bottom: var(--space-4x);
  background-color: var(--color-gray-100);
  border-radius: var(--border-radius);
}

.Card {
  width: 100%;
}

.Error {
  color: var(--color-gray-300);
  font-weight: bold;
  text-align: center;
}
</style>
