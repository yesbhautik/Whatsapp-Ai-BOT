1. Install NodeJS and Git Bash.
      ```
      sudo apt -y remove nodejs
      curl -fsSl https://deb.nodesource.com/setup_lts.x | sudo bash - && sudo apt -y install nodejs
      ```
2. Clone the repository: 
   ```
   git clone https://github.com/yesbhautik/Whatsapp-Ai-BOT
   ```
3. Go to the project directory:
   ```
   cd Whatsapp-Ai-BOT
   ```
4. Clean NPM Cache:
   ```
   npm cache clean --force
   ```
5. Install dependencies: 
   ```
   npm install --force
   ```
   > It's may take minimum 10 to 15 Minutes as per your internet connection & your system configuration.
   > If you are facing issue in Node Package installation
      1. Delete node_modules folder
      2. Extract provided ZIP archive file in the Project root directory.
   
6. Run the project: 
   ```
   npm start
   ```
