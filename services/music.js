import { hyRequest } from '../services/request.js';

export function getBanner(){
  return hyRequest.get(
    'banner',
    { type: 2}
  )
}

export function getRecommendSong(id=3778678) {
  return hyRequest.get(
    'playlist/detail',
    {id}
  )
}

export function getHotMenu(cat="全部", offset=0, limit=6) {
  return hyRequest.get(
    'top/playlist',
    {cat, offset, limit}
  )
}

export function getMusicTag(){
  return hyRequest.get(
    'playlist/hot'
  )
}