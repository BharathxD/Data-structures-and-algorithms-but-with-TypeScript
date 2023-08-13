const billion = 1e9;
const jobs: number[] = Array.from({ length: 100 }, () => billion);

const start = performance.now();

for (let job of jobs) {
    let count = 0;
    for (let i = 0; i < job; i++) {
        count++;
    }
}

const end = performance.now();

console.log(`Main Thread took: ${end - start}ms`)
// In my case it took: 59587.09349999949ms