class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    const bucket = Array(nums.length + 1).fill(0).map(() => []);

    for (const num of nums) {
      map.set(num, (map.get(num) || 0) + 1);
    }

    for (const [num, freq] of map.entries()) {
      bucket[freq].push(num)
    }

    const res: number[] = [];

    for (let i = bucket.length - 1; i > 0; i--) {
      for (const num of bucket[i]) {
        res.push(num);
        if (res.length === k) {
          return res;
        }
      }
    }

    return []
  }
}
