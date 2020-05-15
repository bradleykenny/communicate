import { getUserInfo, UserAction } from './user';
import { getMessages } from './messages';

export * from './login'; 
export * from './messages';
export * from './user';

// export function getProfileAndMessages() {
// 	return (dispatch: any) => {
// 		return dispatch(getUserInfo()).then((res: UserAction) => {
// 			if (res.type === "USER_SUCCESS") {
// 				return dispatch(getMessages(res.user.uid, "sent"));
// 			} return res;
// 		});
// 	};
// };