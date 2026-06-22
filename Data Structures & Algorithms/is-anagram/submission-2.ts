class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const mapS = new Map<string, number>();
        const mapT = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            const char = s.charAt(i)

            if (mapS.get(char) !== undefined) {
                mapS.set(char, mapS.get(char) + 1)
            } else {
                mapS.set(char, 1);
            }

        }

        for (let i = 0; i < t.length; i++) {
            const char = t.charAt(i)

            if (mapT.get(char) !== undefined) {
                mapT.set(char, mapT.get(char) + 1)
            } else {
                mapT.set(char, 1);
            }
        }

        const keys = [...mapS.keys()];

        for (let i = 0; i < keys.length; i++) {
            if (mapS.get(keys[i]) !== mapT.get(keys[i])) {
                return false;
            }
        }

        return true
    }
}
