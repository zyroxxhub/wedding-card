export default function GlassCard({ children }) {
  return (
    <div className="
      backdrop-blur-xl
      bg-white/10
      border
      border-white/20
      rounded-3xl
      shadow-2xl
      p-8
      hover:scale-105
      transition
      duration-500
    ">
      {children}
    </div>
  );
}