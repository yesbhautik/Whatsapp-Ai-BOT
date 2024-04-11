### Deploy on Windows</br>
1. Install NodeJS and Git Bash.
      - NodeJS https://nodejs.org/en/download/ <br>
      - Git https://git-scm.com/downloads/
      - After this run following command in powershell
   <br>

   ```bash
   npm install -g npm
   ```

2. Clone the repository:

   ```bash
   git clone https://github.com/yesbhautik/Whatsapp-Ai-BOT
   ```

3. Go to the project directory:

   ```bash
   cd Whatsapp-Ai-BOT
   ```

4. Clean NPM Cache:

   ```bash
   npm cache clean --force
   ```

5. Install dependencies:

   ```bash
   npm i
   ```

6. Configure OpenAI API

   ```bash
   cp example.key.json key.json
   notepad key.json
   ```

   > Replace "OPENAI_API_KEY" with your actual [OpenAI API](https://go.yesbhautik.co.in/8b2ayw) key.
7. Run the project:

   ```bash
   npm start
   ```
   
