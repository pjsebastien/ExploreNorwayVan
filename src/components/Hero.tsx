import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
}

export default function Hero({ title, subtitle, imageSrc, imageAlt, badge }: HeroProps) {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay amélioré */}
        <div className="absolute inset-0 bg-gradient-to-r from-rock-950/90 via-rock-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-rock-950/60 via-transparent to-rock-950/30" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fjord-500 via-forest-500 to-fjord-500 z-10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

      {/* Content */}
      <div className="container-custom relative z-10 py-16 lg:py-24">
        <div className="max-w-3xl">
          {/* Badge optionnel */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-forest-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">{badge}</span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight text-white drop-shadow-lg">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md">
            {subtitle}
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex items-center gap-4">
            <div className="w-16 h-1 bg-gradient-to-r from-fjord-400 to-forest-400 rounded-full" />
            <div className="w-3 h-3 bg-fjord-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
