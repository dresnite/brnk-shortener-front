interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`container mx-auto text-xs text-lightGrayishBlue ${className}`}
    >
      {children}
    </div>
  );
}
