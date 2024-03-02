const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "b1",
      message: "Qual a nota do primeiro bimestre ?",
    },
    {
      name: "b2",
      message: "Qual a nota do segundo bimestre ?",
    },
    {
      name: "b3",
      message: "Qual a nota do terceiro bimestre ?",
    },
    {
      name: "b4",
      message: "Qual a nota do quarto bimestre ?",
    },
  ])

  .then((answars) => {
    console.log(answars);
    const media =(
      parseInt(answars.b1) +
      parseInt(answars.b2) +
      parseInt(answars.b3) +
      parseInt(answars.b4)) / 4;

    console.log(`A media bimestral é: ${media}`);
  })

  .catch((err) => console.log(err));
