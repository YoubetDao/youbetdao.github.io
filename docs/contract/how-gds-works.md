# How Goal-Driven Staking Works

Goal-Driven Staking (GDS) is not a single staking model; its core principle is to reward every effort. This concept can take various forms and be quite diverse. Our goal is to provide a framework that supports a wide variety of GDS, allowing users to enjoy both the customization of rules and convenient access.

Below are the GDS types and rules we currently support:

## Staking Types

### Staking Settlement Methods

We have identified two widely prevalent types of staking:

One type involves only a single participant. The purpose of staking is to ensure that the user incurs a certain cost when setting a goal, which they can recover upon completing the goal.

The other type is more intriguing. It creates a competitive environment for the same type of goal, defining a concept of goal completion. This allows participants who come closer to achieving their goals to receive rewards. This type of staking meets a broad range of needs.

- **Solo Staking**
  $$reward = staking - fee$$
- **Gambling Staking**
  $$sum\_staking = \sum_{i=1}^n staking_i$$
  $$reward_i = sum\_staking\ * \ (staking_i * finished_i \ / \ \sum_{i=1}^n (staking_i \ * \ finished_i)) - fee$$

## Goal Types

- **Recurring Goals**
  - Such as daily check-ins, weekly check-ins
- **Single Task Completion within a Specified Time**
  - Such as completing a goal of reducing body fat to 15%
- **Multiple Task Completion within a Specified Time**
  - Such as completing a course that includes several independent chapters, calculating goal completion based on chapter completion
- **Single Task with No Time Limit**

## Settlement Trigger

- **Solo Staking**: Immediate trigger upon completion, staking fails if overdue
- **Gambling Staking**: Settlement triggered at specified time, rewards calculated based on everyone's completion status. We will soon be hosting a cronjob to automate this process.

## Claim

Any time within the claim period, a claim system fee will be deducted from the rewards.

# Learn more
You can learn more about the specific invocation methods through the [ABI documentation](abi).
