import {hyRequest} from '../services/request.js'

export function getTopMv(offset = 0, limit = 30){
  return hyRequest.get(
    'top/mv',
    {
      limit,
      offset
    }
  )
}

export function getMvUrl(id) {
  return hyRequest.get(
    'mv/url',
    {id}
  )
}

export function getMvDetail(mvid) {
  return hyRequest.get(
    'mv/detail',
    { mvid }
  )
}

export function getRelative(id) {
  return hyRequest.get(
    'related/allvideo',
    { id }
  )
}