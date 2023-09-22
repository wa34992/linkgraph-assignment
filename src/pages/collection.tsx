import { observer } from 'mobx-react'
import { useStore } from '@/stores/stores';
import { useEffect } from 'react'
import CardItem from '../components/CardItem';
import { Masonry } from '@mui/lab';
import { Box, Container } from '@mui/material';
import Header from '@/components/Header'
import style from '../styles/page.module.scss'
import styles from '@/styles/Card.module.scss'

// Collection page component
const Collection = () => {
  const { imageCollection: { loadImages, getCollectionImages }, } = useStore(null)

  useEffect(() => {
    loadImages('')
  }, [])

  const boxStyle = {
    width: "100%",
    height: '100%',
    padding: 10
  }

  return (
    <>
      <Header />
        <div className={styles.collectionCount}>
          <h4>Collection Count: {getCollectionImages.length}</h4>
        </div>
      <Box className={style.bodycontent}>
        <Container>
          <Masonry
            columns={{ lg: 3, md: 3, sm: 2, xs: 1 }}
            spacing={2}
            defaultSpacing={1}
            className='p-0'>
            {getCollectionImages?.map((item, index) => (
              <CardItem key={index} image={item} />
            ))}
          </Masonry>

        </Container>
      </Box>
    </>
  )
}
export default observer(Collection)