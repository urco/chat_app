
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
 			label:false
 		}
 	},
 	user1Id: {
 		type: String,
 		optional:true,
 		autoform: { 
 			omit:true,
 			label:false
 		}
 	  },
 	  user2Id: {
 		type: String,
 		optional:true,
 		autoform: { 
 			omit:true,
 			label:false
 		}
 	}
 }));

*/
 Messages.attachSchema(new SimpleSchema ({
 	text: {
 		type: String,
 		label:"message"
 	},
 	user: {
 		type: String,
 		autoform: { 
 			omit:true,
 			label:false
 		},
 		autoValue: function() {
 			if (this.isInsert){
 				return Meteor.userId();
 			}
 		}	
 	},
 	createdAt: {
 		type: Date,
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
 		autoform: { 
 			omit:true,
 		},
 		autoValue: function() {
 			if (this.isInsert){
 				return Meteor.user().username;
			}
 		}
 	}

 }));


