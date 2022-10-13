// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res
    .status(200)
    .json({ name: "Ryu Jaewon", age: "24", email: "wodnjs6159@naver.com" });
}
