//*=================================
//* How Javascript works?
//*=================================

//https://jointjs.com/demos/abstract-syntax-tree

//! 1: Parsing Phase:
//* 1. Lexical analysis
//? Lexical analyzer, also known as a lexer, is the first step in the process of compiling a JavaScript program. It breaks the program down into tokens, which  are the basic building of the language.

//* 2. Syntax analysis
//? Takes the steam of tokesn from lexical analysis and checks them for correct syntax. If the syntax is correct, syntax analysis gererates a tree-like structure called a parse tree or abstract syntax tree (AST). The AST represents the hierarchical structure of the program.

//* 2. Compilation (JIT- Just-In-Time Compilation):
//? After the AST is created, the Javascript engine typically goes through a Compilationphase. In modern engines, like V8 in Chrome, SpiderMonkey in Firefox, or JavaScriptCore in Safari, this Compilation often involves a combination of two approaches:

//? Parse and Compile: The engine parses the code and Compiles it into an intermediate form, such as bytecode or machine code.

//? Just-In-Time Compilation(JIT): Some engines use JIT Compilation, where the intermediate code is complied just before execution. This allows the engine to optimize the code based on runtime information, improving performance.

//* 3. Execution:
//? Once the code is compiled, the Javascript engine execites it. During execution, the engine creates execution contexts, manages the scope chain, handles variable assignments, and calls functions.

//? The execution context consists of two phases: the creation phase (where variables and function are hoisted) and the execution phase (where the code is actually run).

//? The Javascript engine uses a call stack to keep track of the execution context. When a function is called, a new frame is added to the stack, and when the function completes, its frame is removed (LIFO - Last In, First Out).

//* More on inside execution phase

//! call Stack:
//? In order to manage  the execution contexts, the Javascript engine uses a call stack.
//? The call stack is a data structure that keeps track of the currently executing functions in a program. It operates on the Last In, First Out (LIFO) principle, meaning that the last function added to the stack is the first one to be executed and completed.

//! Heap Memory:
//? The heap memory is where dynamically allocated memory resides. This is where objects, closures, and other dynamically allocated data are stored. While the call stack manages the flow of execution and function contexts, the heap memory holds data that is referenced by these execution contexts.

//! Bonus We will see in PPT with animation
//* Here's a basic overview of how the call stacj works:

//? During the execution of a Javascript program,
