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
   Refactor the project to follow the proper structure:
   - Move the `Home` component to the `/src/pages` folder.
   - Ensure the `Home` component uses SCSS modules. Remove any inline styles and create a `Home.module.scss` file for its styles.

8. **Implement the Login Page**  
   Create a `Login` page with the following features:
   - A form containing fields for `username/email` and `password`.
   - A `Login` button to submit the form.
