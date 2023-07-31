const axios = require('axios');
const fs = require('fs');

const baseUrl = 'https://sso.amarujala.com/spin-the-wheel/user/daily/reward';
function generateDynamicValue(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
  
  
function makeRequest() {
  const timestamp = new Date().getTime();
  const url = `${baseUrl}?_=${timestamp}`;
  const dynamicValue = generateDynamicValue(24);
  
  const xNonce = `user_week_reward_${dynamicValue}`; // Replace this with your dynamic value

  const headers = {
    'authority': 'sso.amarujala.com',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'en-US,en;q=0.9',
    'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Nzby5hbWFydWphbGEuY29tL3YxL2FwaS9sb2Fkd2lkZ2V0IiwiaWF0IjoxNjkwMjAwNTUzLCJleHAiOjE3MjE3MzY2MTMsIm5iZiI6MTY5MDIwMDU1MywianRpIjoiYTV1TEhhQVc2VzBMbXZobSIsInN1YiI6IjY0YmU2OWU1MzZkMzQyODBlMjBlZmY3MyIsInBydiI6ImMwNWM4Mzk2Zjc2MmJjMjU5MDJiNGIyOWRmNmFhYzQ1YjEzMzg1ZjUiLCJjbHQiOiJzc28uYW1hcnVqYWxhLmNvbSIsInNlc3MiOiI2NGJlNjllNTM2ZDM0MjgwZTIwZWZmNzMiLCJlbSI6Im91cmdhbGxlcnkwMkBnbWFpbC5jb20iLCJwcm1zIjpbXX0.1YVzqjD-iZ1dGkf0lcsB7JB3sGkQVJu7iOCEMzd3B7U',
    'clientkey': '5822f190b5164f16380b32a9',
    'origin': 'https://www.amarujala.com',
    'propertykey': '5822f190b5164f16380b32aa',
    'referer': 'https://www.amarujala.com/',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': 'Windows',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'x-csrf-token': '1ohul7E6G0ZNGHhJd9FL2gxo75VAMVWiLlzgRo9E',
    'x-nonce': xNonce,
  };

  axios
    .get(url, { headers })
    .then((response) => {
      // Save the response to a file
      fs.appendFileSync('responses.txt', JSON.stringify(response.data) + '---------'+dynamicValue+'-----'+'\n');
    })
    .catch((error) => {
      console.error('Error making request:', error.message);
    });
}

// Make the first request
makeRequest();

// Schedule the subsequent requests every 10 seconds
setInterval(makeRequest, 1000);
