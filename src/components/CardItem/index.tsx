// This component render image cards, coleection image cards and card delete.

import React from 'react';
import styles from '@/styles/Card.module.scss'
import TagsChips from '../Tags';
import { observer } from 'mobx-react'
import { useStore } from '@/stores/stores';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import { Image } from '../../stores/Collections'
import { handleOnDownloadFile } from '@/utils';
import Tooltip from '@mui/material/Tooltip';

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
    if (value){
      if (!tags.includes(value)) {
        const payload = {
          tags: [...tags, value]
        };
        updateImage(id, payload);
      } else {
        console.log(`Tag "${value}" already exists in the list.`);
      }
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

  const removeTag = (val: string, tags: string[]) => {
    let updatedTags = tags.filter(item => item !== val)
    const payload = {
      tags: updatedTags
    };
    updateImage(image.id, payload)
  }

  return (
    <div className={`${styles.cardStyle} ${checkClasses()}`}>
      <img src={image.url} alt='image' />
      <div className={styles.cardoverlay}>
        <div className={styles.topright}>
          <Tooltip title="Select card size">
            <select className={styles.selectStyle} onChange={(e) => handleSizeChange(image.id, e.target.value)} defaultValue={image.size}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </Tooltip>
          <Tooltip title="Add to collection"><button className={`${styles.favoritebutton} ${image.collection ? styles.greenBg : styles.purpleBg}`} onClick={handleCollectionChange}><AddIcon /></button></Tooltip>
          <Tooltip title="Download"><button className={`${styles.addbutton} ${styles.addbuttonMargin} `} onClick={() => handleOnDownloadFile(image?.url)}><DownloadIcon /></button></Tooltip>
          <Tooltip title="Delete image"><button className={styles.addbutton} onClick={handleOnDeleteFile}><DeleteIcon /></button></Tooltip>
        </div>

        <div className={styles.bottomright}>
          <select className={styles.selectStyle} onChange={(e) => handleTagsChange(e.target.value, image.id, image.tags)}>
            <option value="">Select tag</option>
            {!image.tags.includes("food") &&<option value="food">food</option>}
            {!image.tags.includes("shoping") && <option value="shoping">shoping</option>}
            {!image.tags.includes("nature") && <option value="nature">nature</option>}
          </select>
        </div>
        <div className={styles.bottomleft}>
          <TagsChips tags={image.tags} onDeleteFun={(val, tags) => removeTag(val, tags)}/>
        </div>
      </div>
    </div>
  );
};

export default observer(CardItem)