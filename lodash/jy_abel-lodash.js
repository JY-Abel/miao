
var jy_abel = {

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
  

  // findIndex: function(array,[predicate = _.identity],[fromIndex = 0]) {
  //   var  result = {}
  //   var index = 0
  //   for (var i = 0; i < array.length; i++) {
  //     if (predicate != _.identity) {
  //       return -1
  //     } else if (predicate = _.identity) {
  //       array[i] = _.identity

  //       return  
  //     }
  //   }
  // },

  concat: function(array,values) {
    var result = array.slice()
    
    if (Array.isArray(values)) {
      for (var i = 0; i < values.length; i++) { 
        result.push(values[i])
      }
    } else {
      result.push(values)
    }
    return result
  },

  difference: function(array,values) {
    var result = []
    var ite = {}

    for (var i = 0; i < values.length; i++){
      ite[values[i]] = 1
    }

    for (var i = 0; i < array.length; i++) {
      if (!(array[i] in ite)) {
        result.push(array[i])
      }
    }
    return result 
  },

   
}
