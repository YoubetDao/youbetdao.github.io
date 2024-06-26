module.exports = {
  title: "YouBet-DAO",
  themeConfig: {
    sidebar: {
      "/": [
        {
          text: "YouBet",
          link: "/",
        },
        {
          text: "Introduction",
          items: [
            {
              text: "You Bet: Goal-Driven Staking Is All You Need",
              link: "/introduction/introduction",
            },
            {
              text: "Use Cases",
              link: "/introduction/use-cases",
            },
            {
              text: "Vision",
              link: "/introduction/vision",
            },
          ],
        },
        {
          text: "Contract",
          items: [
            // TODO: Add explain for GST rules.
            {
              text: "GST Contract ABI",
              link: "/contract/abi",
            },
          ],
        },
        {
          text: "Quick Start",
          items: [{ text: "Hello, World!", link: "/quickstart/hello-world" }],
        },
      ],
    },
  },
};
