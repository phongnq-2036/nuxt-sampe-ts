import { Poll } from "./models";

export const DUMMY_POLLS: Poll[] = [
  {
    id: 1,
    topic: 'Which framework are you using?',
    choices: [
      { id: 1, count: 0, pollId: 1, text: 'NuxtJS' },
      { id: 2, count: 0, pollId: 1, text: 'Plain VueJS' },
      { id: 3, count: 0, pollId: 1, text: 'Angular' },
      { id: 4, count: 0, pollId: 1, text: 'React' }
    ]
  },
  {
    id: 2,
    topic: 'What is your OS?',
    choices: [
      { id: 5, count: 0, pollId: 2, text: 'Windows' },
      { id: 6, count: 0, pollId: 2, text: 'Linux' },
      { id: 7, count: 0, pollId: 2, text: 'MacOS' }
    ]
  }
]

export const loadPolls = async (): Promise<Poll[]> => {
  return new Promise<Poll[]>(resolve =>
    setTimeout(() => resolve(DUMMY_POLLS), 500)
  );
};