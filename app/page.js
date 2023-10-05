'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      Dashboard Page
      <button onClick={() => router.push('/main/product')}>
        To product page
      </button>
    </main>
  );
}
