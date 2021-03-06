var ChatServerActionCreators = require('../actions/ChatServerActionCreators');
var qwest                    = require('qwest');


module.exports = {
  createRoom: function(room) {
    qwest.post('/api/rooms', {
      room: room
    },{
      responseType: 'json'
    }).then(function(response){
      ChatServerActionCreators.createdRoom(response);
    }).catch(function(response){
      console.log('error', response);
      alert('error', response);
    });
  },
  createMessage: function(message) {
    qwest.post('/api/rooms/' + message.roomId + '/messages', {
      message: message
    },{
      responseType: 'json'
    }).then(function(response) {
      ChatServerActionCreators.createdMessage(response);
    }).catch(function(response) {
      console.log('error', response);
      alert('error', response);
    });
  },
  getRooms: function() {
    qwest.get('/api/rooms',{},{
      responseType: 'json'
    }).then(function(response){
      ChatServerActionCreators.fetchedRooms(response);
    }).catch(function(response){
      console.log('error', response);
      alert('error', response);
    });
  },
  getMessages: function() {
    qwest.get('/api/messages', {}, {
      responseType: 'json'
    }).then(function(response) {
      ChatServerActionCreators.fetchedMessages(response);
    }).catch(function(response) {
      console.log('error', response);
      alert('error', response);
    });
  },
  getUser: function() {
    qwest.get('/api/user', {}, {
      responseType: 'json'
    }).then(function(response) {
      ChatServerActionCreators.createdUser(response);
    }).catch(function(response) {
      console.log('error', response);
      alert('error', response);
    });
  },
  createUser: function(email) {
    qwest.post('/api/user', {
      user: {
        email: email
      }
    }, {
      responseType: 'json'
    }).then(function(response) {
      ChatServerActionCreators.createdUser(response);
    }).catch(function(response) {
      console.log('error', response);
      alert('error', response);
    });
  }
};
