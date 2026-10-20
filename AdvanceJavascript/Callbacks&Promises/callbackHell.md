## Callback Hell or Callbacks vs Promises

### Problems with callbacks
- Flow of execution is very difficult to find
- The code is not readbale bcz we can't able to trace which callback called which callback.
- If we make any an even single mistake in any of the functions our entire flow got break.
- **Callback Hell**.

### Callback Hell is Resolved with the help of Promises
- Promises has 2 arguments
1. **resolve:** When promise is resolved successfully
2. **reject** When promise is rejected.