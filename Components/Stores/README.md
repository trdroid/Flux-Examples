# Stores

Stores in a Flux application are where the application state is maintained. 
Stores are the only Flux component that can maintain AND transform the application state.
The state maintained by the other Flux components are just local to them.

**Benefits**

* As the application state is maintained and transformed only by stores and the logic that determines the state transformation is tightly encapsulated in stores, debugging state changes becomes easier. 



