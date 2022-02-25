const webpush = require('web-push');
 
// console.log(webpush.generateVAPIDKeys());

const publicKey= 'BCoyXZKlFfWBqJM7ugRCCeQKJNrl3TvL7JWjUzyRXrGt4afsvbYlB8Dlmrri2P4qO23T7frdAnIvGgMf-PDy590',
       privateKey ='iEbGka6LnubjxIVZX3vd7Zh6Ah3eng_ddqfl3PCA8uc'


const sub= {endpoint:"https://fcm.googleapis.com/fcm/send/eMDXjnsok44:APA91bHxxGb4TQdJ2sd9DY3vnDQgd8jheskdc3C8dbNoM7B-C2J5mJ7MWQgfk9ZlGBZUeWtInh7Jd5ELnBrY3UyuSqQ1PExKi9mBm-UnHh5AW_6ygXtXTM1CCCFU_2VmMwql5T_8Tjg4",
expirationTime:null,
keys:{"p256dh":"BHCzgr5McbId8jei4i3BucTYcqnqh3jZhQtANCJQCgER_bGKTk2b1EDt1mPaymRjD1AXi8clH18s44NH4nof1UQ",
auth:"MKGeLDdEB2GKt1Kj6TJnPg"}}

webpush.setVapidDetails('mailto:kavyashree043@gmail.com', publicKey, privateKey);

const payLoad = {
  notification: {
    data: { url: 'http://localhost:8080/#/notification/listnoty' },
    title: 'Fun Of Heuristic',
    vibrate: [100, 50, 100],
  },
};

webpush.sendNotification(sub, JSON.stringify(payLoad))