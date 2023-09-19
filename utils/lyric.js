// 方法一：单纯的切割方法去匹配
export function lyricAnalysis1(lyric) {
  const sentence = lyric.split(/[\\\n]/);
  console.log(sentence);
  let result = [];
  for (let i of sentence) {
    if (i.length <= 0) continue;
    const time = Number(i.slice(1,3))*3600 + Number(i.slice(4,6))*60 + Number(i.slice(7,9));
    const text = i.slice(10);
    result.push({time: time, text: text});
  }
  return result;
}

// 方法二：通过正则表达式匹配

const timeReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function lyricAnalysis(lyric){
  const lines = lyric.split("\n");
  let result = [];
  for (let line of lines) {
    const tmp = timeReg.exec(line);
    if(!tmp) continue;
    const minute = tmp[1] * 60 *1000;
    const second = tmp[2] * 1000;
    const time = minute + second + (tmp[3].length == 2 ? tmp[3]*10: tmp[3] * 1);
    const text = line.replace(timeReg, "");
    result.push({time, text});
  }

  return result;
}