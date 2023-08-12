export function swap(i: number, j: number, arr: number[]) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export default function insertionSort(arr: Array<number>): Array<number> {
    // Iterate over each elements in the given arr
    for (let i = 0; i < arr.length; i++) {
        // Now start from the index that we're on, and start iterating from that index to the end of the array
        for (let j = i; j < arr.length; j++) {
            // Check if the each element in the given array is equal to element that we're iterating
            if (arr[j] < arr[i]) swap(i, j, arr);
        }
    }
    return arr;
}
