function reverse(list) {
    var reversedList = [];
    for (var i = (list.length - 1); i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
}
