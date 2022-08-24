import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Alert, Card, CardMedia, Container, CssBaseline } from '@mui/material'
import ResponsiveAppBar from '../components/AppBar/AppBar'
import { Box } from '@mui/system'
import SearchFilterForm from '../components/form/SearchInputForm'
import PaginationComponent from '../components/PaginationComponent/PaginationComponent'
import { MobileListViewComponent } from '../components/MobileListViewComponent/MobileListViewComponent'
import { useRouter } from 'next/router'
import { useGetPhotos } from '../services/photos'
import DialogComponent from '../components/DialogComponent/DialogComponent'
import { Header, Photo } from '../lib/interfaces'
import DesktopTableViewComponent from '../components/DesktopTableViewComponent/DesktopTableViewComponent'

export default function HomePage() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [isOpen, setOpenDialog] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined)
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  const handleActionClick = (data: unknown) => {
    const photo = data as Photo
    setOpenDialog(true)
    setImageUrl(photo.url)
  }
  const headers: Header[] = [
    {
      name: 'id',
      title: '#Id',
      align: 'left',
      type: 'text',
    },
    {
      name: 'title',
      title: '#Title',
      align: 'left',
      type: 'block',
    },
    {
      name: 'thumbnailUrl',
      title: '#Image',
      align: 'left',
      type: 'image',
    },
    {
      name: 'View',
      title: 'Action',
      align: 'left',
      type: 'action',
      action: handleActionClick,
    },
  ]
  const router = useRouter()
  const query = router.query

  const handlePaginationChange = (value: number) => {
    const qParams: { page?: string } = {}
    if (value) {
      qParams.page = value.toString()
    } else {
      delete query.page
    }
    const urlSearchParams = { ...query, ...qParams } as Record<string, string>
    void router.replace({
      pathname: location.pathname,
      search: new URLSearchParams(urlSearchParams).toString(),
    })
  }
  const {
    data: photos,
    error,
    isValidating,
  } = useGetPhotos({
    page: query.page as unknown as number,
    limit: 20,
    ...query,
  })
  return (
    <ThemeProvider
      theme={
        isDarkTheme
          ? createTheme({ palette: { mode: 'dark' } })
          : createTheme({ palette: { mode: 'light' } })
      }
    >
      <CssBaseline />
      <>
        <Head>
          <title>Photo Application</title>
          <meta
            name="description"
            content="Photo application created by next js"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ResponsiveAppBar
          title="Photo App"
          isDarkTheme={isDarkTheme}
          onChangeTheme={changeTheme}
        />
        <main className={styles.main}>
          <Container>
            {error && <Alert severity="error">{error}</Alert>}
            <Card>
              <Box
                sx={{
                  display: 'flex',
                  alignContent: 'center',
                  alignItems: 'center',
                  py: 3,
                  px: 2,
                }}
              >
                <SearchFilterForm
                  initialValues={{ keyword: '' }}
                  placeholder="Type your search Keyword here ..."
                />
              </Box>
            </Card>
            <DesktopTableViewComponent
              isLoading={isValidating}
              headers={headers}
              data={
                (photos?.data as unknown as Record<string, unknown>[]) || []
              }
            />
            <MobileListViewComponent
              isLoading={isValidating}
              data={
                photos?.data.map((item) => ({
                  imageUrl: item.url,
                  id: item.id.toString(),
                  title: item.title,
                })) || []
              }
            />
            <DialogComponent
              isOpen={isOpen}
              title={imageUrl || ''}
              onClose={() => {
                setOpenDialog(false)
              }}
            >
              <Card>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={imageUrl}
                />
              </Card>
            </DialogComponent>
          </Container>
        </main>

        <footer className={styles.footer}>
          {photos && photos.total === 1 ? (
            <div>Total : 1 result(s) is found</div>
          ) : (
            <PaginationComponent
              count={photos ? photos?.total / photos?.limit : 5}
              current={photos ? photos.currentPage : 1}
              size="medium"
              onChange={handlePaginationChange}
            />
          )}
        </footer>
      </>
    </ThemeProvider>
  )
}
