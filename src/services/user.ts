import { Account, Profile } from '../sql/';

export const filteredAccount = (user: Account) => {
	delete user.password;
	return user;
}

export const filteredProfile = (user: Profile) => {
	delete user.uid;
	return user;
}