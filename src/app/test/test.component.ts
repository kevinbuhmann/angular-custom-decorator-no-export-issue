import { Component, Input } from '@angular/core';

import { Convert } from '../decorators/convert.decorator';

export interface NameViewModel {
  name: string;
  nameLength: number;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  @Input() @Convert(convertName) name: NameViewModel;
}

/*export*/ function convertName(name: string) {
  const model: NameViewModel = {
    name,
    nameLength: name.length
  };

  return model;
}
