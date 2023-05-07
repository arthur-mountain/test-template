'use client';
// import { useEffect, useState } from 'react';
// import { useRouter,useSearchParams } from "next/navigation";

export default function TestIdPage({ params }) {
  // const router = useRouter();
  // const handleFunc = async (e) => {}

  return (
    <div>
      test id: {params.id}
    </div>
  )
}