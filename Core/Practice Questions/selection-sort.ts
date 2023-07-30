export function swap(i: number, j: number, arr: number[]) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export default function insertionSort(arr: Array<number>): Array<number> {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                swap(i, j, arr);
            }
        }
    }
    return arr
}
