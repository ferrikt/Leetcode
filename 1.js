// Coding Interview: Voting Application
//
// We are going to implement a function that determines the winner of an election. Our function is going to look something like this:
//
// String findWinner(List<String> votes)
// We pass in a list of names and we are returned the name that appeared in the list of names the most times.
//
// Example input will look like this:
//
// Arrays.asList("A", "B", "A", "C", "D", "B", "A");
//
// Question 0 Scale up: Use just one loop
// Question 1 Scale-up: Breaking Ties (first one reachin max number)
// Question 2 Scale-up: Multiple Votes

/*import { twoSum } from '../../src/easy'

test('0001. Two Sum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum([2, 7, 11, 15], 18)).toEqual([1, 2])
  expect(twoSum([2, 7, 11, 15], 17)).toEqual([0, 3])
})*/

/**
 * @param {string[]} votes
 * @return {string}
 */
const findWinner = votes => {
  //approach - use dictionary-map
  // time complexity O(N logN)
  //space complexity O(M)

  if (!votes) return null;

  let vinners = new Map();

  //create a data structure - name->amount of occurances
  for (let i = 0; i < votes.length; i++) {
    if (vinners.has(votes[i])) {
      let val = vinners.get(votes[i]);
      val++;
      vinners.set(votes[i], val);
    } else {
      vinners.set(votes[i], 1);
    }
  }

  //select the max amount of occurances O(N logN)

  let sortedWinners = new Map(
    [...vinners.entries()].sort((a, b) => b[1] - a[1])
  );

  const topWinner = sortedWinners.entries().next().value[0];

  return topWinner;
};

const test = () => {
  // expect(findWinner(["A", "B", "A", "C", "D", "B", "A"])).toEqual("A");
  // expect(findWinner(["B", "B", "B", "C", "D", "B", "A"])).toEqual("B");
  // expect(findWinner(["N", "N", "N", "N", "D", "B", "A"])).toEqual("N");

  const result1 = findWinner(["A", "B", "A", "C", "D", "B", "A"]);
  console.log(result1 === "A");

  const result2 = findWinner(["B", "B", "B", "C", "D", "B", "A"]);
  console.log(result2 === "B");
};

console.log(findWinner(["A", "B", "A", "C", "D", "B", "A"]));

test();
