import Contents from "./_components/Contents";
import Rocket from "./_components/Rocket";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl min-h-[calc(80vh)] flex items-center">よろしくお願いします！</h1>
      <Contents />
      <Rocket />
    </main>
  );
}
