import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  photoCover: string = "https://i.vimeocdn.com/video/1500221698-62d0dcf61c45a8061df3fdf6a46f957ed84915729d325e4868f632f559a37953-d_640"
  cardTitle: string = "O que é Universo?"
  cardDescription: string = "Na astronomia, o Universo corresponde ao conjunto de toda a matéria, energia, espaço e tempo existente. Ele reúne os astros: planetas, cometas, estrelas, galáxias, nebulosas, satélites, dentre outros. O universo é, portanto, mais que um local imenso, ele é tudo, e engloba tudo o que existe. Para muitos, infinito. Note que do latim, a palavra universum significa “todo inteiro” ou “tudo em um só”."

}
