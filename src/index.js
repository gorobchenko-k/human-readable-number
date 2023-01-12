module.exports = function toReadable (n) {
  const numbers = {
            'hundred': 100,
            'ninety': 90,
            'eighty': 80,
            'seventy': 70,
            'sixty': 60,
            'fifty': 50,
            'forty': 40,
            'thirty': 30,
            'twenty': 20,
            'nineteen': 19,
            'eighteen': 18,
            'seventeen': 17,
            'sixteen': 16,
            'fifteen': 15,
            'fourteen': 14,
            'thirteen': 13,
            'twelve': 12,
            'eleven': 11,
            'ten': 10,
            'nine': 9,
            'eight': 8,
            'seven': 7,
            'six': 6,
            'five': 5,
            'four': 4,
            'three': 3,
            'two': 2,
            'one': 1,
        }

        let result = '';
        if (n === 0) {
            return 'zero';
        }

        for (let key in numbers) {
            while (numbers[key] <= n) {
                if (n >= 100) {
                    let a = Object.keys(numbers).find(key => numbers[key] === Math.trunc(n / 100));
                    result = result + ' ' + a + ' ' + key;
                    n = n - Math.trunc(n / 100) * numbers[key];
                } else {
                    result = result + ' ' + key;
                    n -= numbers[key];
                }
            }
        }

        return result.trim();
}
