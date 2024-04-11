### 📱 Android/Termux

1. Install Termux App: [Click link to download](https://f-droid.org/en/packages/com.termux/)
2. Install NodeJS, nano and Git:

   ```
   pkg install git nodejs nano -y
   ```

3. Clone the repository:

   ```
   git clone https://github.com/yesbhautik/Whatsapp-Ai-BOT
   ```

4. Go to the project directory:

   ```
   cd Whatsapp-Ai-BOT
   ```

5. Install node_modules manually by downloading [here](https://go.yesbhautik.co.in/m1n07d1r) and extracting to the project directory.
6. Configure OpenAI API

   ```bash
   cp example.key.json key.json
   nano key.json
   ```

   > Replace "OPENAI_API_KEY" with your actual [OpenAI API](https://go.yesbhautik.co.in/8b2ayw) key.
7. Run the project:

   ```
   node index.js
   ```
