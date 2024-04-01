# Elevator system manager

Web application for managing elevator system. The app supports the following functionalities:

- creating new simulation with custom number of elevators and floors
- order an elevator, choosing whether customer wants to go up or down
- selecting a floor customer wants to go for each elevator
- making a step of simulation (each step causes the elevators to move one floor in the appropriate direction or wait in case it has just opened to pick up or drop off customers)
- peek states of all elevators

An algorithm used for managing elevators:

When new pick up order is registered, the algorithm looks for the best elevator to handle the order. One of the following two scenarios may occur for each elevator:

1. The elevator is not being used at the moment - it can handle the order.
2. The elevator's destination direction is the same as the order direction - it can handle the order. If the elevator moves upwards, the algorithm checks if the order floor is greater or equal elevator's current floor. We don't want to make the elevator come back! Similarly, if the elevator moves downwards, the algorithm doesn't want to make it come back and checks if the order floor is lower or equal elevator's current floor.

Out of all available elevators (in terms presented above) the algorithm picks the one that is the closest one to the order floor.

If no elevators are available, the request is added to the list of unhandled orders. The algorithm will attempt to fulfill each request in the next simulation step.

After selecting the best elevator, the algorithm runs for a single elevator as follows:

1. Destination direction of the elevator is set to order direction (otherwise, if impossible, it could not be chosen to handle the order)
2. Order floor is added to the set of floors the elevator needs to stop at (to pick up or drop off customers, if there are no more floors to stop at, the elevator changes status to free). If new order floor is, respectively, higher or lower when going upwards or downwards, the destination floor also changes.

# Run application

To run the application you need to type following commands in your terminal:

- clone this repository to your local directory using:

    ```
    git clone https://github.com/mateuszlampert/Elevator-System.git
    cd .\Elevator-System\
    ```

- install neccessary dependiencies:

    ```
    npm install
    ```

- build and start static version of the app:

    ```
    npm run build
    npm run preview
    ```

- open the project in your browser at ```http://localhost:4173/```

- or use developer mode:

  ```
  npm run dev
  ```

- open the project in your browser at ```http://localhost:5173/```


# Notes

### Note 1
To keep track of actions performed by the algorithm, you can use panels on the website or check console logs for more detailed information.

### Note 2
Assuming that opening the elevator on a given floor takes time, too (assuming one step), the system allows time for potential new passengers to choose their destination floor.

### Note 3
In the event of selecting a floor that is inconsistent with the declared driving direction, the algorithm will handle the customer's request but will be harsh on the customer and execute it at the very end.


### Future features
- Choose random elevator from all of the elevators with same distance to the order floor (in order to avoid excessive use of specific elevators)
