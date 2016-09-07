# Dispatcher

In the Flux architecture, a dispatcher acts as a central hub responsible for delivering *actions* to the *stores*. 
It functions similar to a message broker in a system like RabbitMQ. 

A Flux application has ONLY ONE dispatcher.

**Key responsibilities**

* **Allows callback registration**: The dispatcher allows stores to register their callback functions.
* **Arbitrates data dependencies**: The dispatcher allows stores to specify their dependencies (i.e. other stores that they depend on) and it is the dispatchers responsibility to ensure that the data dependencies between stores are handled properly.
* **Dispatches actions**: The dispatcher dispatches *actions* to *stores*. This is how *actions* could deliver data payloads to the *stores*.

