function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let delivery = deliveries.reverse();
  let pickup = pickups.reverse();

  let toDelivery = 0;
  let toPickup = 0;

  for (let i = 0; i < n; i++) {
    toDelivery += delivery[i];
    toPickup += pickup[i];
    if (toDelivery > 0 || toPickup > 0) {
      toDelivery -= cap;
      toPickup -= cap;
      answer += (n - i) * 2;
    }
  }
  return answer;
}
