class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map();

        for (const str of strs) {
            const sorted = str.split('').sort().join();

            if (map.has(sorted)) {
            const value = map.get(sorted);

            value.push(str);
            } else {
            map.set(sorted, [str]);
            }
        }

        return [...map.values()]
    }
}
