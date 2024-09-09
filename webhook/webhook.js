const express = require('express');
const crypto = require('crypto');
const { exec } = require('child_process');

const app = express();
const secret = 'qwerty'; // Use the same secret from the GitHub webhook setup

app.use(express.json());

app.post('/webhook', (req, res) => {
  const signature = req.headers['x-hub-signature-256'];
  const body = JSON.stringify(req.body);
  const hmac = crypto.createHmac('sha256', secret);
  const digest = 'sha256=' + hmac.update(body).digest('hex');

  if (signature !== digest) {
    return res.status(401).send('Signature mismatch');
  }

  // Check if the push is for the main branch
  const branch = req.body.ref;
  if (branch !== 'refs/heads/main') {
    console.log(`Push to ${branch} ignored. Only main branch is accepted.`);
    return res.status(200).send('Webhook received but not for the main branch');
  }

  // If the request is valid and from the main branch, pull the latest code
  exec('cd /var/www/html/finin && git pull origin main', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error pulling code: ${stderr}`);
      return res.status(500).send('Error pulling code');
    }

    console.log(`Code pulled successfully from main: ${stdout}`);

    // Restart your Next.js app if necessary, e.g., using PM2
    exec('pm2 restart your-app', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error restarting app: ${stderr}`);
        return res.status(500).send('Error restarting app');
      }
      console.log(`App restarted successfully: ${stdout}`);
      res.status(200).send('Webhook received, main branch updated, and app restarted');
    });
  });
});

app.listen(3001, () => {
  console.log('Webhook listener running on port 3001');
});
