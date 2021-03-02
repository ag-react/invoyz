import React from 'react';

interface ComponentProps {
  children: React.ReactNode
}

function DialogContainer(props: ComponentProps) {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div className={`fixed z-9999 left-0 top-0 right-0 bottom-0 bg-black transition duration-150 ${loaded ? 'opacity-50' : 'opacity-0'}`}></div>
      <div className={`fixed z-9999 left-0 top-0 right-0 bottom-0 transition duration-150 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-full h-full flex items-center justify-center">
          { props.children }
        </div>
      </div>
    </>
  )
}

export default DialogContainer;
