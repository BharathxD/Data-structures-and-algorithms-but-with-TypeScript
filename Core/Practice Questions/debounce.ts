type DebounceFunction = <T extends (...args: any[]) => any>(func: T, delay: number) => (...args: Parameters<T>) => Promise<ReturnType<T>>;

const DebounceIt: DebounceFunction = (func, delay) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) =>
        new Promise<ReturnType<typeof func>>((resolve) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                resolve(func(...args));
            }, delay);
        });
}

const printDebouncedName = DebounceIt((input: string) => { console.log(`Debounce: ${input}`) }, 300);

printDebouncedName('A');
printDebouncedName('B');
printDebouncedName('C');
