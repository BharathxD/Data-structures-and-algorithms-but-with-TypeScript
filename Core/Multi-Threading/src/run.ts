import { Worker } from "worker_threads";
import chunkify from "./utils/chunkify";

const runConcurrentJobs = (jobs: number[], concurrentWorkers: number) => {
    const start = performance.now();
    const chunks = chunkify(jobs, concurrentWorkers);
    chunks.forEach((chunk, i) => {
        const worker = new Worker('./dist/workers/worker.js');
        worker.postMessage(chunk);
    });
    const end = performance.now();
    console.log(`${concurrentWorkers} Workers took: ${end - start}ms`);
    process.exit(0);
}

export default runConcurrentJobs;
