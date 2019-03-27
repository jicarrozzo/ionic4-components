import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
	transform(values: any[], texto: string, column: string): any[] {
		if (texto === '') return values;
		texto = texto.toLowerCase();

		return values.filter((item) => {
			return item[column].toLowerCase().includes(texto);
		});
	}
}
