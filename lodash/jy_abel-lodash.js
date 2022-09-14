
var abel = {

  chunk: function(array, size = 1) {
    var res = []
    res = array.slice()
    for (var i = 1; i <= size; i++) {
      res.shift()
    }
    return res
  },
  
  compact: function(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        filter.push(array[i])
      }
    }
    return filter
  },

  fill: function() {},

}
