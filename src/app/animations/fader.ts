import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const fader: AnimationTriggerMetadata = 
trigger('routeAnimations', [
  transition('* <=> *', [
    // Set a default  style for enter and leave
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 220,
        width: '85%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)',
      }),
    ]),
    // Animate the new page in
    query(':enter', [
      animate('300ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
    ])
  ]),
]);