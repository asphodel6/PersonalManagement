import {
  trigger,
  transition,
  style,
  query,
  animate,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const fader: AnimationTriggerMetadata = 
trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 220,
        width: '85%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)',
      }),
    ]),
    query(':enter', [
      animate('300ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
    ])
  ]),
]);