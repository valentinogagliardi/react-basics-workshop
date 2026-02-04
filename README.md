# React Basics Workshop

A hands-on workshop for learning React basics while applying unit and integration tests.

## Your Task

Your task is to refactor `SignupForm` while adding more tests.

## Prerequisites

- Node.js (v22 or higher recommended)
- npm

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

```bash
npm run dev
```

### 3. Run the Tests

In a **separate terminal window**, run the tests:

```bash
# Run tests in watch mode
npm test

```

## Workshop Structure

This workshop focuses on testing React components using modern testing practices:

- **Unit Tests**: Test individual components in isolation
- **Integration Tests**: Test how components work together
- **Testing Library**: Use accessible queries and user-centric testing approaches

## Workshop Challenges

You'll need to write tests for the React application. Work through these challenges in order:

### Challenge 1: Set Up Your First Component Test

**Goal**: Create your first component test file and understand the testing structure.

**Your Task**:
- Create a test file for one of the components in the application
- Write a simple test that verifies the component renders without crashing
- Use queries from `@testing-library/react` to find elements

**Hint**: Look for components in the `src` directory and start with the simplest one.

### Challenge 2: Test User Interactions

**Goal**: Learn how to simulate user interactions and verify the results.

**Your Task**:
- Write tests that simulate user actions (clicking buttons, typing in inputs, etc.)
- Verify that the UI updates correctly in response to user actions
- Use `@testing-library/user-event` for realistic user interactions

**Hint**: Focus on testing behavior from the user's perspective, not implementation details.

### Challenge 3: Write Integration Tests

**Goal**: Test how multiple components work together.

**Your Task**:
- Write tests that verify the interaction between parent and child components
- Test data flow and state management across component boundaries
- Ensure the full user workflow functions correctly

### Challenge 4: Test Edge Cases and Error States

**Goal**: Ensure your application handles edge cases gracefully.

**Your Task**:
- Write tests for error states and loading states
- Test form validation and error messages
- Verify accessibility requirements are met

## Linting

```bash
npm run lint

npm run lint:fix
```

## Resources

- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)
- [User Event Documentation](https://testing-library.com/docs/user-event/intro)
- [Vitest Documentation](https://vitest.dev)

## License

MIT
