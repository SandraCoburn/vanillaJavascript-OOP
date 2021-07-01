# vanillaJavascript-OOP

Practice: Classes &amp; Object-oriented Programming(OOP). Build a shopping cart with vanilla Javascript

#### Programming Paradigms (Procedural vs Object Oriented vs Functional)

- `Procedural` - Write a sequencial series of execution steps/tasks. Top to bottom code execution.
- `Object-oriented` - Organize data and logic objects (properties + methods). Organize code in logical entities.
- `Functional` - Organize code in (pure) functions with clearly defined tasks. Pass data around via parameters.

#### Performance Optimization

Influenced by a lot of factors. CSS code, HTML code and javaScript code. Also influnced by server speed/config.

- Startup time: Bundle/Script Size: Delays initial paring/execution. Number of Http Roundtrips(because of non-bundle code, third-party library CDN's): Delays initial parsing/execution
  - -> How quicklly is a user able to interact with the page?
  - -> how long does it take to see something on the screen?
- Runtime performance: Optimize Code Execution, DOM Access. Avoid Memory Leaks
  - -> How smooth does the application run (are there any freezes or lag)?
  - -> How smooth do animations play, is there any "visual lag"?
  - -> Are there any memory leaks, is the page getting slower over time?

##### Measuring & Auditing

- Check roundtrips + script size and set script bundle size budgets
- Measure performance with devtools
  - `performance.now()` to take a time snapshot to know how long an operation takes
  - `Browser DevTools` - to detect unnecessary code executions, http requests and measure execution time + memory leaks
  - `jsperf.com` Compare alternative code snippets and measure performance
  - `webpagetest.com` Test your entire (live) web page to detect optimization potential
- Explore best practices, patterns and benchmarks

### Prototypes & "Method Types"

- Method Shorthand -> assigned to Person's prototype and hence shared accross all instances (NOT recreated per instance)

```
class Person {
  greet(){
    console.log("Hello")
  }
}
```

- Property Functon -> Assigned to individual instances and hence recreated per object. this refers to "what called the method".

```
class Person {
  greet = function(){...}
  constructor({
    this.greet2 = function(){...}
  })
}
- Property Arrow Function -> Assigned to individual instances and hence recreated per object. this always refers to instance.
```

class Person {
greet = ()=>{...}
constructor(){
this.greet2 = () => {...}
}
}

### Constructor Functions vs Classes

- Constructor Functions:
  - Blueprint for Objects
  - Properties & Methods
  - Can be called with new
  - All properties and methods are enumerable
  - Not in strict mode by default
- Classes:
  - Blueprint for Objects
  - Properties and Methods
  - Must be called with new
  - All properties and methods are not enumerables
  - Always in strict mode
