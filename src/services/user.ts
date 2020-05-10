import { Account } from '../sql/accounts';
import { Profile } from '../sql/profiles';

export const filteredAccount = (user: Account) => {
	delete user.uid;
	delete user.password;
	return user;
}

export const filteredProfile = (user: Profile) => {
	delete user.uid;
	return user;
}