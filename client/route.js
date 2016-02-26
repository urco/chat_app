//layout general messages

Router.route('/', function () {
  this.layout('home');

   this.render('navigation', {
    to:"navigation"
  });

   this.render('messages', {
   		to:"messages"
   });

});


//layout chat peer to peer

Router.route('/chat/:user', function () {
	this.layout('chatting');
    // the user they want to chat to has id equal to 
    // the id sent in after /chat/... 

    var otherUserId = this.params.user;
    Session.set("otherUserId",otherUserId);
    // find a chat that has two users that match current user id
    // and the requested user id
    
    var filter = {$or:[
                {user1Id:Meteor.userId(), user2Id:otherUserId}, 
                {user2Id:Meteor.userId(), user1Id:otherUserId}
                ]};
                
    var chat = Chat.findOne(filter);
    
if(Meteor.userId()) {
  
  console.log("you are logued");
   if (!chat){// no chat matching the filter - need to insert a new one
        chatId = Chat.insert({user1Id:Meteor.userId(), user2Id:otherUserId});
    }
   else {// there is a chat going already - use that. 
      chatId = chat._id;
      console.log("This is the chat session: " + chatId);
    }
   if (chatId){// looking good, save the id to the session
      Session.set("chatId",chatId);
    }
else {
  console.log("you must logued to send private messages");
  }
}
    this.render('navigation',{
    	to:"navigation"
    });

    this.render('chat', {
    	to:"chat"
    }); 
  });
  