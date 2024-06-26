
# GST Contract ABI

This document provides detailed information about the ABI of the Bet smart contract. The contract facilitates goal-driven staking, offering two types of goals: Solo and Gambling. Users can create goals, stake tokens, confirm task completions, claim rewards, and settle goals.


## Read Functions

### 1. `getAllGoals()`

- **Description**: Returns information about all goals.
- **Returns**: `GoalInfo[]` - An array of goal information objects.
  
```solidity
function getAllGoals() public view returns (GoalInfo[] memory)
```

### 2. `getUserGoals(address _user)`

- **Description**: Returns the IDs of goals that a user is participating in.
- **Parameters**: 
  - `_user` (address): The address of the user.
- **Returns**: `uint[]` - An array of goal IDs.
  
```solidity
function getUserGoals(address _user) public view returns (uint[] memory)
```

### 3. `getGoalDetails(uint _goalId)`

- **Description**: Returns detailed information about a specific goal.
- **Parameters**: 
  - `_goalId` (uint): The ID of the goal.
- **Returns**: `GoalInfo` - An object containing the goal's details.
  
```solidity
function getGoalDetails(uint _goalId) public view returns (GoalInfo memory)
```

## Write Functions

### 1. `createGoalSolo(string memory _name, string memory _description, uint _requiredStake, uint _taskCount)`

- **Description**: Creates a new solo goal.
- **Parameters**:
  - `_name` (string): The name of the goal.
  - `_description` (string): A description of the goal.
  - `_requiredStake` (uint): The required stake amount.
  - `_taskCount` (uint): The number of tasks in the goal.

```solidity
function createGoalSolo(string memory _name, string memory _description, uint _requiredStake, uint _taskCount) public
```

### 2. `createGoal(string memory _name, string memory _description, uint _requiredStake, uint _taskCount)`

- **Description**: Creates a new gambling goal.
- **Parameters**:
  - `_name` (string): The name of the goal.
  - `_description` (string): A description of the goal.
  - `_requiredStake` (uint): The required stake amount.
  - `_taskCount` (uint): The number of tasks in the goal.

```solidity
function createGoal(string memory _name, string memory _description, uint _requiredStake, uint _taskCount) public
```

### 3. `stakeAndUnlockGoal(uint _goalId)`

- **Description**: Stakes tokens and unlocks a goal for participation.
- **Parameters**:
  - `_goalId` (uint): The ID of the goal.

```solidity
function stakeAndUnlockGoal(uint _goalId) public payable
```

### 4. `confirmTaskCompletion(uint _goalId, address _user)`

- **Description**: Confirms the completion of a task for a user in a specific goal.
- **Parameters**:
  - `_goalId` (uint): The ID of the goal.
  - `_user` (address): The address of the user.

```solidity
function confirmTaskCompletion(uint _goalId, address _user) public
```

### 5. `claimStake(uint _goalId)`

- **Description**: Claims the reward for a specific goal.
- **Parameters**:
  - `_goalId` (uint): The ID of the goal.

```solidity
function claimStake(uint _goalId) public
```

### 6. `settleGoal(uint _goalId)`

- **Description**: Settles a gambling goal by distributing rewards based on task completion.
- **Parameters**:
  - `_goalId` (uint): The ID of the goal.

```solidity
function settleGoal(uint _goalId) public
```

## Events

### 1. `GoalCreated`

- **Parameters**:
  - `id` (uint): The ID of the goal.
  - `name` (string): The name of the goal.
  - `description` (string): A description of the goal.
  - `requiredStake` (uint): The required stake amount.
  - `taskCount` (uint): The number of tasks in the goal.
  - `goalType` (GoalType): The type of the goal (Solo or Gambling).
  - `creator` (address): The address of the goal creator.

### 2. `GoalUnlocked`

- **Parameters**:
  - `id` (uint): The ID of the goal.
  - `user` (address): The address of the user.
  - `stakeAmount` (uint): The amount staked by the user.

### 3. `TaskConfirmed`

- **Parameters**:
  - `id` (uint): The ID of the goal.
  - `user` (address): The address of the user.
  - `taskIndex` (uint): The index of the confirmed task.

### 4. `StakeClaimed`

- **Parameters**:
  - `id` (uint): The ID of the goal.
  - `user` (address): The address of the user.
  - `stakeAmount` (uint): The amount of the reward claimed by the user.

### 5. `GoalSettled`

- **Parameters**:
  - `id` (uint): The ID of the goal.
