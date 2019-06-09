import { Component, OnInit, HostListener, Input } from '@angular/core';

import { Image } from '../models';
import { build } from '../utils';

@Component({
  selector: 'ccc-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @Input() hasWallpaper = true;
  @Input() backgroundImageUrl = null;
  images = [
    build(Image, {
      src: 'assets/v/1.jpg',
      height: 1641,
      width: 2048,
      cols: 2,
      color: '#000',
      name: 'billy-o'
    }),
    build(Image, {
      src: 'assets/v/7.jpg',
      height: 569,
      width: 500,
      cols: 3,
      name: 'hamilton-restaurant'
    }),
    build(Image, {
      src: 'assets/h/2.jpg',
      height: 305,
      width: 452,
      cols: 2,
      name: 'carlisle-borough-sign'
    }),
    build(Image, {
      src: 'assets/h/12.jpg',
      height: 366,
      width: 650,
      cols: 2,
      name: 'carlisle-police'
    }),
    build(Image, {
      src: 'assets/h/1.jpg',
      height: 655,
      width: 1600,
      cols: 3,
      name: 'proudly-serving'
    }),

    build(Image, { src: 'assets/v/5.jpg', height: 503, width: 450, cols: 2 }),
    build(Image, {
      src: 'assets/v/10.jpg',
      height: 1536,
      width: 2048,
      cols: 3,
      name: 'bison'
    }),
    build(Image, {
      src: 'assets/h/3.jpg',
      height: 640,
      width: 1280,
      cols: 2,
      color: 'darkgreen',
      name: 'andrew-marshall-squad'
    }),
    build(Image, {
      src: 'assets/h/6.jpg',
      height: 215,
      width: 350,
      cols: 2,
      color: '#000',
      name: 'street-hoops'
    }),
    build(Image, {
      src: 'assets/v/2.jpg',
      height: 1344,
      width: 1200,
      cols: 2,
      name: 'powder'
    }),

    build(Image, { src: 'assets/h/4.jpg', height: 317, width: 432, cols: 2 }),
    build(Image, { src: 'assets/h/5.jpg', height: 801, width: 1200, cols: 2 }),
    build(Image, { src: 'assets/h/7.jpg', height: 453, width: 604, cols: 2 }),
    build(Image, { src: 'assets/h/8.jpg', height: 448, width: 599, cols: 2 }),
    build(Image, { src: 'assets/h/9.jpg', height: 888, width: 1200, cols: 2 }),
    build(Image, { src: 'assets/h/10.jpg', height: 373, width: 620, cols: 2 }),
    build(Image, { src: 'assets/h/11.jpg', height: 411, width: 620, cols: 2 }),
    build(Image, { src: 'assets/h/13.jpg', height: 533, width: 800, cols: 2 }),
    build(Image, { src: 'assets/h/14.jpg', height: 720, width: 960, cols: 2 }),
    build(Image, { src: 'assets/h/15.jpg', height: 407, width: 604, cols: 2 }),
    build(Image, {
      src: 'assets/h/16.jpg',
      height: 701,
      width: 1024,
      cols: 2,
      name: 'dickinson'
    }),
    build(Image, { src: 'assets/h/17.png', height: 262, width: 350, cols: 2 }),
    build(Image, { src: 'assets/h/18.jpg', height: 262, width: 350, cols: 2 }),
    build(Image, { src: 'assets/h/19.jpg', height: 260, width: 448, cols: 2 }),
    build(Image, { src: 'assets/v/3.jpg', height: 328, width: 300, cols: 1 }),
    build(Image, { src: 'assets/v/4.jpg', height: 350, width: 337, cols: 1 }),
    build(Image, { src: 'assets/v/6.jpg', height: 960, width: 960, cols: 1 }),
    build(Image, { src: 'assets/v/8.jpg', height: 960, width: 960, cols: 1 }),
    build(Image, { src: 'assets/v/9.jpg', height: 450, width: 300, cols: 1 }),
    build(Image, { src: 'assets/v/11.jpg', height: 960, width: 644, cols: 1 })
  ];

  constructor() {}

  get mobile(): boolean {
    return (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        navigator.userAgent.substr(0, 4)
      )
    );
  }

  get offsetLeft(): number {
    return this.mobile ? 0 : 120;
  }

  get sidenavHeight(): number {
    return this.windowHeight + 50;
  }

  get windowHeight(): number {
    return parseInt(localStorage.getItem('WINDOW_HEIGHT'), 10);
  }

  set windowHeight(value: number) {
    localStorage.setItem('WINDOW_HEIGHT', value.toString());
  }

  get windowWidth(): number {
    return parseInt(localStorage.getItem('WINDOW_WIDTH'), 10);
  }

  set windowWidth(value: number) {
    localStorage.setItem('WINDOW_WIDTH', value.toString());
  }

  ngOnInit() {}

  @HostListener('window:load', ['$event'])
  onLoad(e: any) {
    this.windowHeight =
      e && e.currentTarget && e.currentTarget.innerHeight
        ? e.currentTarget.innerHeight
        : 0;
    this.windowWidth =
      e && e.currentTarget && e.currentTarget.innerWidth
        ? e.currentTarget.innerWidth
        : 0;
    console.log('\n\nwindow:load', this.windowWidth, this.windowHeight);
  }

  @HostListener('window:resize', ['$event'])
  onResize(e: any) {
    this.windowHeight =
      e && e.currentTarget && e.currentTarget.innerHeight
        ? e.currentTarget.innerHeight
        : 0;
    this.windowWidth =
      e && e.currentTarget && e.currentTarget.innerWidth
        ? e.currentTarget.innerWidth
        : 0;
    console.log('\n\nwindow:resize', this.windowWidth, this.windowHeight);
  }
}
