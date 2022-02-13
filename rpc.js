const rpc = require("discord-rpc");

const ApplicationID = "123456789012345678" //Your ClientID goes here.
rpc.register(ApplicationID);

const client = new rpc.Client({ transport: 'ipc' });

client.on('ready', () => {
  console.log('The RPC is working like a charm!');
  console.log('Thanks for using QuickRPC!');           //     :> Thanks!
  
  client.setActivity({

    //Details & State
    details: "Details goes here!",
    state: "State goes here!",

    //Images
    largeImageKey: "largeKey",
    largeImageText: "Text for the large image.",
    smallImageKey: "smallKey",
    smallImageText: "Text for the small image.",

    //Buttons
    buttons: [ { 
      label: "✅ Button 1", url: 'https://github.com/Xainly/Discord-QuickRPC', 
    },{
      label: "❎ Button 2", url:'https://github.com/Xainly/Discord-QuickRPC/issues',
    },],

    //Timestamps
  //  startTimestamp: Date.now(), // You can still use this to get the elapsed time. Simply erase the first 2 slashes and you are good to go.
  //  endTimestamp: Date.now(),   // An Epoch converter link: https://www.epochconverter.com/
  });
});

client.login({ clientId: ApplicationID }).catch((error) => {
  throw error.message;
});
