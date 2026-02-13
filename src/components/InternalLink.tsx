import Link from 'next/link';

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function InternalLink({ href, children, className = '' }: InternalLinkProps) {
  return (
    <Link
      href={href}
      className={`text-fjord-600 hover:text-fjord-700 underline underline-offset-2 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
