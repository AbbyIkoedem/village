
var a = prompt("have you ever been to Ibom xmas village?");

switch (a) {

  case "yes":
    let me = prompt("was it a memorable experience?");
    switch (me) {
      case "yes":
        alert('Awwwwwn, that is Beautiful');
        let wyv = prompt("Would you visit again?");

        switch (wyv) {
          case "yes":
            alert('thanks for sharing');

            break;

          default: alert('your no fun');
        }

        break;

      case "no":
        alert('sorry baby, that is a horrible experience');
        break;

      default:
        alert('sounds............ interesting');
    }

    break;

  case "no":
    let y = prompt("never heard of it?");
    switch (y) {
      case "yes":
        let ve = prompt("would Like to visit it?")
        switch (ve) {
          case "yes":
            alert('thanks for sharing');
            break;

          default:
            alert('urrghrrr your so boring');
        }
        break;

      case "no":
        alert('Good thing I just told you about it');
        let ee = prompt("would Like to visit it?")
        switch (ee) {
          case "yes":
            alert('thanks for sharing');
            break;
          default:
            alert("sketat");
        }
      }

        break;

      default:
        alert("be specific?");
    }