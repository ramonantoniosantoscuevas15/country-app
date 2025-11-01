import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {
  placeholder = input('Buscar')
  value = output<string>();

  debounceTime = input(1000)
  intialValue = input<string>('')
  inputValue = linkedSignal<string>(()=>this.intialValue() ?? '')


  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.value.emit(value)

    }, this.debounceTime())
    onCleanup(() => {
      clearTimeout(timeout)
    })
  })
}
