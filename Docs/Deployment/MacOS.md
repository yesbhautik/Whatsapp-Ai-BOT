### Deploy on MacOS</br>
1. Install NodeJS, nano and Git Bash.

      ```bash
      sudo apt -y remove nodejs
      curl -fsSl https://deb.nodesource.com/setup_lts.x | sudo bash - && sudo apt -y install nodejs
      apt install git nano -y
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
   nano key.json
   ```
   > Replace "OPENAI_API_KEY" with your actual [OpenAI API](https://go.yesbhautik.co.in/8b2ayw) key.
   
7. Run the project:
   
   ```bash
   npm start
   ```

