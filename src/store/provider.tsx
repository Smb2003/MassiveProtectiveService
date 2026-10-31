'use client';

import React, { useState, Suspense } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './index';

let globalStore: AppStore | null = null;

function getStore() {
  if (!globalStore) {
    globalStore = makeStore();
  }
  return globalStore;
}

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store] = useState(() => getStore());

  return (
    <Suspense fallback={null}>
      <Provider store={store}>{children}</Provider>
    </Suspense>
  );
}
