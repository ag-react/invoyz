import { useContext } from 'react';

import { storeContext } from '../contexts/store-context';

const useStores = () => {
  const _store = useContext(storeContext);

  if (!_store) {
    throw new Error('You have forgotten to use StoreProvider.');
  }
  return _store;
};

export default useStores;
