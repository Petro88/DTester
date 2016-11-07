export const baseUrl: string = "http://dtapi.local/";
export const getAnswersByQuestionTestPlayerUrl: string = baseUrl + "SAnswer/getAnswersByQuestion/";
// AUTH action
export const loginUrl: string = baseUrl + "login/index";
export const logoutUrl: string = baseUrl + "login/logout";

// Url
export const getTestsBySubjectIdUrl: string = baseUrl + 'test/getTestsBySubject'; // + id of subject
export const getTimeTableForSubjectUrl: string = baseUrl + 'timeTable/getTimeTablesForSubject'; // + id of subject
export const getTestDetailsByTestUrl: string = baseUrl + 'testDetail/getTestDetailsByTest'; // + id of subject
export const getQuestionsByLevelRandUrl: string = baseUrl + "question/getQuestionsByLevelRand"; // + test_id + level + number
export const getRecordsRangeByTestUrl: string = baseUrl + "question/getRecordsRangeByTest"; // + test_id + limit + offset
export const countRecordsByTestUrl: string = baseUrl + "question/countRecordsByTest"; // + test_id

// Pagination
export const maxSize: number = 5;

// Config for info-confirm modal
export const modalInfoConfig = {
    title: "",
    infoString: "",
    action: ""
};