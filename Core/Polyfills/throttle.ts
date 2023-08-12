type ThrottleFunction = <T extends (...args: any[]) => any>(func: T, delay: number) => (...args: Parameters<T>) => Promise<ReturnType<T>>;

const throttle: ThrottleFunction = (func, delay) => {
    let flag: boolean = true;
    return (...args: any[]) => new Promise<ReturnType<typeof func>>((resolve) => {
        if (flag) {
            flag = false;
            resolve(func(...args));
            setTimeout(() => flag = true, delay);
        }
    })
}

const expensiveFunction = throttle((input: string) => console.log(input), 300);

// Executed
expensiveFunction('A');
// Throttled : time: 100ms
expensiveFunction('B');
// Throttled : time: 200ms
expensiveFunction('C');
// Executed: time: 300ms
// ...