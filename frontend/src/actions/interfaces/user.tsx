export interface userLogin {
    _id:     string;
    name:    string;
    email:   string;
    isAdmin: boolean;
    token:   string;
}

export interface userActionLogin{
    payload: userLogin,
    type: string
}