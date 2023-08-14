import { parentPort } from "worker_threads";

/**
 * Listens for messages from the parent thread and processes each job.
 * 
 * @param jobs - An array of jobs to be processed.
 */
parentPort.on('message', (jobs: number[]) => {
    for (let job of jobs) {
        let count = 0;
        for (let i = 0; i < job; i++) {
            count++;
        }
    }
    // Signal that the processing is complete and exit the worker thread.
    process.exit(0);
});
