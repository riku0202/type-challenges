type MyAwaited<T> = T extends Promise<infer A> ? MyAwaited<A> : T
