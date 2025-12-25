import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Linux" } },
  { id: "2", position: { x: 200, y: 100 }, data: { label: "Networking" } }
];

const edges = [{ id: "e1-2", source: "1", target: "2" }];

export default function SkillTree() {
  return <div style={{ height: "80vh" }}><ReactFlow nodes={nodes} edges={edges} fitView /></div>;
}