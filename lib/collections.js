
 Messages = new Mongo.Collection("messages");
 Chat = new Mongo.Collection("chat");
 
Chat.allow({
	insert: function(user1Id,user2Id){
		if (Meteor.userId()) {
			return true;
		}else {
			console.log("insert failed. You must login");
			return false;
		}
	},
	update:function(chatId, chat) {
		return true;
	}
});


//Schema for Messages collection

 Messages.attachSchema(new SimpleSchema ({
 	text: {
 		type: String,
 		label:"message",
 		optional:true
 	},
 	user: {
 		type: String,
 		label:"user",
 		autoform: { 
 			omit:true,
 		},
 		autoValue: function() {
 			if (this.isInsert){
 				return Meteor.userId();
 			}
 		}	
 	},
 	createdAt: {
 		type: Date,
 		label:"date",
 		autoform: { 
 			omit:true,
 		},
 		autoValue: function() {
 			if (this.isInsert){
 				return new Date();
			}
 		}
 	},
 	username: {
 		type: String,
 		label:"username",
 		autoform: { 
 			omit:true,
 		},
 		autoValue: function() {
 			if (Meteor.user()){
	 			if (this.isInsert){
	 				return Meteor.user().profile.username;
				}
			}else {
				var $toastContent = $('<span class="toast-login">you need login</span>');
				Materialize.toast($toastContent , 3000);
				console.log("you are not logued")
			}	
 		}
 	}

 }));


