
 Messages = new Mongo.Collection("messages");
 Chat = new Mongo.Collection("chat");
 
Chat.allow({
	insert: function(user1Id,user2Id){
		return true;
	},
	update:function(chatId, chat) {
		return true;
	},
});

/*
Chat.attachSchema(new SimpleSchema ({
 	
 	text: {
 		type: String,
 		optional:true,
 		autoform: { 
 			omit:false,
 			label:"text"
 		}
 	},
 	user1Id: {
		type: String,
 		optional:true,
 		autoform: { 
 			omit:false,
 			label:"user1Id"
 		}
 	},
 	user2Id: {
		type: String,
 		optional:true,
 		label:"user2Id",
 		autoform: { 
 			omit:false,
 			label:false
 		}
 	},
 	user: {
		type: String,
 		//optional:true,
 		autoform: { 
 			omit:false,
 			label:false
 		},
 		autoValue: function() {
 			if (Meteor.user()){
	 			if (this.isInsert){
	 				console.log(Meteor.user().profile.username);
	 				return Meteor.user().profile.username;
				}
			}else {
				var $toastContent = $('<span class="toast-login">you need login</span>');
				Materialize.toast($toastContent , 3000, 'rounded');
				console.log("you are not logued")
			}	
 		}
 	},
 	createdAt: {
 		type: Date,
 		label:"date",
 		optional:true,
 		autoform: { 
 			omit:true,
 		},
 		autoValue: function() {
 			if (this.isInsert){
 				return new Date();
			}
 		}
 	}

 }));*/

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
				Materialize.toast($toastContent , 3000, 'rounded');
				console.log("you are not logued")
			}	
 		}
 	}

 }));


