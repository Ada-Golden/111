// features/rooms/RoomStatusForm.jsx
import { Formik, Field } from 'formik';
import { Button, MenuItem } from '@mui/material';
import { useUpdateRoomMutation } from './roomsApi';

const statusOptions = [
  { value: 'VACANT', label: '空闲' },
  { value: 'OCCUPIED', label: '已入住' },
  { value: 'UNDER_MAINTENANCE', label: '维护中' }
];

export default function RoomStatusForm({ room }) {
  const [updateRoom] = useUpdateRoomMutation();

  return (
    <Formik
      initialValues={{ status: room.status }}
      onSubmit={async (values) => {
        await updateRoom({ id: room.id, ...values });
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="status">
            {({ field }) => (
              <Select
                {...field}
                fullWidth
                variant="outlined"
              >
                {statusOptions.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            )}
          </Field>
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            更新状态
          </Button>
        </form>
      )}
    </Formik>
  );
}