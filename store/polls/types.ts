import { Poll, Vote, ChoiceVote } from '@/lib/polls/models';
import { ActionTree, ActionContext, MutationTree, GetterTree } from 'vuex';
import { RootState } from '../types';

export interface PollsState {
  polls: Poll[];
  votes: Vote[];
}

/**
 * Create a type for convenience
 */
export type PollActionContext = ActionContext<PollsState, RootState>;

/**
 * Polls actions
 */
export interface PollsActions extends ActionTree<PollsState, RootState> {
  load: (ctx: PollActionContext) => void;
  vote: (ctx: PollActionContext, choiceVote: ChoiceVote) => void;
}

/**
 * Polls mutations
 */
export interface PollsMutations extends MutationTree<PollsState> {
  setPolls: (state: PollsState, polls: Poll[]) => void;
  vote: (state: PollsState, vote: Vote) => void;
}

/**
 * Polls getters is type instead of interface because it is
 * empty
 */
export type PollsGetters = GetterTree<PollsState, RootState>;