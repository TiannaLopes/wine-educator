<template>
  <div v-if="currentDecision" class="decision-container">
    <h3>{{ currentDecision.text }}</h3>
    <ul>
      <li
        v-for="(option, index) in currentDecision.options"
        :key="index"
        @click="makeChoice(option.next)"
        class="decision-option"
      >
        {{ option.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useDecisionStore } from "@/stores/decisionStore";
import { storeToRefs } from "pinia";

export default {
  name: "DecisionComponent",
  setup() {
    const decisionStore = useDecisionStore();
    const { currentDecision } = storeToRefs(decisionStore);

    const makeChoice = (next) => {
      decisionStore.makeDecision(next);
    };

    return {
      currentDecision,
      makeChoice,
    };
  },
};
</script>

<style scoped>
.decision-container {
  padding: 20px;
  background: #f9f9f9;
  border: 1px solid #ddd;
}
.decision-option {
  cursor: pointer;
  color: #0d6efd;
}
.decision-option:hover {
  text-decoration: underline;
}
</style>
