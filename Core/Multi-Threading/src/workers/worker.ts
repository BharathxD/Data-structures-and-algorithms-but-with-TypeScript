import { parentPort } from "worker_threads";

parentPort?.on('message', (jobs) => {
    for (let job of jobs) {
        let count = 0;
        for (let i = 0; i < job; i++) {
            count++;
        }
    }
    // Send data back to the main thread
    parentPort?.postMessage('done');
})
