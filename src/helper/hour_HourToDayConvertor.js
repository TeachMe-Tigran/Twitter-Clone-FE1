export default function hour_hourToDayConvertor(tweetTime) {
  const time = (new Date().getTime() - tweetTime) / 1000 / 3600;
  return parseInt(time) >= 24
    ? `${parseInt(time / 24)}${"d."}`
    : `${`${parseInt(time) < 1 ? "" : `${parseInt(time)} ${"h."}`}`}`;
}
