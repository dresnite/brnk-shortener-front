"use client";

import Container from "@/src/components/Container";
import Navbar from "../src/components/navbar/Navbar";
import ShortenerCopy from "../src/components/shortener/ShortenerCopy";
import LinksTable from "../src/components/tables/LinksTable";
import useFetchSession from '@/src/hooks/useFetchSession';
import { useEffect } from 'react';

export default function Home() {
  const fetchSession = useFetchSession()

  useEffect(() => {
    fetchSession()
  }, [])

  return (
    <Container>
      <Navbar />
      <ShortenerCopy />
      <LinksTable />
    </Container>
  );
}
