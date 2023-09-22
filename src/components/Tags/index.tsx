import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import styles from '@/styles/Card.module.scss'
 
interface TagsChipsProps {
  tags: string[],
  onDeleteFun: (item: string, tags: string[]) => void;
}

const TagsChips = ({ tags, onDeleteFun }: TagsChipsProps)  => (
  <Stack direction="row" spacing={1}>
    {tags.slice(0, 3).map((item: string, index: number) => (
      <Chip key={index} label={item} variant='filled' className={styles.backgroundColor} onDelete={()=>onDeleteFun(item, tags)}/>
    ))}
  </Stack>
)

export default TagsChips
