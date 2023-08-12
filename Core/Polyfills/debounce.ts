type Debounce = <T extends (...args: any[]) => any>(func: T, delay: number) => (...args: Parameters<T>) => void;

const debounce: Debounce = (cb, delay) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => cb(...args), delay);
    }
}

const debouncedFunction = debounce((input: string) => input, 300);

debouncedFunction('A');
debouncedFunction('B');
debouncedFunction('C');
