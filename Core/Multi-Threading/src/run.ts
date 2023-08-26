import { Worker } from "worker_threads";
import chunkify from "./utils/chunkify";

/**
 * Run multiple jobs concurrently using worker threads.
 * @param jobs - An array of job numbers to process concurrently.
 * @param concurrentWorkers - The number of concurrent worker threads to use.
 */
const runConcurrentJobs = (jobs: number[], concurrentWorkers: number): void => {
    const start = performance.now();

    // Divide the jobs into chunks for concurrent processing.
    const chunks = chunkify(jobs, concurrentWorkers);

    // Create and launch worker threads for each chunk of jobs.
    chunks.forEach((chunk) => {
        const worker = new Worker('./dist/workers/worker.js');
        // Send the chunk of jobs to the worker thread.
        worker.postMessage(chunk);
    });

    const end = performance.now();
    console.log(`${concurrentWorkers} Workers took: ${end - start}ms`);
    process.exit(0);
}

export default runConcurrentJobs;
