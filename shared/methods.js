Meteor.methods({
  // adding new comments
  sendMessage:function(message){
    if (this.userId){// we have a user
      console.log("you send a public messages");
      Messages.insert(message);
    }
  }

  /*sendChatMessage:function(message){

  if (this.userId){
    
    var message = message;
    var chat = Chat.findOne({_id:Session.get("chatId")});
     console.log(chat._id);
     console.log(message);


    if (chat){// ok - we have a chat to use
      var msgs = chat.messages; // pull the messages property
      if (!msgs){// no messages yet, create a new array
        msgs = [];
      }
      // is a good idea to insert data straight from the form
      // (i.e. the user) into the database?? certainly not. 
      // push adds the message to the end of the array
      
      console.log("messages array created");
      
      msgs.push({text:message});
      // reset the form
      // put the messages array onto the chat object
      chat.messages = msgs;
      // update the chat object in the database.
      Chat.update(chat._id, chat);
      

    }
   
  }else{
    console.log("You are not logged");
   }
 }*/
});  



