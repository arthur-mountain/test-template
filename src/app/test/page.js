"use client";
import Button from '@mui/material/Button';
// import Image from 'next/image';
// import styles from "./test.module.scss";

export default function TestPage() {
  return (
    <main className="flex">
      test
      <div>
        <Button variant="text">Text</Button>
      </div>
      <div>
        <Button variant="contained">Contained</Button>
      </div>
      <div>
        <Button variant="outlined">Outlined</Button>
      </div>
    </main>
  )
}
