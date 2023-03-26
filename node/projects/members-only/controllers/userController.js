export const signInGet = (req, res, next) => {
  console.log("sign up page");
  res.render("sign-in");
};

export const signUpGet = (req, res, next) => {
  console.log("sign up page");
  res.render("sign-up");
};

export const signUpPost = (req, res, next) => {
  console.log("request body: ", req.body);
  res.render("sign-up");
};
