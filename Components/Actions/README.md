# Actions

*Actions* are the starting points in the Flux architecture. They are the only means to deliver new data into the system.

An *action* consists of 

* **name**: which is just a string (also a verb) that represents an application functionality. 
* **payload**: which is the data delivered to the system as part of the action.

**Deriving actions**

The best way to derive actions for an application is to write down the list of the application functionalities and 
deriving an action from each entry.

