
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

  fill: function(array,value,[start = 0], [end = array.length]) {
    var newAry = [] // 新的数组
    newAry = array.slice() // 复制数组
    for (var i = start; i < end; i++) { // 遍历数组
      newAry.shift()
    }
    return newAry
  },

  drop: function(array, n = 1) {
     var result = []
     result = array.slice()
     for (var i = 1; i <= n; i++) {
      result.shift()
     }
     return result
  },

}
