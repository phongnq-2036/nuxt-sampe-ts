import { PollsState } from './types';

export const initState = (): PollsState => ({
  polls: [],
  votes: []
});

export default initState;