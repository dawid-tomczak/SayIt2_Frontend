import { environment } from 'src/environments/environment';

export const BASE_URL = environment.newBackendUrl + '/api';

// auth
export const USER_CONTROLLER = BASE_URL + '/User';
export const LOGIN_ENDPOINT = USER_CONTROLLER + '/LoginUser';
export const LOGOFF_ENDPOINT = USER_CONTROLLER + '/Logoff';
export const REGISTER_ENDPOINT = USER_CONTROLLER + '/Register';

// categories
export const CATEGORIES_CONTROLLER = BASE_URL + '/Categories';

// flashcards
export const FLASHCARDS_CONTROLLER = BASE_URL + '/Flashcard';
export const ALL_FLASHCARDS_FROM_CATEGORY = FLASHCARDS_CONTROLLER + '/getAllInCategory/:ID';
export const ALL_FLASHCARDS_ENDPOINT = FLASHCARDS_CONTROLLER + '/getall';
export const MARK_FLASHCARD_AS_SEEN = FLASHCARDS_CONTROLLER + '/setAsSeen';

// quizzes
export const QUIZ_CONTROLLER = BASE_URL + '/Quiz';

// config consts
export const questionSeconds = 25;
