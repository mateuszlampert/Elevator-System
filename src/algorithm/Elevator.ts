import { Direction } from "./Direction"
import { Order } from "./Order";

export class Elevator {
    elevatorId: number;
    currentFloor: number = 0;
    currentDirection: Direction = 0; // current direction can differ from destionation direction if elevator need to pick up customer
    destinationFloor: number = 0;
    destinationDirection: Direction = 0;
    floorsToStopAt: Set<number> = new Set<number>();
    justOpened: boolean = false;

    constructor(elevatorId: number) {
        this.elevatorId = elevatorId;
    }

    step() {
        if (!this.justOpened) {
            this.currentFloor += this.currentDirection;

            this.tryOpenDoor(this.currentFloor);

            if (this.currentFloor == this.destinationFloor) {
                if (this.floorsToStopAt.size != 0) {
                    console.log("Someone lied about direction...:(");
                    this.currentDirection *= -1;
                    if (this.currentDirection == 1) {
                        this.destinationFloor = Math.max(...this.floorsToStopAt)
                    }
                    else {
                        this.destinationFloor = Math.min(...this.floorsToStopAt)
                    }
                }
                else {
                    this.currentDirection = 0;
                    this.destinationDirection = 0;
                }
            }
        }
        else {
            this.justOpened = false;
        }
    }

    handleOrder(order: Order){
        this.destinationDirection = order.orderDirection;
        this.addFloorToStopAt(order.orderFloor);
    }

    addFloorToStopAt(floor: number) {
        if (this.floorsToStopAt.size == 0 || this.currentDirection == 0) {
            this.currentDirection = this.currentFloor < floor ? 1 : (this.currentFloor > floor ? -1 : 0);
            this.destinationFloor = floor;
        }
        else if (this.currentDirection == 1) {
            if (floor > this.destinationFloor) {
                this.destinationFloor = floor;
            }
        }
        else if (this.currentDirection == -1) {
            if (floor < this.destinationFloor) {
                this.destinationFloor = floor;
            }
        }
        if (this.currentFloor != floor) {
            this.floorsToStopAt.add(floor);
        }
    }

    tryOpenDoor(floor: number) {
        if (this.floorsToStopAt.has(floor)) {
            this.floorsToStopAt.delete(floor);
            console.log(`Elevator ${this.elevatorId} opened at floor ${floor}`);
            this.justOpened = true;
        }
    }
}