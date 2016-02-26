
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});

// helpers 

Template.user.helpers ({
	users: function(){
		return Meteor.users.find();  
	}
});

Template.messages.helpers({ 
  messages: function(){
  	  return Messages.find();
  	},
     getUserpic:function(userId){
      user = Meteor.users.findOne({_id:userId});
      if (user){
      console.log("avatar" + user.profile.avatar);
      return user.profile.avatar;
      }else {
      console.log("user not found");
    }
  }
});


 Template.chat.helpers({
  getUserPic:function(userId){
    user = Meteor.users.findOne({_id:userId});
    console.log(user.profile.avatar);
    return user.profile.avatar;
    console.log("route pic profile");

  },
  getUser:function(userId){
    user = Meteor.users.findOne({_id:userId});
    return user.profile.username;

  },
 	getOtherUser:function(){
 		var otherUserId = Session.get("otherUserId");
    var user = Meteor.users.findOne({_id:otherUserId});
    return user.profile.username;
 	 
 	},
  chat:function(){
    if(Meteor.userId()){
      var chat = Chat.findOne({_id:Session.get("chatId")});
      return chat;
     }
  },
   messages:function(){
    if(Meteor.userId()){
      var chat = Chat.findOne({_id:Session.get("chatId")});
      return chat.messages;
     }
    },
    other_user:function(){
      return ""
    }
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
      console.log("route pic profile");
    },
    getStatus:function(userId){
          user = Meteor.users.findOne({_id:userId});
          return user.status.online;
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
    if(Meteor.userId()){

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
        msgs.push({text: event.target.chat.value,user:Meteor.userId(),createdAt: new Date()});
        // reset the form
        event.target.chat.value = "";
        // put the messages array onto the chat object
        chat.messages = msgs;
        // update the chat object in the database.
        Chat.update(chat._id, {
          $set: {messages: chat.messages, user:Meteor.userId(), createdAt: new Date()}}); 
      //Chat.update(chat._id, chat);
      }
   }
   else {
        var $toastContent = $('<span class="toast-login">you need login</span>');
        Materialize.toast($toastContent , 3000);
        console.log("you must login");
    }
  }
 })


