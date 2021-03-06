var InputHandler =  {
    'Keys': {
      'BACKSPACE': 8,
      'COMMA': 188,
      'DELETE': 46,
      'DOWN': 40,
      'END': 35,
      'ENTER': 13,
      'ESCAPE': 27,
      'HOME': 36,
      'LEFT': 37,
      'NUMPAD_ADD': 107,
      'NUMPAD_DECIMAL': 110,
      'NUMPAD_DIVIDE': 111,
      'NUMPAD_ENTER': 108,
      'NUMPAD_MULTIPLY': 106,
      'NUMPAD_SUBTRACT': 109,
      'PAGE_DOWN': 34,
      'PAGE_UP': 33,
      'PERIOD': 190,
      'RIGHT': 39,
      'SPACE': 32,
      'TAB': 9,
      'UP': 38
    },
    '_keysDown': {},
    'init': function() {
      window.addEventListener("keydown", this._onkeydown.bind(this));
      window.addEventListener('keyup', this._onkeyup.bind(this));
    },
    '_onkeydown': function(ev) {
      this._keysDown[ev.which] = true;
    },
    '_onkeyup': function(ev) {
      this._keysDown[ev.which] = false;
    },
    'keyDown': function(key) {
      
      return !!this._keysDown[key];
    }
  };
  InputHandler.init();

  export default InputHandler;
  //Source: https://davidthomasbernal.com/blog/2012/07/21/handling-input-in-a-js-game