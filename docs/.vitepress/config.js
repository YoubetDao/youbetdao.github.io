import mathjax3 from "markdown-it-mathjax3";

module.exports = {
  title: "YouBet-DAO",
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
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
            {
              text: "How GDS works?",
              link: "/contract/how-gds-works",
            },
            {
              text: "GDS Contract ABI",
              link: "/contract/abi",
            },
          ],
        },
        {
          text: "SDK",
          items: [
            { text: "Quickstart", link: "/sdk/quickstart" },
            { text: "API", link: "/sdk/api" },
          ],
        },
      ],
    },
  },
};
