//  [JS实现 最接近目标值的三数之和](https://blog.csdn.net/Gaozhengw/article/details/118296795)

function threeSumClosest(nums, target) {
  nums.sort((a, b) => {
    return a - b
  })
  var len = nums.length;
  if (len < 3) {
    return;
  }
  var min = +Infinity //无穷大
  var sum;
  for (let i = 0; i < len - 2; i++) {
    var n1 = nums[i]
    var Left = i + 1;
    var Right = len - 1
    while (Left < Right) {
      var n2 = nums[Left]
      var n3 = nums[Right]
      var res = n1 + n2 + n3 - target //差值
      if (min > Math.abs(res)) {
        min = Math.abs(res)
        sum = n1 + n2 + n3
      }
      if (res >= 0) {
        Right--
      } else {
        Left++
      }
    }
  }
  return sum
};