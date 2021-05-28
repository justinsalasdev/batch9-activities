export default function (uidFrom, uidTo) {
  return uidFrom < uidTo ? uidFrom + uidTo : uidTo + uidFrom;
}
