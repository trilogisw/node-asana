var client = Asana.Client.create({
  clientId: 618149783325441
});
client.useOauth();
client.authorize().then(function() {
  return client.users.me().then(function(me) {
    console.log('Hello ' + me.name);
  });
}).catch(function(err) {
  console.log(err);
});

