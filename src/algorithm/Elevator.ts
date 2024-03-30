import { Direction } from "./Direction"

export class Elevator {
    elevatorId: number;
    currentFloor: number = 0;
    currentDirection: Direction = 0;
    destinationFloor: number = 0;
    floorsToStopAt: Set<number> = new Set<number>();

    constructor(elevatorId: number) {
        this.elevatorId = elevatorId;
    }

    step() {
        this.currentFloor += this.currentDirection;

        this.tryOpenDoor(this.currentFloor);

        if (this.currentFloor == this.destinationFloor) {
            if (this.floorsToStopAt.size != 0) {
                console.log("Someone lied about direction...:(");
                this.currentDirection *= -1;
                if (this.currentDirection == 1){
                    this.destinationFloor = Math.max(...this.floorsToStopAt)
                }
                else{
                    this.destinationFloor = Math.min(...this.floorsToStopAt)
                }
            }
            else {
                this.currentDirection = 0;
            }
        }
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
        }
    }
}