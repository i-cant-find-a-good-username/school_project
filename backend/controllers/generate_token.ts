import { UserType } from "../types"
import { ObjectId } from "mongodb";
import { sign } from "jsonwebtoken"








const generate_token = (data: UserType, id?: ObjectId) => {
	const port = process.env.JWT_TOKEN_KEY;
	return sign(
		{
			_id : id,
			username : data.username,
			email : data.email,
			profile_image : data.profile_image,
			created:  Math.floor(Date.now() / 1000)
		},
		"secret",
		{ expiresIn: 60 * 60 * 24 * 7} // 1 week
	);
}

export { generate_token }