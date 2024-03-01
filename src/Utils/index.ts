import jwt from 'jsonwebtoken';

const SECRECT = "THISMYSECRET";

export const encodeToken = (payload: any) => {
    const token = jwt.sign(payload, SECRECT, {expiresIn : "1h"});
    return token;
}

export const decodeToken = (token: string) => {
    const decode = jwt.verify(token, SECRECT);
    return token;
}