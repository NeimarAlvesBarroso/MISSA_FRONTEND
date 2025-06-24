"use client";

import MidiaUploadPage from "@/components/MidiaUploadPage";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Page() {
  return <MidiaUploadPage baseUrl={`${BASE_URL}/uploads`} />;
}
