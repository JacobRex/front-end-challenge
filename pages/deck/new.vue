<template>
  <div>
    <fe-grid :class="$s.Grid">
      <fe-grid-item
        v-for="(input, i) in chosenCards"
        :key="i"
        span="fullwidth"
        tablet-span="one-half"
        desktop-span="one-fifth"
      >
        <label :class="$s.Label">Card {{ i + 1 }} </label>
        <fe-select
          v-model="chosenCards[i]"
          :options="cardOptions"
          :class="$s.Select"
          placeholder="Enter card"
        />
      </fe-grid-item>
    </fe-grid>

    <fe-button variant="primary" @click="handleSubmit">
      Submit
    </fe-button>
  </div>
</template>

<script>
import { mapState } from "vuex";

import FeButton from "Components/Button.vue";
import FeGrid from "Components/Grid.vue";
import FeGridItem from "Components/GridItem.vue";
import FeSelect from "Components/Select.vue";

export default {
  components: {
    FeButton,
    FeGrid,
    FeGridItem,
    FeSelect,
  },

  data() {
    return {
      chosenCards: ["", "", "", "", "", "", "", "", "", ""],
      cardOptions: [
        { value: "2H", label: "2 of Hearts" },
        { value: "2D", label: "2 of Diamonds" },
        { value: "2C", label: "2 of Clubs" },
        { value: "2S", label: "2 of Spades" },

        { value: "3H", label: "3 of Hearts" },
        { value: "3D", label: "3 of Diamonds" },
        { value: "3C", label: "3 of Clubs" },
        { value: "3S", label: "3 of Spades" },

        { value: "4H", label: "4 of Hearts" },
        { value: "4D", label: "4 of Diamonds" },
        { value: "4C", label: "4 of Clubs" },
        { value: "4S", label: "4 of Spades" },

        { value: "5H", label: "5 of Hearts" },
        { value: "5D", label: "5 of Diamonds" },
        { value: "5C", label: "5 of Clubs" },
        { value: "5S", label: "5 of Spades" },

        { value: "6H", label: "6 of Hearts" },
        { value: "6D", label: "6 of Diamonds" },
        { value: "6C", label: "6 of Clubs" },
        { value: "6S", label: "6 of Spades" },

        { value: "7H", label: "7 of Hearts" },
        { value: "7D", label: "7 of Diamonds" },
        { value: "7C", label: "7 of Clubs" },
        { value: "7S", label: "7 of Spades" },

        { value: "8H", label: "8 of Hearts" },
        { value: "8D", label: "8 of Diamonds" },
        { value: "8C", label: "8 of Clubs" },
        { value: "8S", label: "8 of Spades" },

        { value: "9H", label: "9 of Hearts" },
        { value: "9D", label: "9 of Diamonds" },
        { value: "9C", label: "9 of Clubs" },
        { value: "9S", label: "9 of Spades" },

        { value: "10H", label: "10 of Hearts" },
        { value: "10D", label: "10 of Diamonds" },
        { value: "10C", label: "10 of Clubs" },
        { value: "10S", label: "10 of Spades" },

        { value: "JH", label: "Jack of Hearts" },
        { value: "JD", label: "Jack of Diamonds" },
        { value: "JC", label: "Jack of Clubs" },
        { value: "JS", label: "Jack of Spades" },

        { value: "QH", label: "Queen of Hearts" },
        { value: "QD", label: "Queen of Diamonds" },
        { value: "QC", label: "Queen of Clubs" },
        { value: "QS", label: "Queen of Spades" },

        { value: "KH", label: "King of Hearts" },
        { value: "KD", label: "King of Diamonds" },
        { value: "KC", label: "King of Clubs" },
        { value: "KS", label: "King of Spades" },

        { value: "AH", label: "Ace of Hearts" },
        { value: "AD", label: "Ace of Diamonds" },
        { value: "AC", label: "Ace of Clubs" },
        { value: "AS", label: "Ace of Spades" },
      ],
    };
  },

  computed: {
    ...mapState("cards", ["cardRank", "suitRank", "rotationCard", "deck"]),
  },

  mounted() {
    this.$store.commit("page/setTitle", "Select Cards");
  },

  methods: {
    async handleSubmit() {
      const filteredCards = this.chosenCards.filter(Boolean).join(",");

      // Create deck and then proceed to page 2
      await this.$store.dispatch("cards/createDeck", filteredCards);
      await this.$store.dispatch("cards/drawCards", filteredCards.length);
      this.$router.push({ path: `/deck/${this.deck.deck_id}` });
    },
  },
};
</script>

<style module="$s">
.Grid {
  margin-bottom: var(--space-4x);
}

.Label {
  color: var(--color-gray-300);
  font-size: var(--font-size-body-small);
  font-weight: bold;
  text-transform: uppercase;
}
</style>
