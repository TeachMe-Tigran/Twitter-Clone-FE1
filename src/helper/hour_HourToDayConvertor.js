export default function hour_hourToDayConvertor(createTIme) {
  const parseCreateTIme = Date.parse(createTIme.slice(0, 10));
  const time = (new Date().getTime() - parseCreateTIme) / 1000 / 3600;
  return parseInt(time) >= 24
    ? `${parseInt(time / 24)}${"d."}`
    : `${`${parseInt(time) < 1 ? "" : `${parseInt(time)} ${"h."}`}`}`;
}
