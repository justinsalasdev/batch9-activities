export default function createDMId(uidFrom, uidTo) {
  return uidFrom < uidTo ? uidFrom + uidTo : uidTo + uidFrom;
}
