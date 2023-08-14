/**
 * Divides an array into multiple chunks, attempting to evenly distribute the elements.
 *
 * @param array - The array of numbers to be divided into chunks.
 * @param n - The number of chunks to create.
 * @returns An array containing the divided chunks.
 */
const chunkify = (array: number[], n: number): number[][] => {
    const chunkSize = Math.ceil(array.length / n);
    let chunks: number[][] = [];
    for (let i = n; i > 0; i--) {
        chunks.push(array.splice(0, chunkSize));
    }
    return chunks;
}

export default chunkify;
