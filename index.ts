import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/hello-world", (req: Request, res: Response) => {
    res.send("Hello world at " + new Date())
});

router.get("/hello-variable/:nimi", (req: Request, res: Response) => {
  res.send("Hello " + req.params.nimi)
});

router.get("/add/:nr1/:nr2", (req: Request, res: Response) => {
  res.send(req.params.nr1 + req.params.nr2)
});

router.get("/multiply/:nr1/:nr2", (req: Request, res: Response) => {
  const nr1 = Number(req.params.nr1);
  const nr2 = Number(req.params.nr2);
  res.send((nr1 * nr2).toString());
});

router.get("/do-logs/:arv", (req: Request, res: Response) => {
  for (let index = 0; index < Number(req.params.arv); index++) {
    console.log("See on logi nr " + index);
  }
  res.send();
});


router.get("/random/:min/:max", (req: Request, res: Response) => {
    const min = Number(req.params.min);
    const max = Number(req.params.max);
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    res.send(randomNumber.toString());
});

router.get("/age/:birthYear", (req: Request, res: Response) => {
    const birthYear = Number(req.params.birthYear);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    const birthDate = new Date(birthYear, 0); // Assuming the birth date is January 1st
    const hasBirthdayPassed = new Date().getTime() >= birthDate.getTime();
    const ageString = hasBirthdayPassed ? `${age} years old` : `${age - 1} years old`;
    res.send(`You are ${ageString}`);
});

export default router;