class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    let res: string = '';

    for (const str of strs) {
      res += str.length + '#' + str;
    }

    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    const res: string[] = []

    let i = 0;
    while (i < str.length) {
      const j = str.indexOf('#', i)
      const len = Number(str.slice(i, j))
      res.push(str.slice(j + 1, len + j + 1))
      i = len + j + 1;
    }

    return res;
  }
}