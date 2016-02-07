
 Messages = new Mongo.Collection("messages");
 Chat = new Mongo.Collection("chat");
 

Chat.attachSchema(new SimpleSchema ({
 	text: {
 		type: String,
 		label:"message"
 	}/*,
 	user1Id: {
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
 	  user2Id: {
 		type: String,
 		autoform: { 
 			omit:true,
 			label:false
 		},
 		autoValue: function() {
 			if (this.isInsert){
 				return Session.get("otherUserId");
 			}
 		}
 	}*/
 }));


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


