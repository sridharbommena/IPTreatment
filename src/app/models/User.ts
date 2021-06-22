export class User
{
    userName:string;
	password:string;

    getUserName()
    {
        return this.userName;
    }

    getPassword()
    {
        return this.password;
    }
    setUserName(userName)
    {
        this.userName = userName;
    }
    setPassword(password)
    {
        this.password = password
    }

}