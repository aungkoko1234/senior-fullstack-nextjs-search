import { Card } from '@mui/material'
import { Header } from '../../lib/interfaces'
import CustomTable from '../CustomTableComponent/CustomTable'

interface DesktopTableViewProps {
  headers: Header[]
  data: Record<string, unknown>[]
  isLoading: boolean
}
export const DesktopTableViewComponent = ({
  isLoading = false,
  data,
  headers,
}: DesktopTableViewProps) => {
  return (
    <Card sx={{ display: { xs: 'none', md: 'flex' }, mt: 5, p: 2 }}>
      <CustomTable isLoading={isLoading} data={data} headers={headers} />
    </Card>
  )
}
