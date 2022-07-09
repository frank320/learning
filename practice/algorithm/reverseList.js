// 反转单向链表
// 需要将一个单向链表反转。思路很简单，使用三个变量分别表示当前节点和当前节点的前后节点，虽然这题很简单，但是却是 一道面试常考题。

// 思路是从头节点往后遍历，先获取下一个节点，然后将当前节点的 next 设置为前一个节点，然后再继续循环。

var reverseList = function (head) {
  // 判断下变量边界问题
  if (!head || !head.next) return head;
  // 初始设置为空，因为第一个节点反转后就是尾部，尾部节点指向 null
  let pre = null;
  let current = head;
  let next;
  // 判断当前节点是否为空
  // 不为空就先获取当前节点的下一节点
  // 然后把当前节点的 next 设为上一个节点
  // 然后把 current 设为下一个节点，pre 设为当前节点
  while (current) {
    next = current.next;

    current.next = pre;
    pre = current;
    current = next;
  }
  return pre;
};


var reverseList1 = function(head) {
  if(head == null || head.next == null){
      return head
  }else{
      var current = reverseList(head.next)
      head.next.next = head
      head.next = null
  }
  return current
};

const o = {
  next: {
    a: 1,
    next: {
      a: 2,
      next: {
        a: 3
      }
    }
  }
}


function _reverseList(head) {
  if (!head || !head.next) {
    return head;
  }

  let pre = null;
  let current = head;
  let next;

  while (current) {
    next = current.next;

    current.next = pre;
    pre = current;
    current = next;

  }
  return pre;
}
// console.log(reverseList(o))
console.log(_reverseList(o))