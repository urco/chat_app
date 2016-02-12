
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
  	},
  getUser:function(){
    var otherUserId = Session.get("otherUserId"
      );
    var user = Meteor.users.findOne({_id:otherUserId});
    return user.profile.username;
  }  
});


 Template.chat.helpers({

 	getUser:function(){
 		var otherUserId = Session.get("otherUserId");
 		var user = Meteor.users.findOne({_id:otherUserId});
 	  return user.profile.username;
 	},
   messages:function(){
    if(Meteor.userId()){
      var chat = Chat.findOne({_id:Session.get("chatId")});
      return chat.messages;
     } /*else {
      console.log("you must be logged");
        }*/
    },
    other_user:function(){
      return ""
    }/*,
   MyUser:function(userId){
    var myUser = Meteor.userId();
    return myUser.profile.username
   } */ 
  });


Template.available_user_list.helpers({
    users:function(){
      return Meteor.users.find();
    }
  });

 Template.available_user.helpers({
    getUserpic:function(userId){
      user = Meteor.users.findOne({_id:userId});
      console.log(user.profile.avatar);
      return user.profile.avatar;
    },
    getUsername:function(userId){
      user = Meteor.users.findOne({_id:userId});
      return user.profile.username;
    },
    isMyUser:function(userId){
      if (userId == Meteor.userId()){
        return true;
      }
      else {
        return false;
      }
    }
  })

  Template.insertChatMessage.events({
  // this event fires when the user sends a message on the chat page
  'submit .js-send-chat':function(event){
    // stop the form from triggering a page reload
    event.preventDefault();
    // see if we can find a chat object in the database
    // to which we'll add the message
    var chat = Chat.findOne({_id:Session.get("chatId")});
    if (chat){// ok - we have a chat to use
      var msgs = chat.messages; // pull the messages property
      if (!msgs){// no messages yet, create a new array
        msgs = [];
      }
      // is a good idea to insert data straight from the form
      // (i.e. the user) into the database?? certainly not. 
      // push adds the message to the end of the array
      console.log(chat._id);
      msgs.push({text: event.target.chat.value});
      // reset the form
      event.target.chat.value = "";
      // put the messages array onto the chat object
      chat.messages = msgs;
      // update the chat object in the database.
      Chat.update(chat._id, {
        $set: {messages: chat.messages}
      });
      //Chat.update(chat._id, chat);
  
    }
  }
 })


