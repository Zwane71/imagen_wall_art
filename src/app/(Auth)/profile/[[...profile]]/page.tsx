import { UserProfile } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const UserProfilePage = async () => {
	const { userId } = auth();
	const isAuth = !!userId;
	const user = await currentUser();

	if (!isAuth) {
		redirect("/");
	}

	return;
	<div className=' flex p-6 mx-auto items-center justify-center '>
		<h2>{user?.username}</h2>
		<UserProfile path='/profile' />
	</div>;
};

export default UserProfilePage;
