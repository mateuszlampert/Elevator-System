import { Elevator } from "./Elevator"
import { Order } from "./Order"

export class ElevatorSystem {
    floorsNumber: number;
    elevatorsNumber: number;
    elevators: Elevator[] = [];
    unhandledOrders: Set<Order> = new Set<Order>();

    constructor(floorsNumber: number, elevatorsNumber: number) {
        this.floorsNumber = floorsNumber;
        this.elevatorsNumber = elevatorsNumber;
        this.elevators = [...Array(elevatorsNumber)].map((_, i) => new Elevator(i));
    }

    // const elevators: Elevator[] = [...Array(5)].map((_, i) => new Elevator(i));

    status() {
        return this.elevators;
    }

    update(elevatorId: number, floorToGo: number) {
        this.elevators[elevatorId].addFloorToStopAt(floorToGo);
    }

    step() {
        this.retryOrders()
        this.elevators.forEach(elevator => elevator.step())
    }

    retryOrders() {
        this.unhandledOrders = new Set([...this.unhandledOrders].filter((order) => !this.pickup(order)))
    }

    pickup(order: Order): boolean {
        let elevatorToOrderId: number | null = null;
        let bestFloorsToPass: number;

        console.log(order);

        this.elevators.forEach(elevator => {
            if (elevator.currentDirection == 0) {
                if (elevatorToOrderId == null || Math.abs(order.orderFloor - elevator.currentFloor) < bestFloorsToPass) {
                    elevatorToOrderId = elevator.elevatorId;
                    bestFloorsToPass = Math.abs(order.orderFloor - elevator.currentFloor);
                }
            }
            else if (elevator.currentDirection == order.orderDirection) {
                if (order.orderDirection == 1) {
                    if (elevator.currentFloor <= order.orderFloor) {
                        if (elevatorToOrderId == null || Math.abs(order.orderFloor - elevator.currentFloor) < bestFloorsToPass) {
                            elevatorToOrderId = elevator.elevatorId;
                            bestFloorsToPass = Math.abs(order.orderFloor - elevator.currentFloor);
                        }
                    }
                }
                else if (order.orderDirection == -1) {
                    if (elevator.currentFloor >= order.orderFloor) {
                        if (elevatorToOrderId == null || Math.abs(order.orderFloor - elevator.currentFloor) < bestFloorsToPass) {
                            elevatorToOrderId = elevator.elevatorId;
                            bestFloorsToPass = Math.abs(order.orderFloor - elevator.currentFloor);
                        }
                    }
                }
            }
        });

        if (elevatorToOrderId == null) {
            console.log("All elevators are busy, waiting for appropriate time...");
            this.unhandledOrders.add({ orderFloor: order.orderFloor, orderDirection: order.orderDirection });
            return false;
        }
        else {
            console.log(`Elevator ${elevatorToOrderId} will arrive soon...`)
            this.update(elevatorToOrderId, order.orderFloor);
            return true;
        }
    }
}