import { verify } from "jsonwebtoken";

const getToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    verify(token, process.env.JWT_SECRET, (error, decode) => {
      if (error) {
        return res.status(200).json({ message: "Auth Fialed", success: false });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "Auth Faild",
      success: false,
    });
  }
};

export default getToken;
