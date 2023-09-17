interface MainContainerProps {
  children: React.ReactNode;
}

function MainContainer({ children }: MainContainerProps) {
  return (
    <div className='max-w-6xl mx-auto px-4 md:px-10 lg:px-20'>{children}</div>
  );
}

export default MainContainer;
