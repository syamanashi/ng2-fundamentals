import { FormControl } from '@angular/forms'

// restrictedWords takes in a FormControl and returns a function that object:
export function restrictedWords(words) {
  return (control: FormControl): { [key: string]: any } => {

    // if no words are passed in, everything is valid. Return null.
    if (!words) return null

    // The following .map() function loops through all restricted key words and checks our controls.value to see if it contains that word.  If found, return the word or return null if it's not found.
    //    Then, we'll just need to filter out these nulls.
    var invalidWords = words
      .map(w => control.value.includes(w) ? w : null)
      .filter(w => w != null)

    return invalidWords && invalidWords.length > 0
      ? { 'restrictedWords': invalidWords.join(', ') }
      : null
  }
}
