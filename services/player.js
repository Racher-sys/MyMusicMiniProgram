import { hyRequest } from '../services/request.js';

// 获取歌曲细节
export function getSongDetials(ids) {
  return hyRequest.get(
    'song/detail',
    { ids }
  )
}
// 获取歌词
export function getLyric(id) {
  return hyRequest.get(
    'lyric',
    { id }
  )
}