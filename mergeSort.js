
function mergeSort(list) {
    if (list.length <= 1) {
        return list;
    }

    let listLeft = mergeSort(list.slice(0, (list.length / 2)));

    let listRight = mergeSort(list.slice(list.length / 2));

    let mergedList = []

    while (listLeft.length >= 1 && listRight.length >= 1) {
        if (listLeft[0] < listRight[0]) {
            mergedList.push(listLeft.shift(listLeft[0]));
        } else {
            mergedList.push(listRight.shift(listRight[0]));
        }
    }

    if (listLeft.length < 1) {
        mergedList = mergedList.concat(listRight);
    } else if (listRight.length < 1) {
        mergedList = mergedList.concat(listLeft);
    }

    return mergedList;
}

console.log(mergeSort([8, 5, 3, 4,49, 9, 4, 59, 594, 5, 23, 8, 9, 7]));
