interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

export { Container };
