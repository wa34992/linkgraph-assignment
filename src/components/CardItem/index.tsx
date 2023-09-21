import React from 'react';
import styles from '@/styles/Card.module.scss'
import TagsChips from '../Tags';
import { observer } from 'mobx-react'
import { useStore } from '@/stores/stores';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import { Image } from '../../stores/Collections'
import { handleOnDownloadFile } from '@/utils/base64';

interface CardProps {
  image: Image
}

const CardItem = ({ image }: CardProps) => {
  const {
    imageCollection: { loadImages, deleteImages, updateImage },
  } = useStore(null)

  const handleOnDeleteFile = () => {
    deleteImages(image.id)
    loadImages('')
  }

  const handleTagsChange = (value: string, id: number, tags: string[]) => {
    if (!tags.includes(value)) {
      const payload = {
        tags: [...tags, value]
      };
      updateImage(id, payload);
    } else {
      console.log(`Tag "${value}" already exists in the list.`);
    }
  }

  const handleCollectionChange = () => {
    const payload = {
      collection: image.collection ? false : true
    }
    updateImage(image.id, payload)
    loadImages('')
  }

  const handleSizeChange = (id: number, data: string) => {
    const payload = { size: data }
    updateImage(id, payload)
  }
  const checkClasses = () => {
    if (image.size == 'medium') {
      return styles.mediumSize
    } else if (image.size == 'large') {
      return styles.largeSize
    } else {
      return styles.smallSize
    }
  }

  return (
    <div className={`${styles.cardStyle} ${checkClasses()}`}>
      <img src={image.url} alt='image' />
      <div className={styles.cardoverlay}>
        <div className={styles.topright}>
          <select className={styles.selectStyle} onChange={(e) => handleSizeChange(image.id, e.target.value)}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <button className={`${styles.favoritebutton} ${image.collection ? styles.greenBg : styles.purpleBg}`} onClick={handleCollectionChange}><AddIcon /></button>
          <button className={`${styles.addbutton} ${styles.addbuttonMargin} `} onClick={() => handleOnDownloadFile(image?.url)}><DownloadIcon /></button>
          <button className={styles.addbutton} onClick={handleOnDeleteFile}><DeleteIcon /></button>
        </div>

        <div className={styles.bottomright}>
          <select className={styles.selectStyle} onChange={(e) => handleTagsChange(e.target.value, image.id, image.tags)}>
            <option value="food">food</option>
            <option value="shoping">shoping</option>
            <option value="nature">nature</option>
          </select>
        </div>
        <div className={styles.bottomleft}>
          <TagsChips tags={image.tags} />
        </div>
      </div>
    </div>
  );
};

export default observer(CardItem)