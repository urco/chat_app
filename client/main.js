
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});


Template.user.helpers ({
	users: function(){
		return Meteor.users.find();  
	}
});

Template.messages.helpers({ 
  messages: function(){
  	  return Messages.find();
  	}
});


 Template.chat.helpers({

 	getUser:function(){
 		var otherUserId = Session.get("otherUserId");
 		var user = Meteor.users.findOne({_id:otherUserId});
 	  return user.username;
 	},
   messages:function(){
      var chat = Chat.findOne({_id:Session.get("chatId")});
      return Chat.find();
    }, 

  });


