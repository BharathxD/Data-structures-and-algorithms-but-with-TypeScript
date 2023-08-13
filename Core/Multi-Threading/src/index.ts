import runConcurrentJobs from "./run";

const billion = 1e9;
const jobs: number[] = Array.from({ length: 100 }, () => billion);

runConcurrentJobs(jobs, 8);
