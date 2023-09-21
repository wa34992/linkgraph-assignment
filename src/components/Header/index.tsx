import React from 'react';
import styles from '@/styles/Header.module.scss';
import { InputFileUpload } from '@/components/Button/UploadButton'
import { useStore } from '@/stores/stores';
import Link from 'next/link'
import Button from '@mui/material/Button';

const Header = () => {
  const {
    imageCollection: { loadImages }
  } = useStore(null)

  return (
    <header className={styles.header}>
      <input type="text" className={styles.searchinput} placeholder="Search..." onChange={e => loadImages(e.target.value)} />
      <div className={styles.fileUploadBtn}>
        <InputFileUpload />
        <Button variant="contained"><Link href="/collection">  Collection </Link></Button>
      </div>
    </header>
  );
};

export default Header;