const axios = require('axios');
const schedule = require('node-schedule');

const ourDetails1 = {
  "mehakcfc@gmail.com=": "Mehak",
  "princecfc@gmail.com": "Prince",
  "ourpicturegallery02@gmail.com": "Raman",
  "nitinmalhotra2020.nm@gmail.com": "Nitin",
  "ourgallery01@gmail.com": "Sanyam",
  "nitinmtest7@gmail.com": "Gaurav",
  "malhotraplastics7@gmail.com": "Ashok",
  "nitinm@mirrahealthcare.com": "Himaira",
  "nitintest6@gmail.com": "Silky",
  "yashrai031194@gmail.com": "Yash",
}

const ourDetails2 = {
  "nitin@gnxgroup.org": "Nitin",
  "shalini.arora2617@gmail.com": "Shalini Arora",
  "smpu.ludhiana@gmail.com": "SMPU",
  "ramankumar031194@gmail.com": "Kumar",
  "ourgallery02@gmail.com": "Sanyam",
  "raman031194@gmail.com": "Raman",
  "pm996633@gmail.com": "Prince",
  "nitincfc@gmail.com": "Nitin",
  "nmcfcnm@gmail.com": "Nitin",
  "sargunmalhotra30@gmail.com": "Sargun"
}


const ourDetails3 = {
  "ourpicturegallery06@gmail.com": "Himaira",
  "maniksharma201512@gmail.com": "Manik",
  "rishabhchauhan0623@gmail.com": "Rishabh",
  "mrcoder1257@gmail.com": "Shivam",
  "pintukumar29273@gmail.com": "Pintu",
  "sheenu26378@gmail.com": "Sheenu",
  "vivek.jain20765@gmail.com": "Vivek Jain",
  "mmahesh.kumar6372@gmail.com": "Mahesh Kumar",
  "malhotraplastics07@gmail.com": "Ashok",
  "malhotraplastics81@gmail.com": "Gaurav"
}

const ourEmails1 = Object.keys(ourDetails1);
const ourEmails2 = Object.keys(ourDetails2);
const ourEmails3 = Object.keys(ourDetails3);

const blockedEmails = [
  "imsidhu1708@gmail.com",
  "ss4363351@gmail.com",
  "eknoorsidhusidhu3@gmail.com",
  "eknoorsidhusidhu0123@gmail.com",
  "hardeepsinghdahion01@gmail.com",
  "eknoor.singh03@yahoo.in",
  "eknoorsingh03@yahoo.in",
  "eknoorsingh0124@gmail.com",
  "ramneeeksidhu@gmail.com",
  "eknoorsingh0124@gmail.com",
  "ramneeeksidhu@gmail.com",
  "noorsidhu0124@gmail.com",
  "imnavjotsidhu@gmail.com",
  "navi00386@gmail.com",
  "amandeepkaurdahion66916@gmail.com",
  "noorsidhu0124@gmail.com",
  "sheenam00386@gmail.com",
  "aksamitmonga@gmail.com",
  "sahil96.ssr@gmail.com",
  "shunty00386@gmail.com",
  "hardeepsinghdahion@gmail.com",
  "bin.jasveer@gmail.com",
  "nadwal.jasveer@gmail.com",
  "hardeepsinghdahion@gmail.com",
  "jasveersingh.nadwal@gmail.com",
  "singhssr95@gmail.com",
  "jagseer.nadwal@gmail.com",
  "whatsapp.jasveer@gmail.com",
  "whatsapp.jasveer@gmail.com",
"jasinadwal1997@gmail.com",
"e8234492@gmail.com",
"singh0124@aol.com",
"5911jattmosa@gmail.com",
"cr7ronaldo17manu@gmail.com",
"parm19901990@rediffmail.com",
"photos1june21.jasveer@gmail.com",
"photos1october22.jasveer@gmail.com",
"onen5995@gmail.com",

"shunty00386@gmail.com",
"eknoorsingh0124@gmail.com",
"5911jattmosa@gmail.com",
"cr7ronaldo17manu@gmail.com",
"parm19901990@rediffmail.com",
"photos1june21.jasveer@gmail.com",
"photos1october22.jasveer@gmail.com",
"onen5995@gmail.com",
"s.parshlodha04@gmail.com",
"f.ast.furious6999@gmail.com",



"eknoorsidhusidhu3@gmail.com",
"eknoor.singh03@yahoo.in",
"5911jattmosa@gmail.com",
"cr7ronaldo17manu@gmail.com",
"parm19901990@rediffmail.com",
"photos1june21.jasveer@gmail.com",
"photos1october22.jasveer@gmail.com",
"onen5995@gmail.com",
"s.parshlodha04@gmail.com",
"f.ast.furious6999@gmail.com",


"amandeepkaurdahion66916@gmail.com",
"s.parshlodha04@gmail.com",
"p.remium420840@gmail.com",
"f.ast.furious6999@gmail.com",
"d.abanggkhan733@gmail.com",
"k.ingofworld6999@gmail.com",
"p.remium840420@gmail.com",
"s.uccessachiever420@gmail.com",
"g.amewinner6999@gmail.com",
"b.illgates4087@gmail.com",
"hardeepsinghdahion01@gmail.com",
"imsidhu1708@gmail.com",
"imnavjotsidhu@gmail.com",
"sheenam00386@gmail.com",
"jasveersingh.nadwal@gmail.com",
"aksamitmonga@gmail.com",
"shunty00386@gmail.com",
"bin.jasveer@gmail.com",
"eknoor.singh03@yahoo.in",
"amandeepkaurdahion66916@gmail.com"
]

