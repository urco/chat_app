Meteor.methods({
  // adding new comments
  sendMessage:function(message){
    if (this.userId){// we have a user
     console.log("you send a public messages");
      Messages.insert(message);
    }else{
    	console.log("You are not logged");
    }
  },
  sendChatMessage:function(message){
  if (this.userId){
    console.log("you send a private message");
    Chat.insert(message);
  }else{
    console.log("You are not logged");
   }
  }
});  