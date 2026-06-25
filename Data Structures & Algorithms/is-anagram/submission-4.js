class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const mapS = new Map()
        const mapT = new Map()

        for (let i = 0; i < s.length; i++) {
            mapS.set(s.charAt(i), (mapS.get(s.charAt(i)) || 0) + 1)
        }

        for (let i = 0; i < t.length; i++) {
            mapT.set(t.charAt(i), (mapT.get(t.charAt(i)) || 0) + 1)
        }

        for (const [key, _] of mapS.entries()) {
            if (mapS.get(key) !== mapT.get(key)) return false
        }

        return true
    }
}