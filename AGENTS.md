# AGENTS.md

This document provides instructions and guidelines for agents operating in this repository. It includes build/lint/test commands as well as code style guidelines.

## Build, Lint, and Test Commands

### Development

To start the development server:

```bash
npm run dev
```

### Build

To build the project:

```bash
npm run build
```

### Lint

To lint the codebase:

```bash
npm run lint
```

### Preview

To preview the production build locally:

```bash
npm run preview
```

### Testing

Currently, no specific test commands or configurations are defined in the `package.json` file. Add test configurations if testing is required.

---

## Code Style Guidelines

### Import Structure

1. **Order Imports**: Start with external library imports, followed by internal imports ordered by relative path depth.
   ```ts
   import React from "react";
   import { Button } from "antd";
   import styles from "./App.module.scss";
   ```
2. **Extensions**: Include extensions for non-TypeScript files such as `.scss`.

### Formatting

- Code must adhere to Prettier or similar formatting configs.
- Use 2 spaces for indentation.
- Wrap lines exceeding 80 characters.

### TypeScript Usage

1. **Preferred Types**:
   - Use TypeScript interfaces instead of type aliases for object shapes.
   - Always use explicit types for props, state, and return values.

     ```ts
     interface Props {
       title: string;
     }

     const Component: React.FC<Props> = ({ title }) => {
       return <h1>{title}</h1>;
     };
     ```

2. **Avoid `any`**: Do not use `any`. Prefer stricter types (e.g., `unknown` or `never`) if unsure.

### Naming Conventions

- **Files**: Use camelCase for filenames (e.g., `myComponent.tsx`).
- **Variables**:
  - Use camelCase for variables and functions.
  - Use PascalCase for React components and TypeScript classes.
- **Constants**:
  - Use UPPER_SNAKE_CASE for global constants.
- **Prefixes**:
  - Use `I` as a prefix for interfaces (`IExample`).

### Error Handling

Always handle exceptions explicitly using `try/catch` blocks:

```ts
try {
  const data = await fetchData();
} catch (error) {
  console.error("Error fetching data:", error);
}
```

### Comments

- Write descriptive comments for complex code blocks.
- Use JSDoc-style comments for functions:
  ```ts
  /**
   * Fetches data from the API.
   * @returns A promise that resolves to the data.
   */
  const fetchData = async (): Promise<Data> => {
    // implementation
  };
  ```

### ESLint Rules

This project uses the following ESLint extends:

- `eslint:recommended`
- `plugin:@typescript-eslint/recommended`
- `plugin:react-hooks/recommended`
- `plugin:react-refresh/vite`

Global ignores: `dist/`

---

## Notes for Agents

- Always confirm the presence of necessary tools (e.g., Node.js, npm).
- Follow this style guide strictly to maintain codebase consistency.
