import { CardMedia, Skeleton } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'

export interface PhotoCardProps {
  isLoading?: boolean
  title: string
  id: string
  imageUrl: string
}
export const PhotoCard = ({
  title,
  id,
  imageUrl,
  isLoading = false,
}: PhotoCardProps) => {
  return (
    <Card
      sx={{
        minWidth: 300,
        width: '100%',
        mb: 2,
        '&:last-child': { mb: 1 },
      }}
    >
      <CardContent>
        {isLoading ? (
          <Box>
            <Skeleton />
            <Skeleton width="80%" />
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography gutterBottom variant="h5" component="div">
              {id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </Box>
        )}

        {isLoading ? (
          <Skeleton
            sx={{ height: 190 }}
            animation="wave"
            variant="rectangular"
          />
        ) : (
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={imageUrl}
          />
        )}
      </CardContent>
    </Card>
  )
}
