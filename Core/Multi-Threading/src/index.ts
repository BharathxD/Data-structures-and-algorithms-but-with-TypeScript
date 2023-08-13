import runConcurrentJobs from "./run";

const oneBillion = 1e9;
/**
 * The following variable `jobs` contain, one hundered 1e9's
 * [
 *   1_000_000_000,
 *   1_000_000_000,
 *   1_000_000_000,
 *   ...
 * ]
 */
const jobs: number[] = Array.from({ length: 100 }, () => oneBillion);

runConcurrentJobs(jobs, 8);
