import { Elevator } from "../algorithm/Elevator";
import ElevatorPanel from "./ElevatorPanel";

export default function ElevatorPanelsGrid(params: { elevators: Elevator[] }) {
    return <>
        <div style={{ display: "flex", alignContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
            {params.elevators.map((elevator, id) => (
                <ElevatorPanel elevator={elevator} key={id} />
            ))}
        </div>
    </>
}