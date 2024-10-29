// src/components/DiagramPage.jsx
import React from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
} from "react-flow-renderer";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Start" },
    position: { x: 250, y: 5 },
  },
  { id: "2", data: { label: "Step 1" }, position: { x: 100, y: 100 } },
  { id: "3", data: { label: "Step 2" }, position: { x: 400, y: 100 } },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true, label: "Arrow" },
  { id: "e2-3", source: "2", target: "3", animated: true },
];

const DiagramPage = () => {
  const [nodes, setNodes] = React.useState(initialNodes);
  const [edges, setEdges] = React.useState(initialEdges);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  return (
    <div style={{ height: "100vh", background: "#FAFAFA" }}>
      <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect} fitView>
        <MiniMap />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default DiagramPage;
