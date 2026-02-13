interface AffiliateCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'minimal';
  className?: string;
}

export default function AffiliateCTA({
  title = "Trouvez votre van idéal",
  description = "Comparez les meilleures offres de location de van en Norvège et réservez en quelques clics.",
  buttonText = "Voir les offres",
  href = "#",
  variant = 'primary',
  className = '',
}: AffiliateCTAProps) {
  if (variant === 'minimal') {
    return (
      <div className={`bg-fjord-50 border border-fjord-100 rounded-xl p-6 ${className}`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h4 className="font-display font-semibold text-rock-900">{title}</h4>
            <p className="text-rock-600 text-sm mt-1">{description}</p>
          </div>
          <a
            href={href}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="btn-primary whitespace-nowrap"
          >
            {buttonText}
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'secondary') {
    return (
      <div className={`bg-gradient-to-br from-forest-600 to-forest-700 rounded-2xl p-8 text-white ${className}`}>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">{title}</h3>
          <p className="text-forest-100 mb-6 leading-relaxed">{description}</p>
          <a
            href={href}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-forest-700 font-semibold rounded-lg hover:bg-forest-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {buttonText}
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-fjord-600 to-fjord-700 rounded-2xl p-8 md:p-12 text-white ${className}`}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">{title}</h3>
        <p className="text-fjord-100 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">{description}</p>
        <a
          href={href}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-fjord-700 font-semibold rounded-lg hover:bg-fjord-50 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
        >
          {buttonText}
          <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <p className="text-fjord-200 text-sm mt-4">
          Lien partenaire - Nous percevons une commission sur les réservations
        </p>
      </div>
    </div>
  );
}
