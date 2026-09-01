import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import GraphNode from './graph-node';
import FloatingEdge, { EdgeWeightContext } from './floating-edge';
import { Key } from './kbd';

// Renders the editable graph for a useGraphEditor() instance: the React Flow
// canvas, a context-sensitive command bar + status overlay, and (for weighted
// editors) the EdgeWeightContext provider that enables inline weight editing.

const nodeTypes = { graphNode: GraphNode };
const edgeTypes = { floating: FloatingEdge };

// Build the command bar: a label + a list of {keys?, text} actions, chosen by
// the current mode and what (if anything) is selected.
function buildHint(editor) {
    const { mode, directed, weighted } = editor;
    if (mode === 'add-node') return { label: '添加节点', actions: [{ text: '点击空白处放置节点' }, { keys: ['Esc'], text: '退出' }] };
    if (mode === 'add-edge') return { label: '添加边', actions: [{ text: '依次点击节点来连线' }, { keys: ['Esc'], text: '退出' }] };
    if (mode === 'delete') return { label: '删除', actions: [{ text: '点击节点或边以删除' }, { keys: ['Esc'], text: '退出' }] };

    const selNode = editor.nodes.find((n) => n.selected);
    const selEdge = editor.edges.find((e) => e.selected);
    if (selNode) {
        return {
            label: '节点',
            actions: [
                { keys: ['S'], text: '标记起点' },
                { keys: ['F'], text: '标记终点' },
                { keys: ['Del'], text: '删除' },
                { keys: ['Esc'], text: '取消' },
            ],
        };
    }
    if (selEdge) {
        return {
            label: '边',
            actions: [
                ...(directed ? [{ keys: ['X'], text: '反转' }] : []),
                { keys: ['Del'], text: '删除' },
                { keys: ['Esc'], text: '取消' },
            ],
        };
    }
    return {
        label: '选择',
        actions: [
            { keys: ['N'], text: '添加节点' },
            { keys: ['E'], text: '添加边' },
            { keys: ['D'], text: '删除' },
            ...(weighted ? [{ text: '· 点击权重可编辑' }] : []),
        ],
    };
}

export default function GraphCanvas({ editor }) {
    const hint = buildHint(editor);

    return (
        <div className="relative flex-1">
            <div className="absolute top-3 left-3 z-10 flex flex-col items-start gap-2">
                <div className="flex items-center gap-2 rounded-md bg-white/95 px-3 py-1.5 text-xs text-gray-700 shadow">
                    <span className="font-semibold text-gray-800">{hint.label}</span>
                    {hint.actions.map((a, i) => (
                        <span key={i} className="flex items-center gap-1">
                            {a.keys && a.keys.map((k) => <Key key={k}>{k}</Key>)}
                            {a.text && <span className="text-gray-600">{a.text}</span>}
                        </span>
                    ))}
                </div>
                {editor.status && (
                    <div className="rounded-md bg-slate-800 px-3 py-1.5 text-xs font-semibold text-white shadow">
                        {editor.status}
                    </div>
                )}
            </div>
            <EdgeWeightContext.Provider value={editor.weighted ? editor.setWeight : null}>
                <ReactFlow
                    nodes={editor.nodes}
                    edges={editor.edges}
                    onNodesChange={editor.onNodesChange}
                    onEdgesChange={editor.onEdgesChange}
                    onPaneClick={editor.onPaneClick}
                    onNodeClick={editor.onNodeClick}
                    onEdgeClick={editor.onEdgeClick}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    nodesConnectable={false}
                    deleteKeyCode={null}
                    fitView
                >
                    <Background />
                    <Controls />
                </ReactFlow>
            </EdgeWeightContext.Provider>
        </div>
    );
}
