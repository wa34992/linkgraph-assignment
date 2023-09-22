// Mobx store configuration
import { useMemo } from 'react'
import { applySnapshot, getSnapshot, Instance, types } from 'mobx-state-tree'
import { initimageCollection, imageCollection } from './Collections'

const MainStore = types
  .model({
    imageCollection: imageCollection,
  })
  .actions(self => {
    let initialState = {}
    return {
      afterCreate: () => {
        initialState = getSnapshot(self)
      },
      reset: () => {
        applySnapshot(self, initialState)
      },
    }
  })

export type RootStoreType = Instance<typeof MainStore>

let store: RootStoreType

export function resetStore() {
  store.reset()
}

export function initializeStore(snapshot = null) {
  const _store =
    store ??
    MainStore.create({
      imageCollection: initimageCollection(),
    })
  if (snapshot) {
    applySnapshot(_store, snapshot)
  }
  if (typeof window === 'undefined') {
    return _store
  }

  if (!store) {
    store = _store
  }
  return _store
}

export function useStore(
  initialState: null | undefined
): Instance<typeof MainStore> {
  return useMemo(() => initializeStore(initialState), [initialState])
}