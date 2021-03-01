import React from 'react';

interface ComponentProps {
  children: React.ReactNode
}

function PopupContainer(props: ComponentProps) {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div className={`absolute z-10 left-0 top-0 right-0 bottom-0 bg-black transition duration-150 ${loaded ? 'opacity-50' : 'opacity-0'}`}></div>
      <div className={`absolute z-20 left-0 top-18 right-0 bottom-0 bg-white md:w-4/5 md:top-20 md:right-auto md:rounded-tr-2xl md:rounded-br-2xl lg:left-16 lg:top-0 lg:w-160 lg:pl-4 transition duration-150 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        { props.children }
      </div>
    </>
  )
}

export default PopupContainer;
