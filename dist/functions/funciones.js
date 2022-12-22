export const instanceOf = (value, fieldName) => fieldName in value;
export const getMaxId = (arr) => {
    let idx = arr.length;
    let maxId = arr[idx - 1].id;
    while (idx--) {
        if (arr[idx].id > maxId) {
            maxId = arr[idx].id;
        }
        else if (arr[idx].id === maxId) {
            maxId++;
        }
    }
    return maxId;
};
