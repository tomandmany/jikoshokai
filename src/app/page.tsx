import Contents from "./_components/Contents";
import Rocket from "./_components/Rocket";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Contents />
      <Rocket />
    </main>
  );
}
