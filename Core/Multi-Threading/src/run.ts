import { Worker } from "worker_threads";
import chunkify from "./utils/chunkify";

const runConcurrentJobs = (jobs: number[], concurrentWorkers: number) => {
    const start = performance.now();
    let completedWorkers = 0;
    const chunks = chunkify(jobs, concurrentWorkers);
    chunks.forEach((chunk, i) => {
        const worker = new Worker('./dist/workers/worker.js');
        worker.postMessage(chunk);
        worker.on('message', () => {
            console.log(`Worker ${i} completed`);
            completedWorkers++;
            if (completedWorkers === concurrentWorkers) {
                console.log(`${concurrentWorkers} workers took ${performance.now()} ms`)
                process.exit();
            }
        })
    })
    const end = performance.now();
    console.log(`${concurrentWorkers} Workers took: ${end - start}ms`)
}

export default runConcurrentJobs;
