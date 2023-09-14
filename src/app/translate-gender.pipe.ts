import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  transform(value: string, category: string): string {
    const translations: { [category: string]: { [key: string]: string }} = {
      'gender': {
        'Male': 'Mężczyzna',
        'Female': 'Kobieta'
      },
      'status': {
        'Alive': 'Żywy',
        'Dead': 'Martwy'
      },
      'species': {
        'Human': 'Człowiek',
        'Alien': 'Obcy'
      }
    };

    return translations[category]?.[value] || value;
  }
}
