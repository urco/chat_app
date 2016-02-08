
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
 	  return user.profile.username;
 	},
   messages:function(){
      var chat = Chat.findOne({_id:Session.get("chatId")});
      return Chat.find();
    }, 

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
