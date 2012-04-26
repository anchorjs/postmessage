define(['anchor/class',
        'anchor/events'],
function(clazz, events) {
  
  function send(data, origin, win) {
    if (!win) {
      var frame;
      for (var i = 0, len = window.frames.length; i < len; i++) {
        frame = window.frames[i];
        if (frame.location == origin) {
          win = frame;
          origin = frame.location.protocol + '//' + frame.location.host;
          break;
        }
      }
    }
    
    // TODO: If window is undefined, emit an error.
    // TODO: If postMessage is not available, emit an error.
    win.postMessage(data, origin);
  }
  
  function createListener(messageListener) {
    var listener = new Listener();
    if (messageListener) listener.on('message', messageListener);
    return listener;
  }
  
  
  function Listener() {
    events.EventEmitter.call(this);
  }
  clazz.inherits(Listener, events.EventEmitter);
  
  Listener.prototype.listen = function() {
    if (this._fn) return;
    
    var self = this;
    this._fn = function(e) {
      self.emit('message', e.data, e.origin, e.source);
    }
    window.addEventListener('message', this._fn);
  }
  
  Listener.prototype.close = function() {
    if (!this._fn) return;
    
    window.removeEventListener('message', this._fn);
    delete this._fn;
  }
  
  
  var exports = {}
  exports.send = send;
  exports.createListener = createListener;
  exports.Listener = Listener;
  
  return exports;
});
