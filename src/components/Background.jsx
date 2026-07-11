function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-[180px] opacity-20 top-0 left-0 animate-pulse"></div>

      <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-[180px] opacity-20 bottom-0 right-0 animate-pulse"></div>

      <div className="absolute w-80 h-80 bg-cyan-500 rounded-full blur-[160px] opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

    </div>
  );
}

export default Background;