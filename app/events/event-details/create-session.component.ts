import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ISession } from '../shared/event.model'

@Component({
  templateUrl: './app/events/event-details/create-session.component.html',
  styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input, .error select, .error textarea {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :ms-input-placeholder {color: #999;}
  `]
})
export class CreateSessionComponent implements OnInit {

  newSessionForm: FormGroup
  name: FormControl
  presenter: FormControl
  duration: FormControl
  level: FormControl
  abstract: FormControl

  ngOnInit() {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'bar'])])

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  // restrictedWords takes in a FormControl and returns a function that object:
  private restrictedWords(words) {
    return (control: FormControl): { [key: string]: any } => {
      
      // if no words are passed in, everything is valid. Return null.
      if (!words) return null

      // The following .map() function loops through all restricted key words and checks our controls.value to see if it contains that word.  If found, return the word or return null if it's not found.
      //    Then, we'll just need to filter out these nulls.
      var invalidWords = words.map(w => control.value.includes(w) ? w : null)
                              .filter(w => w != null)

      return invalidWords && invalidWords.length > 0
        ? { 'restrictedWords': invalidWords.join(', ') }
        : null
    }
  }

  saveSession(formValues) {
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duraction,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    }
    console.log(session)
  }

}