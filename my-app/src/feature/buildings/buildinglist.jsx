// features/buildings/BuildingList.jsx
import { DataGrid } from '@mui/x-data-grid';
import { useGetBuildingsQuery } from './buildingsApi';

const columns = [
  { field: 'name', headerName: '楼栋名称', flex: 1 },
  { field: 'address', headerName: '地址', flex: 2 },
  { field: 'floorCount', headerName: '楼层数', type: 'number' }
];

export default function BuildingList() {
  const { data: buildings, isLoading } = useGetBuildingsQuery();
  
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={buildings || []}
        columns={columns}
        loading={isLoading}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}