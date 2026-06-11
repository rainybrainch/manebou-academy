interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export function Skeleton({ className = '', style }: Props) {
  return (
    <div
      className={`rounded-lg ${className}`}
      style={{
        background: 'linear-gradient(90deg, rgba(26,26,46,0.06) 25%, rgba(26,26,46,0.1) 50%, rgba(26,26,46,0.06) 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.4s infinite',
        ...style,
      }}
    />
  );
}

export function SkeletonStyle() {
  return (
    <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
  );
}
