module.exports.config = {
  name: "goiadmin3",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61551604574014") {
    var aid = ["61551604574014"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = [",এটা ফারহান এর বউ লাগে আর ম্যনশন করবি না", " দারা তোদের একটা ব্যবস্হা নিতে হবে খালি ফারহান এর বউকে ডাকে 🥲", "আবে সালা তোরা নেকামি করবি আর বস এর বউকে মেনশন দিবি কেন, আমার বসকে মেনশন দে😌", "Assalamu Walaikum আপনি যারে ম্যনশন করতে আছেন ওইটা আপনার ভাবি লাগে", " তুই আর কতো জালাবি আর তোর ভাবিকে ম্যনশন দিবি না🥵🥰😍😏","বস এর বউকে আর ম্যনশন দিবি না তার এখন জামাই আছে ওকে"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
