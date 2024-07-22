import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Coefficiency</h1>
      <Link href="/dashboard">
        <a>Go to Dashboard</a>
      </Link>
    </div>
  );
}
