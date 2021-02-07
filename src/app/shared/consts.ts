import { environment } from 'src/environments/environment';

export const BASE_URL = environment.newBackendUrl + '/api';
export const MOCK_URL = 'http://localhost:3000'

// auth
export const USER_CONTROLLER = BASE_URL + '/User';
export const LOGIN_ENDPOINT = USER_CONTROLLER + '/LoginUser';
export const LOGOFF_ENDPOINT = USER_CONTROLLER + '/Logoff';
export const REGISTER_ENDPOINT = USER_CONTROLLER + '/Register';
export const LEVEL_ENDPOINT = USER_CONTROLLER + '/GetLevel';

// categories
export const CATEGORIES_CONTROLLER = BASE_URL + '/Categories';

// flashcards
export const FLASHCARDS_CONTROLLER = BASE_URL + '/Flashcard';
export const ALL_FLASHCARDS_FROM_CATEGORY = FLASHCARDS_CONTROLLER + '/getAllInCategory/:ID';
export const ALL_FLASHCARDS_ENDPOINT = FLASHCARDS_CONTROLLER + '/getall';
export const MARK_FLASHCARD_AS_SEEN = FLASHCARDS_CONTROLLER + '/setAsSeen';

// quizzes
export const QUIZ_CONTROLLER = BASE_URL + '/Quiz';
export const QUIZ_WON = QUIZ_CONTROLLER + '/SetAsWin';
export const QUIZ_LOOSED = QUIZ_CONTROLLER + '/SetAsLoose';
export const QUIZ_BY_ID = QUIZ_CONTROLLER + '/GetById/:ID';

// challenges
export const START_CHALLENGE = USER_CONTROLLER + '/startNewStruggle';
export const MY_CHALLENGES = USER_CONTROLLER + '/getMyStruggles';

export const MOCK_MY_CHALLENGES = MOCK_URL + '/challenges';


// config consts
export const questionSeconds = 25;

// localStorage keys
export const COOKIES_APPROVED_KEY = 'SayIT--cookiesApproved';
export const AUTH_TOKEN_KEY = 'SayIT--token';

export const allLocalStorageKeys = [COOKIES_APPROVED_KEY, AUTH_TOKEN_KEY];
