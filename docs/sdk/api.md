# How to use SDK?

## Getting Started

To use this SDK, you can install it in your project by using the following command:

```bash
pnpm add youbet-sdk
```

## SDK Initialization

You can initialize the SDK as shown below:

```javascript
import { SDK, NetworkType } from 'youbet-sdk';

const sdk = new SDK({
  privateKey: 'your-private-key', // optional
  networkType: NetworkType.Mainnet // or NetworkType.Testnet
});
```

## Client Module

The client module provides methods for querying contract data. Here are some methods you can use:

### `getContractOwner()`

This method returns the owner of the contract.

```javascript
const owner = await sdk.client.getContractOwner();
```

### `getAllGoals()`

This method returns all the goals in the contract.

```javascript
const goals = await sdk.client.getAllGoals();
```

### `getGoalDetails(goalId: number)`

This method returns the details of a specific goal.

```javascript
const goalDetails = await sdk.client.getGoalDetails(goalId);
```

### `getUserGoals(user: string)`

This method returns all the goals of a specific user.

```javascript
const userGoals = await sdk.client.getUserGoals(userAddress);
```

## Contract Module

The contract module provides methods for interacting with the contract. Here are some methods you can use:

### `claimStake(goalId: number)`

This method allows a user to claim their stake for a specific goal.

```javascript
await sdk.contract.claimStake(goalId);
```

### `confirmTaskCompletion(goalId: number, user: string)`

This method allows a user to confirm the completion of a task for a specific goal.

```javascript
await sdk.contract.confirmTaskCompletion(goalId, userAddress);
```

### `createGoal(name: string, description: string, requiredStake: number, taskCount: number)`

This method allows a user to create a new goal.

```javascript
await sdk.contract.createGoal(name, description, requiredStake, taskCount);
```

### `createGoalSolo(name: string, description: string, requiredStake: number, taskCount: number)`

This method allows a user to create a new solo goal.

```javascript
await sdk.contract.createGoalSolo(name, description, requiredStake, taskCount);
```

### `settleGoal(goalId: number)`

This method allows a user to settle a goal.

```javascript
await sdk.contract.settleGoal(goalId);
```

### `stakeAndUnlockGoal(goalId: number, value: string)`

This method allows a user to stake and unlock a specific goal.

```javascript
await sdk.contract.stakeAndUnlockGoal(goalId, value);
```

## Learn More

You can learn more about this SDK by checking out [the source code](https://github.com/YoubetDao/youbet-sdk/) or reaching out to the developers.