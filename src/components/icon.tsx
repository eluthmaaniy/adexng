export function Icon({ name, className = '' }: { name: string; className?: string }) {
  return <i className={`${name} ${className}`} aria-hidden="true" />;
}
