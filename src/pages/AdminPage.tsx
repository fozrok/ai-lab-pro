import React from 'react';
import AdminToolList from '../components/admin/AdminToolList';
import { useTools } from '../utils/hooks/useTools';

export default function AdminPage() {
  const { tools, updateTool, deleteTool, addTool } = useTools();

  return (
    <div className="max-w-7xl mx-auto">
      <AdminToolList
        tools={tools}
        onUpdateTool={updateTool}
        onDeleteTool={deleteTool}
        onAddTool={addTool}
      />
    </div>
  );
}