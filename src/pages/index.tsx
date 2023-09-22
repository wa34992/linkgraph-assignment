import { observer } from 'mobx-react'
import { useStore } from '@/stores/stores';
import { useEffect } from 'react'
import CardItem from '@/components/CardItem';
import { Masonry } from '@mui/lab';
import { Box, Container } from '@mui/material';
import Header from '@/components/Header'
import style from '../styles/page.module.scss'
import { Image } from '../stores/Collections'
// main Page
const Home = () => {
  const {
    imageCollection: { loadImages, getImages },
  } = useStore(null)

  useEffect(() => {
    loadImages('')
  }, [])

  return (
    <>
      <Header />
      <Box className={style.bodycontent}>
        <Container>
          <Masonry
            columns={{ lg: 3, md: 3, sm: 2, xs: 1 }}
            spacing={2}
            defaultSpacing={1}
            className='p-0'
          >
            {getImages?.map((item) => (
              <CardItem key={item.id} image={item} />
            ))}
          </Masonry>
        </Container>
      </Box>
    </>
  )
}

export default observer(Home)