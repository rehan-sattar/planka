import { all, takeLatest } from 'redux-saga/effects';

import {
  addUserToCardService,
  addUserToCurrentCardService,
  addUserToFilterInCurrentBoardService,
  clearCurrentUserEmailUpdateErrorService,
  clearCurrentUserPasswordUpdateErrorService,
  clearUserCreateErrorService,
  createUserService,
  deleteUserService,
  removeUserFromCardService,
  removeUserFromCurrentCardService,
  removeUserFromFilterInCurrentBoardService,
  updateUserService,
  updateCurrentUserEmailService,
  updateCurrentUserPasswordService,
  updateCurrentUserService,
  uploadCurrentUserAvatarService,
} from '../services';
import EntryActionTypes from '../../../constants/EntryActionTypes';

export default function* () {
  yield all([
    takeLatest(EntryActionTypes.USER_CREATE, ({ payload: { data } }) => createUserService(data)),
    takeLatest(EntryActionTypes.USER_CREATE_ERROR_CLEAR, () => clearUserCreateErrorService()),
    /* eslint-disable max-len */
    takeLatest(EntryActionTypes.USER_UPDATE, ({ payload: { id, data } }) => updateUserService(id, data)),
    takeLatest(EntryActionTypes.CURRENT_USER_UPDATE, ({ payload: { data } }) => updateCurrentUserService(data)),
    takeLatest(EntryActionTypes.CURRENT_USER_EMAIL_UPDATE, ({ payload: { data } }) => updateCurrentUserEmailService(data)),
    takeLatest(EntryActionTypes.CURRENT_USER_EMAIL_UPDATE_ERROR_CLEAR, () => clearCurrentUserEmailUpdateErrorService()),
    takeLatest(EntryActionTypes.CURRENT_USER_PASSWORD_UPDATE, ({ payload: { data } }) => updateCurrentUserPasswordService(data)),
    takeLatest(EntryActionTypes.CURRENT_USER_PASSWORD_UPDATE_ERROR_CLEAR, () => clearCurrentUserPasswordUpdateErrorService()),
    takeLatest(EntryActionTypes.CURRENT_USER_AVATAR_UPLOAD, ({ payload: { file } }) => uploadCurrentUserAvatarService(file)),
    /* eslint-enable max-len */
    takeLatest(EntryActionTypes.USER_DELETE, ({ payload: { id } }) => deleteUserService(id)),
    /* eslint-disable max-len */
    takeLatest(EntryActionTypes.USER_TO_CARD_ADD, ({ payload: { id, cardId } }) => addUserToCardService(id, cardId)),
    takeLatest(EntryActionTypes.USER_TO_CURRENT_CARD_ADD, ({ payload: { id } }) => addUserToCurrentCardService(id)),
    takeLatest(EntryActionTypes.USER_FROM_CARD_REMOVE, ({ payload: { id, cardId } }) => removeUserFromCardService(id, cardId)),
    takeLatest(EntryActionTypes.USER_FROM_CURRENT_CARD_REMOVE, ({ payload: { id } }) => removeUserFromCurrentCardService(id)),
    takeLatest(EntryActionTypes.USER_TO_FILTER_IN_CURRENT_BOARD_ADD, ({ payload: { id } }) => addUserToFilterInCurrentBoardService(id)),
    takeLatest(EntryActionTypes.USER_FROM_FILTER_IN_CURRENT_BOARD_REMOVE, ({ payload: { id } }) => removeUserFromFilterInCurrentBoardService(id)),
    /* eslint-enable max-len */
  ]);
}
