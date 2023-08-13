const chunkify = (array: number[], n: number) => {
    let chunks = [];
    for (let i = n; i > 0; i--) {
        chunks.push(array.splice(0, Math.ceil(array.length / i)))
    }
    return chunks;
}

export default chunkify;