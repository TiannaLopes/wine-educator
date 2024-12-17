import { defineStore } from "pinia";

export const useDecisionStore = defineStore("decisionStore", {
  state: () => ({
    currentDecision: null,
    decisions: {
      region1: {
        text: "You clicked on Region 1. What would you like to do?",
        options: [
          { text: "Explore the forest", next: "exploreForest" },
          { text: "Visit the village", next: "visitVillage" },
        ],
      },
      exploreForest: {
        text: "The forest is quiet and mysterious. What will you do?",
        options: [
          { text: "Follow the path", next: "followPath" },
          { text: "Turn back", next: "region1" },
        ],
      },
      visitVillage: {
        text: "The village is bustling with activity. What will you do?",
        options: [
          { text: "Talk to the villagers", next: "talkVillagers" },
          { text: "Visit the market", next: "visitMarket" },
        ],
      },
    },
  }),
  actions: {
    startDecision(region) {
      this.currentDecision = this.decisions[region];
    },
    makeDecision(next) {
      this.currentDecision = this.decisions[next];
    },
  },
});
