export const CHECK_VOTES = "CHECK_VOTES";

export function checkVotes (questionId, option, userId) {
  return {
  type: CHECK_VOTES,
  payload: { questionId, option, userId },
};
}
