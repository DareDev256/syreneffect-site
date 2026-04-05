import Image from "next/image";

export function PhotoBackground() {
  return (
    <>
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {/* Photo 1 — top-right */}
        <div
          className="absolute -top-10 -right-10 md:-top-20 md:-right-32 w-[280px] h-[360px] md:w-[500px] md:h-[650px] opacity-[0.18] md:opacity-[0.15]"
          style={{ animation: "photo-drift-1 30s ease-in-out infinite" }}
        >
          <Image src="/photos/Syren5.jpeg" alt="" fill className="object-cover rounded-[30px] md:rounded-[40px]" sizes="(max-width: 768px) 280px, 500px" />
          <div className="absolute inset-0 rounded-[30px] md:rounded-[40px] bg-gradient-to-bl from-abyss/30 via-transparent to-abyss/50" />
        </div>

        {/* Photo 2 — bottom-left */}
        <div
          className="absolute -bottom-16 -left-8 md:-bottom-32 md:-left-24 w-[260px] h-[340px] md:w-[460px] md:h-[600px] opacity-[0.15] md:opacity-[0.12]"
          style={{ animation: "photo-drift-2 25s ease-in-out infinite" }}
        >
          <Image src="/photos/Syren6.jpeg" alt="" fill className="object-cover rounded-[30px] md:rounded-[40px]" sizes="(max-width: 768px) 260px, 460px" />
          <div className="absolute inset-0 rounded-[30px] md:rounded-[40px] bg-gradient-to-tr from-abyss/40 via-transparent to-abyss/30" />
        </div>

        {/* Photo 3 — mid-right */}
        <div
          className="hidden sm:block absolute top-[45%] -right-8 md:-right-16 w-[220px] h-[300px] md:w-[420px] md:h-[540px] opacity-[0.12] md:opacity-[0.10] rotate-6"
          style={{ animation: "photo-drift-3 35s ease-in-out infinite" }}
        >
          <Image src="/photos/Syren8.jpeg" alt="" fill className="object-cover rounded-[30px] md:rounded-[40px]" sizes="(max-width: 768px) 220px, 420px" />
          <div className="absolute inset-0 rounded-[30px] md:rounded-[40px] bg-gradient-to-l from-abyss/50 via-transparent to-abyss/20" />
        </div>

        {/* Photo 4 — upper-left */}
        <div
          className="absolute top-[30%] -left-12 md:top-[15%] md:-left-28 w-[240px] h-[320px] md:w-[400px] md:h-[520px] opacity-[0.14] md:opacity-[0.13] -rotate-3"
          style={{ animation: "photo-drift-1 28s ease-in-out infinite reverse" }}
        >
          <Image src="/photos/Syren1.jpeg" alt="" fill className="object-cover rounded-[30px] md:rounded-[40px]" sizes="(max-width: 768px) 240px, 400px" />
          <div className="absolute inset-0 rounded-[30px] md:rounded-[40px] bg-gradient-to-r from-abyss/40 via-transparent to-abyss/30" />
        </div>

        {/* Photo 5 — center bottom, large and subtle */}
        <div
          className="hidden md:block absolute bottom-[5%] left-[30%] w-[380px] h-[500px] opacity-[0.08] rotate-3"
          style={{ animation: "photo-drift-2 32s ease-in-out infinite reverse" }}
        >
          <Image src="/photos/Syren2.jpeg" alt="" fill className="object-cover rounded-[40px]" sizes="380px" />
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-abyss/50 via-transparent to-abyss/40" />
        </div>

        {/* Photo 6 — top-left accent, mobile visible */}
        <div
          className="absolute -top-16 left-[20%] md:left-[15%] w-[200px] h-[260px] md:w-[350px] md:h-[450px] opacity-[0.10] md:opacity-[0.08] rotate-12"
          style={{ animation: "photo-drift-3 26s ease-in-out infinite" }}
        >
          <Image src="/photos/Syren3.jpeg" alt="" fill className="object-cover rounded-[30px] md:rounded-[40px]" sizes="(max-width: 768px) 200px, 350px" />
          <div className="absolute inset-0 rounded-[30px] md:rounded-[40px] bg-gradient-to-b from-abyss/30 via-transparent to-abyss/50" />
        </div>

        {/* Photo 7 — bottom-right, mobile visible */}
        <div
          className="absolute bottom-[10%] -right-6 md:right-[5%] w-[220px] h-[290px] md:w-[360px] md:h-[470px] opacity-[0.12] md:opacity-[0.09] -rotate-6"
          style={{ animation: "photo-drift-1 33s ease-in-out infinite" }}
        >
          <Image src="/photos/Syren7.jpeg" alt="" fill className="object-cover rounded-[30px] md:rounded-[40px]" sizes="(max-width: 768px) 220px, 360px" />
          <div className="absolute inset-0 rounded-[30px] md:rounded-[40px] bg-gradient-to-tl from-abyss/40 via-transparent to-abyss/30" />
        </div>

        {/* Color glow overlays */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-glow/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-teal-glow/[0.03] rounded-full blur-[100px]" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes photo-drift-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -25px) rotate(2deg); }
          50% { transform: translate(-15px, 15px) rotate(-1deg); }
          75% { transform: translate(25px, 20px) rotate(1.5deg); }
        }
        @keyframes photo-drift-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-20px, -15px) rotate(-2deg); }
          66% { transform: translate(15px, 25px) rotate(1deg); }
        }
        @keyframes photo-drift-3 {
          0%, 100% { transform: translate(0, 0) rotate(6deg) scale(1); }
          50% { transform: translate(-25px, 20px) rotate(4deg) scale(1.04); }
        }
      `}} />
    </>
  );
}
