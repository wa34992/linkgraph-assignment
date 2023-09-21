import { flow, types } from 'mobx-state-tree'
import { toJS } from 'mobx'
import { loadImagesAPI, deleteImagesAPI, uploadNewImageAPI, imageUpdateAPI } from '@/pages/api/api'

export interface Image {
  id: number,
  url: string,
  size: string,
  collection: boolean,
  tags: string[]
}

const info = types.model({
  id: types.maybeNull(types.number),
  url: types.maybeNull(types.string),
  size: types.maybeNull(types.string),
  collection: types.maybeNull(types.boolean),
  tags: types.maybeNull(types.array(types.string)),
})

export const imageCollection = types
  .model({
    data: types.array(info),
    erorMessage: types.maybeNull(types.string),
    loading: types.optional(types.boolean, false),
  })
  .views(self => ({
    get getImages() {
      return toJS(self.data)
    },
    get getCollectionImages() {
      return toJS(self.data.filter(e=>e.collection))
    },
  }))
  .actions(self => {
    const loadImages = flow(function* fetchData(info) {
      try {
        const res = yield loadImagesAPI(info)
        self.data = res.data
        return res
      } catch (error) {
        console.log("error", error);
      }
    })

    const deleteImages = flow(function* fetchData(data) {
      try {
        const res = yield deleteImagesAPI(data)
        loadImages('')
        return res
      } catch (error) {
        console.log("error", error);
      }
    })
    
    const updateImage = flow(function* fetchData(id, data) {
      try {
        const res = yield imageUpdateAPI(id, data)
        loadImages('')
        return res
      } catch (error) {
        console.log("error", error);
      }
    })

    const postImage = flow(function* fetchData(img) {
      const payload = {
        "id": self.data.length + 3,
        "url": img,
        "size": "small",
        "tags": [
          "new"
        ],
        "collection": false
      }
      try {
        const res = yield uploadNewImageAPI(payload)
        loadImages('')
        return res
      } catch (error) {
        console.log("error", error);
      }
    })

    return { loadImages, deleteImages, postImage, updateImage }
  })

export function initimageCollection() {
  return imageCollection.create({
    data: [],
  })
}
