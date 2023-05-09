"use client";
import Button from '@mui/material/Button';
import Image from 'next/image';
// import styles from "./test.module.scss";

export default function TestPage() {
  return (
    <main className="flex">
      test
      <div>
        <Image
          src="next.svg"
          width="150"
          height="150"
          alt="test"
          style={{ backgroundColor: '#fff' }}
        />
      </div>
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
