import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import styles from '@/styles/Card.module.scss'
 
interface TagsChipsProps {
  tags: string[]
}

const TagsChips = ({ tags }: TagsChipsProps)  => (
  <Stack direction="row" spacing={1}>
    {tags.slice(0, 3).map((item: string, index: number) => (
      <Chip key={index} label={item} variant='filled' className={styles.backgroundColor} />
    ))}
  </Stack>
)

export default TagsChips
