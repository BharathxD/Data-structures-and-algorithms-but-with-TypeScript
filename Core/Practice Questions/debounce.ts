type DebounceFunction = <T extends (...args: any[]) => any>(func: T, delay: number) => (...args: Parameters<T>) => Promise<ReturnType<T>>;

const debounce: DebounceFunction = (func, delay) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => new Promise<ReturnType<typeof func>>((resolve) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => resolve(func(...args)), delay)
    })
}

const debouncedFunction = debounce((input: string) => console.log(`debounce: ${input}`), 300);

debouncedFunction('A');
debouncedFunction('B');
debouncedFunction('C');
