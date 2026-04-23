# Instructions for Setting Up the Project with OpenCode

1. **Initialize the Project**  
   Open the terminal and execute the following command to initialize the project:

   ```bash
   /init
   ```

   This will create the `AGENTS.md` file and set up the project environment.

2. **Create the Required Directory Structure**  
   Ensure the following directory structure exists:

   ```
   .opencode/
       agents/
   ```

3. **Create the Frontend Agent**  
   Inside the `.opencode/agents/` directory, create a file named `frontend-react-agent.md` with the following description:

   ```
   This agent is responsible for UI and feature creation with knowledge in:
   - Node.js
   - React
   - Redux Toolkit
   - RTK Query
   - Ant Design
   - ESLint
   - Prettier
   ```

4. **Exit the OpenCode Environment**  
   Quit the OpenCode terminal by running:

   ```bash
   exit
   ```

5. **Reopen OpenCode**  
   Reopen the OpenCode environment by running:

   ```bash
   opencode
   ```

   Verify that the `AGENTS.md` file and `.opencode/agents/frontend-react-agent.md` file have been created with the appropriate content.

6. **Run the Frontend Agent**  
   Use the `frontend-react-agent` to execute the following prompt:

   ```plaintext
   Create a simple Home page saying "Hello" with a link to a login page. Do not implement the login page yet.
   ```

7. **Refactor the Project Structure**

```
   Refactor the project to follow the proper structure:
   - Move the `Home` component to the `/src/pages` folder.
   - Ensure the `Home` component uses SCSS modules. Remove any inline styles and create a `Home.module.scss` file for its styles.
```

8. **Implement the Login Page**

```
   Create a `Login` page with the following features:
   - A form containing fields for `username/email` and `password`.
   - A `Login` button to submit the form.
```

change to `Plan` mode in opencode cli and execute the following prompt:

```plaintext
review the code inside `src/pages` is this scalable and maintanable. what about create a folder per page ?
```

expected output:

````Plan for Refactor: Folder per Page Structure
Objective
Refactor the current flat src/pages folder structure into a modularized "folder per page" structure. Each page will have its own directory containing:
- Page component
- Styles (CSS/SCSS module)
- Optional index.ts for re-export
- Space for page-specific tests and assets
---
Current Structure
src/pages/
├── Login.tsx
├── Home.tsx
├── Login.module.scss
└── Home.module.scss
---
Proposed Structure
src/pages/
├── Login/
│   ├── Login.tsx
│   ├── Login.module.scss
│   └── index.ts  (optional, for simplified imports)
├── Home/
│   ├── Home.tsx
│   ├── Home.module.scss
│   └── index.ts  (optional, for simplified imports)
---
### **Steps to Implement**
#### 1. **Create Dedicated Folder for Each Page**
   - Make folders for each page:
     - `src/pages/Login/`
     - `src/pages/Home/`
#### 2. **Move Existing Files**
   - Move `Login.tsx` and `Login.module.scss` into `src/pages/Login/`.
   - Move `Home.tsx` and `Home.module.scss` into `src/pages/Home/`.
#### 3. **Add `index.ts` for Each Page (Optional but Recommended)**
   - Add an `index.ts` file in each page directory for re-export:
     ```typescript
     // src/pages/Login/index.ts
     export { default } from './Login';
     ```
     ```typescript
     // src/pages/Home/index.ts
     export { default } from './Home';
     ```
#### 4. **Update Imports**
   - Update all internal/external imports of `Login` and `Home` to use the directories:
     ```diff
     - import Login from './src/pages/Login.tsx';
     + import Login from './src/pages/Login';

     - import Home from './src/pages/Home.tsx';
     + import Home from './src/pages/Home';
     ```
#### 5. **Test the Refactor**
   - Ensure the application compiles and runs without errors:
     - Run the development server `npm run dev` and verify UI functionality of `Home` and `Login`.
   - Check for broken imports.
````

change to `frontend-react-agent` mode in opencode cli and execute the following prompt:

```plaintext
proceed with the changes
```
