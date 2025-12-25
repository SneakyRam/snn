import React, { useCallback, useMemo } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';

const nodeTypes = {
  default: ({ data }) => (
    <div className="px-4 py-2 shadow-md rounded-md bg-gray-800 border border-gray-600 text-white">
      <div className="font-bold">{data.label}</div>
      {data.description && <div className="text-sm text-gray-300">{data.description}</div>}
    </div>
  ),
  attack: ({ data }) => (
    <div className="px-4 py-2 shadow-md rounded-md bg-red-900 border-2 border-red-500 text-white">
      <div className="font-bold text-red-300">⚠️ {data.label}</div>
      {data.description && <div className="text-sm text-gray-300">{data.description}</div>}
    </div>
  ),
  defense: ({ data }) => (
    <div className="px-4 py-2 shadow-md rounded-md bg-green-900 border-2 border-green-500 text-white">
      <div className="font-bold text-green-300">🛡️ {data.label}</div>
      {data.description && <div className="text-sm text-gray-300">{data.description}</div>}
    </div>
  ),
  data: ({ data }) => (
    <div className="px-4 py-2 shadow-md rounded-md bg-blue-900 border-2 border-blue-500 text-white">
      <div className="font-bold text-blue-300">📊 {data.label}</div>
      {data.description && <div className="text-sm text-gray-300">{data.description}</div>}
    </div>
  ),
};

export default function ReactFlowDiagram({ nodes: initialNodes, edges: initialEdges, height = "400px" }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ height }} className="w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="top-right"
        className="bg-gray-900"
      >
        <Controls className="bg-gray-800 border-gray-600" />
        <MiniMap
          className="bg-gray-800"
          nodeColor={(node) => {
            switch (node.type) {
              case 'attack': return '#dc2626';
              case 'defense': return '#16a34a';
              case 'data': return '#2563eb';
              default: return '#374151';
            }
          }}
        />
        <Background color="#4b5563" gap={16} />
      </ReactFlow>
    </div>
  );
}

// Predefined diagram templates
export const diagramTemplates = {
  // Data flow diagram
  dataFlow: (nodes, edges) => ({
    nodes: nodes.map((node, index) => ({
      id: `node-${index}`,
      type: node.type || 'default',
      position: node.position,
      data: { label: node.label, description: node.description },
    })),
    edges: edges.map((edge, index) => ({
      id: `edge-${index}`,
      source: edge.source,
      target: edge.target,
      label: edge.label,
      type: 'smoothstep',
      style: { stroke: '#60a5fa', strokeWidth: 2 },
      animated: edge.animated || false,
    })),
  }),

  // Attack flow diagram
  attackFlow: (nodes, edges) => ({
    nodes: nodes.map((node, index) => ({
      id: `node-${index}`,
      type: node.type || 'attack',
      position: node.position,
      data: { label: node.label, description: node.description },
    })),
    edges: edges.map((edge, index) => ({
      id: `edge-${index}`,
      source: edge.source,
      target: edge.target,
      label: edge.label,
      type: 'smoothstep',
      style: { stroke: '#ef4444', strokeWidth: 2 },
      animated: edge.animated || true,
    })),
  }),

  // Network diagram
  networkFlow: (nodes, edges) => ({
    nodes: nodes.map((node, index) => ({
      id: `node-${index}`,
      type: node.type || 'data',
      position: node.position,
      data: { label: node.label, description: node.description },
    })),
    edges: edges.map((edge, index) => ({
      id: `edge-${index}`,
      source: edge.source,
      target: edge.target,
      label: edge.label,
      type: 'smoothstep',
      style: { stroke: '#10b981', strokeWidth: 2 },
      animated: edge.animated || false,
    })),
  }),
};
