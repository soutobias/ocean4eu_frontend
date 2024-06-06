import * as Cesium from 'cesium'
import { defaultOpacity } from './map/utils'

export async function addGeeLayer(data, actual) {
  const imageryProvider = new Cesium.UrlTemplateImageryProvider({
    url: data.urlFormat,
  })
  const layer = new Cesium.ImageryLayer(imageryProvider)
  layer.attribution = actual
  layer.alpha = defaultOpacity
  return layer
}