const getScore = (element) => {
  let score = 0;
  if(ourEmails1.includes(element.email) || ourEmails2.includes(element.email) || ourEmails3.includes(element.email)) {
    score = Math.floor(Math.random() * 1000);;
  } else if(blockedEmails.includes(element.email)) {
    score = -1*element.score;
  } else {
    score = 299999 - element.score; 
  }
  return score;
}

// Schedule the function to run every 10 minutes
const job = schedule.scheduleJob('* * * * *', async () => {
  console.log("Running ",new Date())
  try {
    // Call three APIs using POST requests
    const APIENDPOINT = 'https://server.xtendr.co/TGP/sandfoot_connect_api/pages/sandfoot_api/communication_data_api.php';
    const response1 = await axios.post(APIENDPOINT, `timestamp=${new Date().getTime()}&email=testing@gmail.com&type=getLBdata&gameType=sandsurf`, {});
    const response2 = await axios.post(APIENDPOINT, `timestamp=${new Date().getTime()}&email=testing@gmail.com&type=getLBdata&gameType=football`, {});
    const response3 = await axios.post(APIENDPOINT, `timestamp=${new Date().getTime()}&email=testing@gmail.com&type=getLBdata&gameType=skateboard`, {});
    // Process the returned arrays
    const array1 =  response1.data;
    const array2 = response2.data;
    const array3 = response3.data;
    let max1 = 0;
    let myScores1 = {};
    let max2 = 0;
    let myScores2 = {};
    let max3 = 0;
    let myScores3 = {};
    await Promise.all([0,1,2,3,4,5,6,7,8,9].map(async i => {
      const element1 = array1[i.toString()];
      if(element1) {
        if(max1 < element1.score && !ourEmails1.includes(element1.email)) {
          max1 = element1.score; 
        }
        myScores1[element1.email] = element1.score;
        if (element1.score > 299999 || blockedEmails.includes(element1.email)) {
          const score = getScore(element1)
          const res = await axios.post(APIENDPOINT, `timestamp=${new Date().getTime()}&name=${element1.name}&email=${element1.email}&type=update_addup_score&score=${score}&gameType=sandsurf`, {});
          console.log(`Modified element1 with email ${element1.email} and set score to ${score}.`);
        }
      }
      const element2 = array2[i.toString()];
      if (element2) {
        if(max2 < element2.score && !ourEmails2.includes(element2.email)) {
          max2 = element2.score; 
        }
        myScores2[element2.email] = element2.score;
        if (element2.score > 299999 || blockedEmails.includes(element2.email)) {
          const score = getScore(element2)
          const res = await axios.post(APIENDPOINT, `timestamp=${new Date().getTime()}&name=${element2.name}&email=${element2.email}&type=update_addup_score&score=${score}&gameType=football`, {});
          console.log(`Modified element2 with email ${element2.email} and set score to ${score}.`);
        }
      }
      const element3 = array3[i.toString()];
      if (element3) {
        if(max3 < element3.score && !ourEmails3.includes(element3.email)) {
          max3 = element3.score; 
        }
        myScores3[element3.email] = element3.score;
        if (element3.score > 299999 || blockedEmails.includes(element3.email)) {
          const score = getScore(element3)
          const res = await axios.post(APIENDPOINT, `timestamp=${new Date().getTime()}&name=${element3.name}&email=${element3.email}&type=update_addup_score&score=${score}&gameType=skateboard`, {});
          console.log(`Modified element3 with email ${element3.email} and set score to ${score}.`);
        }
      }
    }))
    console.log("max1------",max1)
    if(max1) {
      await Promise.all(ourEmails1.map(async email => {
        let score = myScores1[email] || 0;
          if(!myScores1[email] || score < max1) {
            const updatedScore = max1 - score + Math.random() * 1000; 
            const res = await axios.post(APIENDPOINT, `timestamp=${new Date().getTime()}&name=${ourDetails1[email]}&email=${email}&type=update_addup_score&score=${updatedScore}&gameType=sandsurf`, {});
          }
      }))
    }
    console.log("max2------",max2)
    if(max2) {
      
      await Promise.all(ourEmails2.map(async email => {
        let score = myScores2[email] || 0;
        if(!myScores2[email] || score < max2) {
          
          const updatedScore = max2 - score + Math.floor(Math.random() * 1000); 
          

          const res = await axios.post(APIENDPOINT, `timestamp=${new Date().getTime()}&name=${ourDetails2[email]}&email=${email}&type=update_addup_score&score=${updatedScore}&gameType=football`, {});
        }
      }))
    
    }
    console.log("max3------",max3)
    if(max3) {
      await Promise.all(ourEmails3.map(async email => {
        let score = myScores3[email] || 0;
          if(!myScores3[email] || score < max3) {
            const updatedScore = max3 - score + Math.random() * 1000; 
            const res = await axios.post(APIENDPOINT, `timestamp=${new Date().getTime()}&name=${ourDetails3[email]}&email=${email}&type=update_addup_score&score=${updatedScore}&gameType=skateboard`, {});
          }
      }))
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});
console.log("Code is running now")