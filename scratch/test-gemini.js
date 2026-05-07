const axios = require('axios');
const key = 'AIzaSyBnlYr_VEvvAKVyo9AjbrLh7WnKSKAfVF0';

axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
  contents: [{ parts: [{ text: 'Return a JSON object with a key "hello" and value "world"' }] }],
  generationConfig: {
    responseMimeType: 'application/json',
    temperature: 0
  }
}).then(r => {
  console.log(r.data.candidates[0].content.parts[0].text);
}).catch(e => {
  console.error(e.response ? e.response.data : e.message);
});
