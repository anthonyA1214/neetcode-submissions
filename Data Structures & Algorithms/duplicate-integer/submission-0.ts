class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Set();
        let seened = false;
        nums.forEach((val) => {
            console.log(val);
            if (!seen.has(val)) {
                seen.add(val);
            } else {
                seened = true;
            }
        })

        return seened;
    }
}
