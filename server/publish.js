Meteor.publish('users', function(){
  return Meteor.users.find();  
});

Meteor.publish('messages', function(){
  return Messages.find();  
});

Meteor.publish('chat', function(){
  return Chat.find();  
});