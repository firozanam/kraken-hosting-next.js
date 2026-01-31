export default function ClientAreaPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-x-hidden">
      <main className="relative z-30 isolate transform-gpu [transform:translate3d(0,0,0)] [backface-visibility:hidden] pt-px clear-both flex w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
          Hello World
        </h1>
      </main>
    </div>
  );
}
