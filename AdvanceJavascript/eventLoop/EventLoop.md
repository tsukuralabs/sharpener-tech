## EventLoop
- Enables the asynchronous programming by handling tasks efficiently. Since Javascript is single-threaded, it uses the event loop to manage the execution of multiple tasks without blocking the main thread.

## CallStack
- A LIFO data structure that executes code synchronously. When a function is called, it's pushed onto the stack, when it returns it popped off.

### What goes on the CallStack.
- Everytime a function is invoked, an execution context is created for that function is created pushed onto the call stack.
- This context explains:
1. **functions arguments:** The value passed to the function.
2. **Local Variables:** The variables declared within the function.
3. A reference to **this keyword:** The context in which the function is called.
4. **Return address:** The location in the code to return to after the function has finished executing.

## TaskQueue
- It holds the asynchronous callbacks coming from web apis or node.js apis.
- When the stack is empty, the event loop pulls one task from here & executes it.

### What goes inside the Task Queue
1. **Callbacks function form I/O operations:** This include network requests(like fetch, XMLHTTPRequest) or file system operations & database queries.
2. **DOM events:** Callbacks triggered by user interactions such as click, mouseover, or keydown events.
3. **Timer functions:** Callbacks from setTimeout & setInterval after the specified delayed has elapsed.
4. **Post message-events:** Messages sent b/w different browsing contexts (like frames or web workers) using window.postMessage.

## MicroTask Queue
- It holds a special class of asynchronous callbacks that have a higher priority than tasks in the regular task queue.
- The event loop processes all microtasks whenever the callstack becomes empty after a task has finished, and before it moves on to the next task in the task queue.

### What goes in the MicroTask Queue
- **Promise/Callbacks:** This includes the **.then(), .catch(), & .finally()** methods of Promises.
- **async/await:** The code after an **await keyword is handled as microtask**.
- **queueMicrotask():** This is a specific function u can use to explicitly schedule a microtask.
- **MutationObserver callbacks:** Callbacks from the MutationObserver API, which watches for changes the DOM, are also executed as microtasks.