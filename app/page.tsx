"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectToEntrada() {
  const router = useRouter();

  useEffect(() => {
    router.push("/entrada");
  }, [router]);

  return null;
}
