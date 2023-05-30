import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  length = 0;
  password = "";
  changeLetter = false;
  changeNumber = false;
  changeSymbols = false;

  inputChangeLetter() {
    this.changeLetter = !this.changeLetter;
  }
  inputChangeNumber() {
    this.changeNumber = !this.changeNumber;
  }
  inputChangeSymbols() {
    this.changeSymbols = !this.changeSymbols;
  }

  onButtonClick() {
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwyz";
    const symbols = "!@#$%^&*()";

    let validChars = "";
    if (this.changeLetter) {
      validChars += letters;
    }
    if (this.changeNumber) {
      validChars += numbers;
    }
    if (this.changeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = "";
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
