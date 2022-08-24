import { Box } from '@mui/system'
import {
  PhotoCard,
  PhotoCardProps,
} from '../PhotoCardComponent/PhotoCardComponent'

interface MobileListViewProps {
  data: PhotoCardProps[]
  isLoading?: boolean
}
export const MobileListViewComponent = ({
  isLoading = false,
  data,
}: MobileListViewProps) => {
  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        mt: 5,
        width: '100%',
        flexDirection: 'column',
        bgcolor: 'background.paper',
        // sx={{  }}
      }}
    >
      {!isLoading
        ? data.map(({ title, id, imageUrl }) => (
            <PhotoCard key={id} title={title} id={id} imageUrl={imageUrl} />
          ))
        : Array(4)
            .fill(0)
            .map((item, index) => (
              <PhotoCard
                key={index}
                title={''}
                id={''}
                imageUrl={''}
                isLoading={true}
              />
            ))}
    </Box>
  )
}
