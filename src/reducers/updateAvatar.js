import { UPDATE_AVATAR } from "../actions/updateAvatar";
export default function updateAvatar(state = {}, action) {
    switch (action.type) {
        case UPDATE_AVATAR:
          return {
            ...state,
            ...action.questions,
          };

        }
      };