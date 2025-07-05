import { Component } from '@angular/core';

@Component({
  selector: 'app-semana12',
  imports: [],
  templateUrl: './semana12.component.html',
})
export class Semana12Component {
  title = '';
  subtitle = '';

  private fullTitle = 'SEMANA 12';
  private fullSubtitle = 'JSP Jakarta y Spring';

  ngOnInit(): void {
    this.typeWriter(this.fullTitle, 'title', 100).then(() => {
      this.typeWriter(this.fullSubtitle, 'subtitle', 50);
    });
  }

  async typeWriter(text: string, property: 'title' | 'subtitle', speed: number) {
    for (let i = 0; i <= text.length; i++) {
      this[property] = text.substring(0, i);
      await new Promise(resolve => setTimeout(resolve, speed));
    }
  }
}
