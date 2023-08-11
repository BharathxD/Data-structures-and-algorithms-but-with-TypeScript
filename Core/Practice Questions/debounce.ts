type DebounceFunction = (func: (...args: any[]) => void, delay: number) => (...args: any[]) => void;

const DebounceIt: DebounceFunction = (func, delay) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    }
}

const printDebouncedName = DebounceIt((input: string) => { console.log(`Debounce: ${input}`) }, 300);

printDebouncedName('A');
printDebouncedName('B');
printDebouncedName('C');
